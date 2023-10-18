import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BreadcrumbCom from "../../BreadcrumbCom";
import IcoAdress from "./icons/IcoAdress";
import IcoCart from "./icons/IcoCart";
import IcoDashboard from "./icons/IcoDashboard";
import IcoLogout from "./icons/IcoLogout";
import IcoLove from "./icons/IcoLove";
import IcoPassword from "./icons/IcoPassword";
// import IcoPayment from "./icons/IcoPayment";
import IcoPeople from "./icons/IcoPeople";
import IcoReviewHand from "./icons/IcoReviewHand";
import AddressesTab from "./tabs/AddressesTab";
import Dashboard from "./tabs/Dashboard";
import OrderTab from "./tabs/OrderTab";
import PasswordTab from "./tabs/PasswordTab";

// import Payment from "./tabs/Payment";
import { useDispatch } from "react-redux";
import isAuth from "../../../../Middleware/isAuth";
import apiRequest from "../../../../utils/apiRequest";
import auth from "../../../../utils/auth";
import languageModel from "../../../../utils/languageModel";
import { fetchWishlist } from "../../../store/wishlistData";
import Multivendor from "../../Shared/Multivendor";
import ProfileTab from "./tabs/ProfileTab";
import ReviewTab from "./tabs/ReviewTab";
import WishlistTab from "./tabs/WishlistTab";

