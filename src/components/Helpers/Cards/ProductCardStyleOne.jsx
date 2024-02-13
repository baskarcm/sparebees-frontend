import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import apiRequest from "../../../../utils/apiRequest";
import auth from "../../../../utils/auth";
import languageModel from "../../../../utils/languageModel";
import settings from "../../../../utils/settings";
import { fetchCart } from "../../../store/Cart";
import { fetchCompareProducts } from "../../../store/compareProduct";
import { fetchWishlist } from "../../../store/wishlistData";
import CheckProductIsExistsInFlashSale from "../../Shared/CheckProductIsExistsInFlashSale";
import ProductView from "../../SingleProductPage/ProductView";
import Compair from "../icons/Compair";
import QuickViewIco from "../icons/QuickViewIco";
import Star from "../icons/Star";
import ThinLove from "../icons/ThinLove";
const Redirect = ({ message, linkTxt }) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-500">{message && message}</span>
      <Link href="/cart">
        <span className="mr-2 text-xs text-blue-600 border-b border-blue-600 cursor-pointer">
          {linkTxt && linkTxt}
        </span>
      </Link>
    </div>
  );
};

export default function ProductCardStyleOne({ datas }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { wishlistData } = useSelector((state) => state.wishlistData);
  const wishlist = wishlistData && wishlistData.wishlists;
  const wishlisted =
    wishlist && wishlist.data.find((id) => id.product.id === datas.id);

  const [arWishlist, setArWishlist] = useState(null);
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [isProductInFlashSale, setData] = useState(null);
  useEffect(() => {
    if (websiteSetup) {
      const getId = websiteSetup.payload.flashSaleProducts.find(
        (item) => parseInt(item.product_id) === parseInt(datas.id)
      );
      if (getId) {
        setData(true);
      } else {
        setData(false);
      }
    }
  }, [websiteSetup]);
  const [quickViewModal, setQuickView] = useState(false);
  const [quickViewData, setQuickViewData] = useState(null);
  const [langCntnt, setLangCntnt] = useState(null);
  useEffect(() => {
    setLangCntnt(languageModel());
  }, []);
  const quickViewHandler = (slug) => {
    setQuickView(!quickViewModal);
    if (!quickViewData) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}api/product/${slug}`)
        .then((res) => {
          setQuickViewData(res.data ? res.data : null);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    if (quickViewModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [quickViewModal]);

  useEffect(() => {
    if (wishlisted) {
      setArWishlist(true);
    } else {
      setArWishlist(false);
    }
  }, [wishlisted]);
  const available =
    (datas.cam_product_sale /
      (datas.cam_product_available + datas.cam_product_sale)) *
    100;

  const addToWishlist = (id) => {
    if (auth()) {
      setArWishlist(true);
      apiRequest.addToWishlist({ id: id, token: auth().access_token });
      dispatch(fetchWishlist());
    } else {
      router.push("/login");
    }
  };
  const removeToWishlist = (id) => {
    if (auth()) {
      setArWishlist(false);
      apiRequest.removeToWishlist({ id: id, token: auth().access_token });
      dispatch(fetchWishlist());
    } else {
      router.push("/login");
    }
  };
  // cart
  const varients = datas && datas.variants.length > 0 && datas.variants;
  const [getFirstVarients, setFirstVarients] = useState(
    varients && varients.map((v) => v.active_variant_items[0])
  );
  const [price, setPrice] = useState(null);
  const [offerPrice, setOffer] = useState(null);
  const addToCart = (id) => {
    if (auth()) {
      const data = {
        id: id,
        token: auth() && auth().access_token,
        quantity: 1,
        variants:
          getFirstVarients &&
          getFirstVarients.length > 0 &&
          getFirstVarients.map((v) =>
            v ? parseInt(v.product_variant_id) : null
          ),
        variantItems:
          getFirstVarients &&
          getFirstVarients.length > 0 &&
          getFirstVarients.map((v) => (v ? v.id : null)),
      };
      if (varients) {
        const variantQuery = data.variants.map((value, index) => {
          return value ? `variants[]=${value}` : `variants[]=-1`;
        });

        const variantString = variantQuery.map((value) => value + "&").join("");

        const itemsQuery = data.variantItems.map((value, index) => {
          return value ? `items[]=${value}` : `items[]=-1`;
        });
        const itemQueryStr = itemsQuery.map((value) => value + "&").join("");
        const uri = `token=${data.token}&product_id=${data.id}&${variantString}${itemQueryStr}quantity=${data.quantity}`;
        apiRequest
          .addToCard(uri)
          .then((res) =>
            toast.success(
              <Redirect
                message={langCntnt && langCntnt.Item_added}
                linkTxt={langCntnt && langCntnt.Go_To_Cart}
              />,
              {
                autoClose: 5000,
              }
            )
          )
          .catch((err) => {
            console.log(err);
            toast.error(
              err.response &&
                err.response.data.message &&
                err.response.data.message
            );
          });
        dispatch(fetchCart());
      } else {
        const uri = `token=${data.token}&product_id=${data.id}&quantity=${data.quantity}`;
        apiRequest
          .addToCard(uri)
          .then((res) =>
            toast.success(
              <Redirect
                message={langCntnt && langCntnt.Item_added}
                linkTxt={langCntnt && langCntnt.Go_To_Cart}
              />,
              {
                autoClose: 5000,
              }
            )
          )
          .catch((err) => {
            console.log(err);
            toast.error(
              err.response &&
                err.response.data.message &&
                err.response.data.message
            );
          });
        dispatch(fetchCart());
      }
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    if (varients) {
      const prices = varients.map((v) =>
        v.active_variant_items.length > 0 && v.active_variant_items[0].price
          ? v.active_variant_items[0].price
          : 0
      );

      if (datas.offer_price) {
        const sumOfferPrice = parseFloat(
          prices.reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0) +
            parseFloat(datas.offer_price)
        );
        setPrice(datas.price);
        setOffer(sumOfferPrice);
      } else {
        const sumPrice = parseFloat(
          prices.reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0) +
            parseFloat(datas.price)
        );
        setPrice(sumPrice);
      }
    } else {
      setPrice(datas && datas.price ? parseFloat(datas.price) : null);
      setOffer(
        datas && datas.offer_price ? parseFloat(datas.offer_price) : null
      );
    }
  }, [datas, varients]);

  /*compare product feature
   * add product for compare method
   * @params (id,token)
   * request method is (apiRequest)
   * */
  const productCompare = (id) => {
    if (auth()) {
      apiRequest
        .addProductForCompare(id, auth().access_token)
        .then((res) => {
          toast.success(res.data && res.data.notification);
          dispatch(fetchCompareProducts());
        })
        .catch((err) => {
          toast.error(err.response && err.response.data.notification);
          console.log(err);
        });
    } else {
      router.push("/login");
    }
  };
  const { currency_icon } = settings();
  const [imgSrc, setImgSrc] = useState(null);
  const loadImg = (value) => {
    // const time = 3000;
    // setTimeout(() => {
    //   setImgSrc(value);
    // }, time);
    setImgSrc(value);
  };
  return (
    <div
      className="product-card-one w-full h-[445px] bg-white relative group overflow-hidden p-5 rounded"
      style={{ boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)" }}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="product-card-img w-full h-[210px] mb-5">
            <div
              className="relative flex items-center justify-center w-full h-full transition-all duration-300 ease-in-out transform scale-100 group-hover:scale-110"
              // style={{
              //   background: `url(${datas.image}) no-repeat center`,
              //   backgroundSize: "contain",
              // }}
            >
              {/*onLoadingComplete*/}
              <Image
                layout="fill"
                objectFit="scale-down"
                src={`${imgSrc ? imgSrc : "/assets/images/spinner.gif"}`}
                alt=""
                onLoadingComplete={() => loadImg(datas.image)}
                className="object-contain w-full h-full"
              />
              {/* product available progress */}
              {/*{datas.campaingn_product && (*/}
              {/*  <>*/}
              {/*    <div className="px-[30px] absolute left-0 top-3 w-full">*/}
              {/*      <div className="flex justify-between progress-title ">*/}
              {/*        <p className="text-xs leading-6 text-qblack font-400">*/}
              {/*          Prodcuts Available*/}
              {/*        </p>*/}
              {/*        <span className="text-sm leading-6 text-qblack font-600">*/}
              {/*          {datas.cam_product_available}*/}
              {/*        </span>*/}
              {/*      </div>*/}
              {/*      <div className="progress w-full h-[5px] rounded-[22px] bg-primarygray relative overflow-hidden">*/}
              {/*        <div*/}
              {/*          style={{*/}
              {/*            width: `${*/}
              {/*              datas.campaingn_product ? 100 - available : 0*/}
              {/*            }%`,*/}
              {/*          }}*/}
              {/*          className="absolute top-0 left-0 h-full bg-qgreen"*/}
              {/*        ></div>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </>*/}
              {/*)}*/}

              {/* product type */}
              {/*{datas.product_type && !datas.campaingn_product && (*/}
              {/*  <div className="product-type absolute right-[14px] top-[17px]">*/}
              {/*    <span*/}
              {/*      className={`text-[9px] font-700 leading-none py-[6px] px-3 uppercase text-white rounded-full tracking-wider ${*/}
              {/*        datas.product_type === "popular"*/}
              {/*          ? "bg-[#19CC40]"*/}
              {/*          : "bg-qgreen"*/}
              {/*      }`}*/}
              {/*    >*/}
              {/*      {datas.product_type}*/}
              {/*    </span>*/}
              {/*  </div>*/}
              {/*)}*/}
            </div>
          </div>
          <div className="relative pt-2 product-card-details">
            <div className="flex justify-center  mb-1.5">
              <div className="reviews flex space-x-[1px]">
                {Array.from(Array(datas.review), () => (
                  <span key={datas.review + Math.random()}>
                    <Star />
                  </span>
                ))}
                {datas.review < 5 && (
                  <>
                    {Array.from(Array(5 - datas.review), () => (
                      <span
                        key={datas.review + Math.random()}
                        className="text-gray-500"
                      >
                        <Star defaultValue={false} />
                      </span>
                    ))}
                  </>
                )}
              </div>
            </div>

            <Link
              href={{
                pathname: "/single-product",
                query: { slug: datas.slug },
              }}
              passHref
            >
              <a rel="noopener noreferrer">
                <p className="title mb-1.5 text-[15px] font-600 text-qblack leading-[24px] line-clamp-1 hover:text-blue-600 cursor-pointer text-center">
                  {datas.title}
                </p>
              </a>
            </Link>
            <p className="mb-6 text-center price">
              <span
                suppressHydrationWarning
                className={`main-price  font-600 text-[18px] ${
                  offerPrice ? "line-through text-qgray" : "text-qred"
                }`}
              >
                {offerPrice ? (
                  <span>
                    {currency_icon &&
                      currency_icon + parseFloat(price).toFixed(2)}
                  </span>
                ) : (
                  <>
                    {isProductInFlashSale && (
                      <span
                        className={`line-through text-qgray font-600 text-[18px] mr-2`}
                      >
                        {currency_icon &&
                          currency_icon + parseFloat(price).toFixed(2)}
                      </span>
                    )}
                    <CheckProductIsExistsInFlashSale
                      id={datas.id}
                      price={price}
                    />
                  </>
                )}
              </span>
              {offerPrice && (
                <span
                  suppressHydrationWarning
                  className="offer-price text-qred font-600 text-[18px] ml-2"
                >
                  <CheckProductIsExistsInFlashSale
                    id={datas.id}
                    price={offerPrice}
                  />
                </span>
              )}
            </p>
          </div>
        </div>
        {/* add to card button */}
        <div className="w-full h-[48px] px-2.5">
          <button
            onClick={() => addToCart(datas.id)}
            type="button"
            className="w-full h-full transition-all duration-300 ease-in-out rounded bg-qgreenlow group-hover:bg-qgreen"
          >
            <div className="flex items-center justify-center w-full h-full space-x-3 text-qgreen group-hover:text-white">
              {/* <span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <g clipPath="url(#clip0_2399_7301)">
                    <path d="M8.25357 3.32575C8.25357 4.00929 8.25193 4.69283 8.25467 5.37583C8.25576 5.68424 8.31536 5.74439 8.62431 5.74439C9.964 5.74603 11.3031 5.74275 12.6428 5.74603C13.2728 5.74767 13.7397 6.05663 13.9246 6.58104C14.2209 7.42098 13.614 8.24232 12.6762 8.25052C11.5919 8.25982 10.5075 8.25271 9.4232 8.25271C9.17714 8.25271 8.93107 8.25216 8.68501 8.25271C8.2913 8.2538 8.25412 8.29154 8.25412 8.69838C8.25357 10.0195 8.25686 11.3412 8.25248 12.6624C8.25029 13.2836 7.92603 13.7544 7.39891 13.9305C6.56448 14.2088 5.75848 13.6062 5.74863 12.6821C5.73824 11.7251 5.74645 10.7687 5.7459 9.81173C5.7459 9.41965 5.74754 9.02812 5.74535 8.63604C5.74371 8.30849 5.69012 8.2538 5.36204 8.25326C4.02235 8.25162 2.68321 8.25545 1.34352 8.25107C0.719613 8.24943 0.249902 7.93008 0.0710952 7.40348C-0.212153 6.57065 0.388245 5.75916 1.31017 5.74658C2.14843 5.73564 2.98669 5.74384 3.82495 5.74384C4.30779 5.74384 4.79062 5.74384 5.274 5.74384C5.72184 5.7433 5.7459 5.71869 5.7459 5.25716C5.7459 3.95406 5.74317 2.65096 5.74699 1.34786C5.74863 0.720643 6.0625 0.253102 6.58799 0.0704598C7.40875 -0.213893 8.21803 0.370671 8.25248 1.27349C8.25303 1.29154 8.25303 1.31013 8.25303 1.32817C8.25357 1.99531 8.25357 2.66026 8.25357 3.32575Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2399_7301">
                      <rect width="14" height="14" />
                    </clipPath>
                  </defs>
                </svg>
              </span> */}
              <span className="text-base font-semibold">
                {datas.slug === "premium-car-spare"
                  ? "Get An Enquiry"
                  : "Add To Cart"}
              </span>
            </div>
          </button>
        </div>
      </div>
      {/* quick-access-btns */}
      {datas.slug === "premium-car-spare" ? (
        <></>
      ) : (
        <div className="flex flex-col space-y-2 quick-access-btns">
          <button
            className="absolute transition-all ease-in-out  group-hover:right-4 -right-10 top-20"
            onClick={() => quickViewHandler(datas.slug)}
            type="button"
          >
            <span className="flex items-center justify-center w-10 h-10 text-black transition-all duration-300 ease-in-out rounded hover:text-white hover:bg-qgreen bg-qgreenlow">
              <QuickViewIco className="fill-current" />
            </span>
          </button>
          {!arWishlist ? (
            <button
              className=" absolute group-hover:right-4 -right-10 top-[120px]  transition-all duration-300 ease-in-out"
              type="button"
              onClick={() => addToWishlist(datas.id)}
            >
              <span className="flex items-center justify-center w-10 h-10 text-black transition-all duration-300 ease-in-out rounded hover:text-white hover:bg-qgreen bg-qgreenlow">
                <ThinLove className="fill-current" />
              </span>
            </button>
          ) : (
            <button
              className=" absolute group-hover:right-4 -right-10 top-[120px]  transition-all duration-300 ease-in-out"
              type="button"
              onClick={() => removeToWishlist(wishlisted && wishlisted.id)}
            >
              <span className="flex items-center justify-center w-10 h-10 rounded bg-qgreenlow">
                <ThinLove fill={true} />
              </span>
            </button>
          )}

          <button
            className=" absolute group-hover:right-4 -right-10 top-[168px]  transition-all duration-500 ease-in-out"
            type="button"
            onClick={() => productCompare(datas.id)}
          >
            <span className="flex items-center justify-center w-10 h-10 text-black transition-all duration-300 ease-in-out rounded hover:text-white hover:bg-qgreen bg-qgreenlow">
              <Compair />
            </span>
          </button>
        </div>
      )}
      {quickViewModal && quickViewData && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full quicke-view-wrapper ">
          <div
            onClick={() => setQuickView(!quickViewModal)}
            className="fixed left-0 right-0 w-full h-full bg-black bg-opacity-25"
          ></div>
          <div
            data-aos="fade-up"
            className="md:mx-10 xl:mt-[100px] rounded w-full bg-white relative lg:py-[40px] pt-[80px] pb-[40px] sm:px-[38px] px-3 relative md:mt-12 h-full overflow-y-scroll xl:overflow-hidden  xl:mt-0"
            style={{ zIndex: "999" }}
          >
            <div className="w-full h-full overflow-y-scroll overflow-style-none">
              <ProductView
                images={
                  quickViewData.gellery.length > 0 ? quickViewData.gellery : []
                }
                product={quickViewData.product}
              />
            </div>

            <button
              onClick={() => setQuickView(!quickViewModal)}
              type="button"
              className="absolute right-3 top-3"
            >
              <span className="flex items-center justify-center w-12 h-12 text-red-500 border rounded border-qred">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