function Profile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [switchDashboard, setSwitchDashboard] = useState(false);
  const location = useRouter();
  const getHashContent = location.asPath.split("#");
  const [active, setActive] = useState("dashboard");
  const [dashBoardData, setDashboardData] = useState(null);
  const [profileInfo, setProfile] = useState(null);
  const [selectedCountries, setSelectedCountries] = useState(null);
  const [selectedStates, setSelectedStates] = useState(null);
  const [selectedCities, setSelectedCities] = useState(null);
  const [orders, setOrders] = useState(null);
  const [review, setReview] = useState(null);
  const [langCntnt, setLangCntnt] = useState(null);
  useEffect(() => {
    setLangCntnt(languageModel());
  }, []);
  useEffect(() => {
    setActive(
      getHashContent && getHashContent.length > 1
        ? getHashContent[1]
        : "dashboard"
    );
  }, [getHashContent]);
  useEffect(() => {
    if (!dashBoardData) {
      if (auth()) {
        apiRequest
          .dashboard(auth().access_token)
          .then((res) => {
            setDashboardData(res.data && res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        return false;
      }
    }
  }, [dashBoardData]);
  useEffect(() => {
    if (!orders) {
      if (auth()) {
        apiRequest
          .orders(auth().access_token)
          .then((res) => {
            setOrders(res.data && res.data.orders.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [orders]);
  useEffect(() => {
    if (!review) {
      if (auth()) {
        apiRequest
          .getReview(auth().access_token)
          .then((res) => {
            setReview(res && res.data.reviews && res.data.reviews.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [review]);

  const updateProfile = () => {
    if (auth()) {
      apiRequest
        .profileInfo(auth().access_token)
        .then((res) => {
          setSelectedCountries(res.data && res.data.countries);
          setSelectedStates(res.data && res.data.states);
          setSelectedCities(res.data && res.data.cities);
          setProfile(res.data && res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return false;
    }
  };
  useEffect(() => {
    if (!profileInfo) {
      updateProfile();
    }
  }, [profileInfo]);
  const logout = () => {
    if (auth) {
      apiRequest.logout(auth.access_token);
      localStorage.removeItem("auth");
      dispatch(fetchWishlist());
      location.push("/login");
    }
  };
  const switchDashboardHandler = () => {
    setSwitchDashboard(!switchDashboard);
  };
  useEffect(() => {
    if (switchDashboard) {
      const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
      const dashboardUrl = baseURL + "seller/dashboard";
      router.push(dashboardUrl);
    }
  }, [switchDashboard, router]);
  const checkSellerAndVendor =
    Multivendor() === 1 && dashBoardData && dashBoardData.is_seller;
  return (
    <div className="w-full bg-white profile-page-wrapper">
      <div className="mx-auto container-x">
        <div className="w-full py-10">
          <BreadcrumbCom
            paths={[
              { name: "home", path: "/" },
              { name: langCntnt && langCntnt.profile, path: "/profile" },
            ]}
          />
          <div
            className="w-full p-5 bg-white rounded xl:p-10"
            style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 15px 64px" }}
          >
            <div className="flex items-center justify-between w-full title-area">
              <h1 className="text-[22px] font-bold text-qblack">
                {langCntnt && langCntnt.Your_Dashboard}
              </h1>
              {checkSellerAndVendor && (
                <div className="flex items-center space-x-3 switch-dashboard">
                  <p className="text-base text-qgray">
                    {langCntnt && langCntnt.Switch_Dashboard}
                  </p>
                  <button
                    onClick={switchDashboardHandler}
                    type="button"
                    className="w-[73px] h-[31px] border border-[#D9D9D9] rounded-full relative "
                  >
                    <div
                      className={`w-[23px] h-[23px] primary-bg rounded-full absolute top-[3px] transition-all duration-300 ease-in-out ${
                        switchDashboard ? "left-[44px]" : "left-[4px]"
                      }`}
                    ></div>
                  </button>
                </div>
              )}
            </div>
            <div className="w-full mt-8 profile-wrapper xl:flex xl:space-x-10">
              <div className="xl:w-[236px] w-full xl:min-h-[600px] xl:border-r border-[rgba(0, 0, 0, 0.1)] mb-10 xl:mb-0">
                <div className="flex flex-row flex-wrap gap-3 xl:flex-col xl:space-y-10 xl:gap-0">
                  <div className="item group">
                    <Link href="/profile#dashboard">
                      <div className="flex items-center space-x-3 cursor-pointer text-qgray hover:text-qgreen">
                        <span>
                          <IcoDashboard />
                        </span>
                        <span className="text-base font-normal capitalize ">
                          {langCntnt && langCntnt.dashboard}
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="item group">
                    <Link href="/profile#profile">
                      <div className="flex items-center space-x-3 cursor-pointer text-qgray hover:text-qgreen">
                        <span>
                          <IcoPeople />
                        </span>
                        <span className="text-base font-normal capitalize ">
                          {langCntnt && langCntnt.Personal_Info}
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/*<div className="item group">*/}
                  {/*  <Link href="/profile#payment">*/}
                  {/*    <div className="flex items-center space-x-3 cursor-pointer text-qgray hover:text-qgreen">*/}
                  {/*      <span>*/}
                  {/*        <IcoPayment />*/}
                  {/*      </span>*/}
                  {/*      <span className="text-base font-normal capitalize ">*/}
                  {/*        Payment Method*/}
                  {/*      </span>*/}
                  {/*    </div>*/}
                  {/*  </Link>*/}
                  {/*</div>*/}
                  <div className="item group">
                    <Link href="/profile#order">
                      <div className="flex items-center space-x-3 cursor-pointer text-qgray hover:text-qgreen">
                        <span>
                          <IcoCart />
                        </span>
                        <span className="text-base font-normal capitalize ">
                          {langCntnt && langCntnt.Order}
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="item group">
                    <Link href="/profile#wishlist">
                      <div className="flex items-center space-x-3 cursor-pointer text-qgray hover:text-qgreen">
                        <span>
                          <IcoLove />
                        </span>
                        <span className="text-base font-normal capitalize ">
                          {langCntnt && langCntnt.Wishlist}
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="item group">
                    <Link href="/profile#address">
                      <div className="flex items-center space-x-3 cursor-pointer text-qgray hover:text-qgreen">
                        <span>
                          <IcoAdress />
                        </span>
                        <span className="text-base font-normal capitalize ">
                          {langCntnt && langCntnt.Address}
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="item group">
                    <Link href="/profile#review">
                      <div className="flex items-center space-x-3 cursor-pointer text-qgray hover:text-qgreen">
                        <span>
                          <IcoReviewHand />
                        </span>
                        <span className="text-base font-normal capitalize ">
                          {langCntnt && langCntnt.Reviews}
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="item group">
                    <Link href="/profile#password">
                      <div className="flex items-center space-x-3 cursor-pointer text-qgray hover:text-qgreen">
                        <span>
                          <IcoPassword />
                        </span>
                        <span className="text-base font-normal capitalize ">
                          {langCntnt && langCntnt.Change_Password}
                        </span>
                      </div>
                    </Link>
                  </div>
                  {/*<div className="item group">*/}
                  {/*  <Link href="/profile#support">*/}
                  {/*    <div className="flex items-center space-x-3 cursor-pointer text-qgray hover:text-qgreen">*/}
                  {/*      <span>*/}
                  {/*        <IcoSupport />*/}
                  {/*      </span>*/}
                  {/*      <span className="text-base font-normal capitalize ">*/}
                  {/*        Support Ticket*/}
                  {/*      </span>*/}
                  {/*    </div>*/}
                  {/*  </Link>*/}
                  {/*</div>*/}
                  <div className="item group">
                    <div
                      onClick={logout}
                      className="flex items-center space-x-3 cursor-pointer text-qgray hover:text-qgreen"
                    >
                      <span>
                        <IcoLogout />
                      </span>
                      <span className="text-base font-normal capitalize ">
                        {langCntnt && langCntnt.Logout}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="w-full item-body dashboard-wrapper">
                  {active === "dashboard" ? (
                    <>
                      {dashBoardData && (
                        <Dashboard dashBoardData={dashBoardData} />
                      )}
                    </>
                  ) : active === "profile" ? (
                    <>
                      {profileInfo && (
                        <ProfileTab
                          selectedCountries={selectedCountries}
                          selectedStates={selectedStates}
                          selectedCities={selectedCities}
                          profileInfo={profileInfo}
                          updatedProfile={updateProfile}
                        />
                      )}
                    </>
                  ) : active === "order" ? (
                    <OrderTab orders={orders} />
                  ) : active === "wishlist" ? (
                    <WishlistTab />
                  ) : active === "address" ? (
                    <AddressesTab />
                  ) : active === "password" ? (
                    <PasswordTab />
                  ) : active === "review" ? (
                    <ReviewTab reviews={review} />
                  ) : (
                    ""
                  )}
                  {/*: active === "support" ? (*/}
                  {/*<SupportTab />*/}
                  {/*)*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default isAuth(Profile);
