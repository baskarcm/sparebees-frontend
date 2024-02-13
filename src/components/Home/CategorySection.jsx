import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

function CategorySection({
  sectionTitle,
  categories,
  productCategories,
  adsOne,
  adsTwo,
  adsThree,
}) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  console.log(productCategories);
  return (
    <div className="w-full bg-white category-section-wrapper">
      <div className="container-x mx-auto py-[60px]">
        <div className="mb-[60px]">
          <div className="flex items-center justify-between mb-5 section-title">
            <div>
              <h1 className="text-xl sm:text-3xl font-600 text-qblacktext">
                {sectionTitle}
              </h1>
            </div>
            <div className="view-more-btn">
              <Link href={"/products"} passHref>
                <a rel="noopener noreferrer">
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <p className="text-base font-600 text-qblack">View All</p>
                    <span className="animate-right-dir">
                      <svg
                        width="17"
                        height="14"
                        viewBox="0 0 17 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0225 6.00243C13.9998 6.03738 13.9772 6.06941 13.9545 6.10436C13.8724 6.10727 13.7904 6.11601 13.7083 6.11601C9.93521 6.11601 6.16215 6.11601 2.38909 6.11601C1.87111 6.11601 1.35313 6.10728 0.835147 6.12475C0.351131 6.14514 0.00863998 6.51501 0.000148475 6.981C-0.00834303 7.45864 0.3483 7.83725 0.837977 7.8722C0.956858 7.88094 1.07857 7.87511 1.20028 7.87511C5.33565 7.87803 9.46818 7.87803 13.6035 7.88094C13.7253 7.88094 13.8498 7.88094 13.9715 7.88094C14.0026 7.93627 14.031 7.9887 14.0621 8.04403C13.9404 8.12267 13.7988 8.18383 13.697 8.28576C12.3355 9.67499 10.9797 11.0671 9.62669 12.4651C9.26155 12.8437 9.25306 13.3767 9.58423 13.732C9.91823 14.0902 10.4419 14.099 10.8127 13.7233C12.7855 11.702 14.7556 9.6779 16.7199 7.64794C17.0907 7.26351 17.0851 6.73053 16.7171 6.34901C14.7697 4.33652 12.8167 2.32987 10.858 0.329035C10.7278 0.195063 10.5466 0.0873038 10.3683 0.0319679C10.0088 -0.0757916 9.63235 0.116428 9.44554 0.451356C9.26438 0.78046 9.31533 1.20859 9.60687 1.51148C10.6768 2.62111 11.7524 3.72492 12.8308 4.82581C13.2271 5.2219 13.6262 5.60925 14.0225 6.00243Z"
                          fill="white"
                        />
                        <path
                          d="M14.0225 6.00241C13.6262 5.60923 13.2243 5.22188 12.8336 4.82288C11.7552 3.72199 10.6796 2.61818 9.60971 1.50855C9.31816 1.20566 9.26721 0.77753 9.44837 0.448427C9.63518 0.113498 10.0116 -0.0787213 10.3711 0.0290382C10.5466 0.0814617 10.7278 0.192134 10.8608 0.326105C12.8195 2.32694 14.7697 4.33359 16.7199 6.34608C17.0879 6.72469 17.0936 7.26058 16.7228 7.64501C14.7584 9.67497 12.7884 11.6991 10.8155 13.7203C10.4475 14.0989 9.92106 14.0873 9.58706 13.7291C9.25589 13.3737 9.26155 12.8408 9.62952 12.4622C10.9825 11.0642 12.3383 9.67206 13.6998 8.28284C13.8017 8.1809 13.9404 8.11974 14.0649 8.0411C14.0338 7.98577 14.0055 7.93334 13.9743 7.87801C13.8526 7.87801 13.7281 7.87801 13.6064 7.87801C9.47101 7.8751 5.33848 7.8751 1.20311 7.87218C1.0814 7.87218 0.962519 7.87801 0.840808 7.86927C0.3483 7.84015 -0.00834304 7.45862 0.00014847 6.98098C0.00863998 6.515 0.351131 6.14512 0.832316 6.12764C1.3503 6.10726 1.86828 6.11891 2.38626 6.11891C6.16215 6.11599 9.93521 6.11599 13.7083 6.11599C13.7904 6.11599 13.8724 6.10726 13.9574 6.10143C13.9772 6.0694 13.9998 6.03445 14.0225 6.00241Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* <div className="w-full grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-[30px] "> */}
          <Slider {...settings}>
            {categories.length > 0 &&
              categories
                // .slice(0, categories.length > 6 ? 6 : categories.length)
                .map((item, i) => (
                  <div
                    data-aos="fade-left"
                    data-aos-delay={i + "00"}
                    key={i}
                    className="w-full cursor-pointer item group"
                  >
                    <Link
                      href={{
                        pathname: "/products",
                        query: { category: item.slug },
                      }}
                      passhref
                    >
                      <a rel="noopener noreferrer">
                        <div className="w-full h-[192px] relative rounded bg-qgreenlow flex justify-center items-center">
                          <div className="relative w-full h-full transition duration-300 ease-in-out transform scale-100 group-hover:scale-110">
                            <Image
                              layout="fill"
                              objectFit="scale-down"
                              src={
                                process.env.NEXT_PUBLIC_BASE_URL + item.image
                              }
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="mt-5 text-lg text-center transition duration-300 ease-in-out text-qgray group-hover:text-qgreen">
                          {item.name}
                        </p>
                      </a>
                    </Link>
                  </div>
                ))}
          </Slider>
          {/* </div> */}
        </div>
        {/* two wheelers section */}
        <div className="my-[60px]">
          <div className="flex items-center justify-between mb-5 section-title">
            <div>
              <h1 className="text-xl sm:text-3xl font-600 text-qblacktext">
                Two Wheelers
              </h1>
            </div>
            <div className="view-more-btn">
              <Link href={"/products"} passHref>
                <a rel="noopener noreferrer">
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <p className="text-base font-600 text-qblack">View All</p>
                    <span className="animate-right-dir">
                      <svg
                        width="17"
                        height="14"
                        viewBox="0 0 17 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0225 6.00243C13.9998 6.03738 13.9772 6.06941 13.9545 6.10436C13.8724 6.10727 13.7904 6.11601 13.7083 6.11601C9.93521 6.11601 6.16215 6.11601 2.38909 6.11601C1.87111 6.11601 1.35313 6.10728 0.835147 6.12475C0.351131 6.14514 0.00863998 6.51501 0.000148475 6.981C-0.00834303 7.45864 0.3483 7.83725 0.837977 7.8722C0.956858 7.88094 1.07857 7.87511 1.20028 7.87511C5.33565 7.87803 9.46818 7.87803 13.6035 7.88094C13.7253 7.88094 13.8498 7.88094 13.9715 7.88094C14.0026 7.93627 14.031 7.9887 14.0621 8.04403C13.9404 8.12267 13.7988 8.18383 13.697 8.28576C12.3355 9.67499 10.9797 11.0671 9.62669 12.4651C9.26155 12.8437 9.25306 13.3767 9.58423 13.732C9.91823 14.0902 10.4419 14.099 10.8127 13.7233C12.7855 11.702 14.7556 9.6779 16.7199 7.64794C17.0907 7.26351 17.0851 6.73053 16.7171 6.34901C14.7697 4.33652 12.8167 2.32987 10.858 0.329035C10.7278 0.195063 10.5466 0.0873038 10.3683 0.0319679C10.0088 -0.0757916 9.63235 0.116428 9.44554 0.451356C9.26438 0.78046 9.31533 1.20859 9.60687 1.51148C10.6768 2.62111 11.7524 3.72492 12.8308 4.82581C13.2271 5.2219 13.6262 5.60925 14.0225 6.00243Z"
                          fill="white"
                        />
                        <path
                          d="M14.0225 6.00241C13.6262 5.60923 13.2243 5.22188 12.8336 4.82288C11.7552 3.72199 10.6796 2.61818 9.60971 1.50855C9.31816 1.20566 9.26721 0.77753 9.44837 0.448427C9.63518 0.113498 10.0116 -0.0787213 10.3711 0.0290382C10.5466 0.0814617 10.7278 0.192134 10.8608 0.326105C12.8195 2.32694 14.7697 4.33359 16.7199 6.34608C17.0879 6.72469 17.0936 7.26058 16.7228 7.64501C14.7584 9.67497 12.7884 11.6991 10.8155 13.7203C10.4475 14.0989 9.92106 14.0873 9.58706 13.7291C9.25589 13.3737 9.26155 12.8408 9.62952 12.4622C10.9825 11.0642 12.3383 9.67206 13.6998 8.28284C13.8017 8.1809 13.9404 8.11974 14.0649 8.0411C14.0338 7.98577 14.0055 7.93334 13.9743 7.87801C13.8526 7.87801 13.7281 7.87801 13.6064 7.87801C9.47101 7.8751 5.33848 7.8751 1.20311 7.87218C1.0814 7.87218 0.962519 7.87801 0.840808 7.86927C0.3483 7.84015 -0.00834304 7.45862 0.00014847 6.98098C0.00863998 6.515 0.351131 6.14512 0.832316 6.12764C1.3503 6.10726 1.86828 6.11891 2.38626 6.11891C6.16215 6.11599 9.93521 6.11599 13.7083 6.11599C13.7904 6.11599 13.8724 6.10726 13.9574 6.10143C13.9772 6.0694 13.9998 6.03445 14.0225 6.00241Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* <div className="w-full grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-[30px]"> */}
          <Slider {...settings}>
            {productCategories[0].active_sub_categories.length > 0 &&
              productCategories[0].active_sub_categories
                // .slice(0, categories.length > 6 ? 6 : categories.length)
                .map((item, i) => (
                  <div
                    data-aos="fade-left"
                    data-aos-delay={i + "00"}
                    key={i}
                    className="w-full cursor-pointer item group"
                  >
                    <Link
                      href={{
                        pathname: "/products",
                        query: { category: item.slug },
                      }}
                      passhref
                    >
                      <a rel="noopener noreferrer">
                        <div className="w-full h-[192px] relative rounded bg-qgreenlow flex justify-center items-center">
                          <div className="relative w-full h-full transition duration-300 ease-in-out transform scale-100 group-hover:scale-110">
                            <Image
                              layout="fill"
                              objectFit="scale-down"
                              src={
                                process.env.NEXT_PUBLIC_BASE_URL + item.image
                              }
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="mt-5 text-lg text-center transition duration-300 ease-in-out text-qgray group-hover:text-qgreen">
                          {item.name}
                        </p>
                      </a>
                    </Link>
                  </div>
                ))}
          </Slider>
          {/* </div> */}
        </div>
        {/* three wheelers section */}
        <div className="my-[60px]">
          <div className="flex items-center justify-between mb-5 section-title">
            <div>
              <h1 className="text-xl sm:text-3xl font-600 text-qblacktext">
                Three Wheelers
              </h1>
            </div>
            <div className="view-more-btn">
              <Link href={"/products"} passHref>
                <a rel="noopener noreferrer">
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <p className="text-base font-600 text-qblack">View All</p>
                    <span className="animate-right-dir">
                      <svg
                        width="17"
                        height="14"
                        viewBox="0 0 17 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0225 6.00243C13.9998 6.03738 13.9772 6.06941 13.9545 6.10436C13.8724 6.10727 13.7904 6.11601 13.7083 6.11601C9.93521 6.11601 6.16215 6.11601 2.38909 6.11601C1.87111 6.11601 1.35313 6.10728 0.835147 6.12475C0.351131 6.14514 0.00863998 6.51501 0.000148475 6.981C-0.00834303 7.45864 0.3483 7.83725 0.837977 7.8722C0.956858 7.88094 1.07857 7.87511 1.20028 7.87511C5.33565 7.87803 9.46818 7.87803 13.6035 7.88094C13.7253 7.88094 13.8498 7.88094 13.9715 7.88094C14.0026 7.93627 14.031 7.9887 14.0621 8.04403C13.9404 8.12267 13.7988 8.18383 13.697 8.28576C12.3355 9.67499 10.9797 11.0671 9.62669 12.4651C9.26155 12.8437 9.25306 13.3767 9.58423 13.732C9.91823 14.0902 10.4419 14.099 10.8127 13.7233C12.7855 11.702 14.7556 9.6779 16.7199 7.64794C17.0907 7.26351 17.0851 6.73053 16.7171 6.34901C14.7697 4.33652 12.8167 2.32987 10.858 0.329035C10.7278 0.195063 10.5466 0.0873038 10.3683 0.0319679C10.0088 -0.0757916 9.63235 0.116428 9.44554 0.451356C9.26438 0.78046 9.31533 1.20859 9.60687 1.51148C10.6768 2.62111 11.7524 3.72492 12.8308 4.82581C13.2271 5.2219 13.6262 5.60925 14.0225 6.00243Z"
                          fill="white"
                        />
                        <path
                          d="M14.0225 6.00241C13.6262 5.60923 13.2243 5.22188 12.8336 4.82288C11.7552 3.72199 10.6796 2.61818 9.60971 1.50855C9.31816 1.20566 9.26721 0.77753 9.44837 0.448427C9.63518 0.113498 10.0116 -0.0787213 10.3711 0.0290382C10.5466 0.0814617 10.7278 0.192134 10.8608 0.326105C12.8195 2.32694 14.7697 4.33359 16.7199 6.34608C17.0879 6.72469 17.0936 7.26058 16.7228 7.64501C14.7584 9.67497 12.7884 11.6991 10.8155 13.7203C10.4475 14.0989 9.92106 14.0873 9.58706 13.7291C9.25589 13.3737 9.26155 12.8408 9.62952 12.4622C10.9825 11.0642 12.3383 9.67206 13.6998 8.28284C13.8017 8.1809 13.9404 8.11974 14.0649 8.0411C14.0338 7.98577 14.0055 7.93334 13.9743 7.87801C13.8526 7.87801 13.7281 7.87801 13.6064 7.87801C9.47101 7.8751 5.33848 7.8751 1.20311 7.87218C1.0814 7.87218 0.962519 7.87801 0.840808 7.86927C0.3483 7.84015 -0.00834304 7.45862 0.00014847 6.98098C0.00863998 6.515 0.351131 6.14512 0.832316 6.12764C1.3503 6.10726 1.86828 6.11891 2.38626 6.11891C6.16215 6.11599 9.93521 6.11599 13.7083 6.11599C13.7904 6.11599 13.8724 6.10726 13.9574 6.10143C13.9772 6.0694 13.9998 6.03445 14.0225 6.00241Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* <div className="w-full grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-[30px]"> */}
          {/* <Slider {...settings}>
            {productCategories[1].active_sub_categories.length > 0 &&
              productCategories[1].active_sub_categories
                // .slice(0, categories.length > 6 ? 6 : categories.length)
                .map((item, i) => (
                  <div
                    data-aos="fade-left"
                    data-aos-delay={i + "00"}
                    key={i}
                    className="w-full cursor-pointer item group"
                  >
                    <Link
                      href={{
                        pathname: "/products",
                        query: { category: item.slug },
                      }}
                      passhref
                    >
                      <a rel="noopener noreferrer">
                        <div className="w-full h-[192px] relative rounded bg-qgreenlow flex justify-center items-center">
                          <div className="relative w-full h-full transition duration-300 ease-in-out transform scale-100 group-hover:scale-110">
                            <Image
                              layout="fill"
                              objectFit="scale-down"
                              src={
                                process.env.NEXT_PUBLIC_BASE_URL + item.image
                              }
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="mt-5 text-lg text-center transition duration-300 ease-in-out text-qgray group-hover:text-qgreen">
                          {item.name}
                        </p>
                      </a>
                    </Link>
                  </div>
                ))}
          </Slider> */}
          {/* </div> */}
        </div>
        {/* four wheelers section */}
        <div className="my-[60px]">
          <div className="flex items-center justify-between mb-5 section-title">
            <div>
              <h1 className="text-xl sm:text-3xl font-600 text-qblacktext">
                Four Wheelers
              </h1>
            </div>
            <div className="view-more-btn">
              <Link href={"/products"} passHref>
                <a rel="noopener noreferrer">
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <p className="text-base font-600 text-qblack">View All</p>
                    <span className="animate-right-dir">
                      <svg
                        width="17"
                        height="14"
                        viewBox="0 0 17 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0225 6.00243C13.9998 6.03738 13.9772 6.06941 13.9545 6.10436C13.8724 6.10727 13.7904 6.11601 13.7083 6.11601C9.93521 6.11601 6.16215 6.11601 2.38909 6.11601C1.87111 6.11601 1.35313 6.10728 0.835147 6.12475C0.351131 6.14514 0.00863998 6.51501 0.000148475 6.981C-0.00834303 7.45864 0.3483 7.83725 0.837977 7.8722C0.956858 7.88094 1.07857 7.87511 1.20028 7.87511C5.33565 7.87803 9.46818 7.87803 13.6035 7.88094C13.7253 7.88094 13.8498 7.88094 13.9715 7.88094C14.0026 7.93627 14.031 7.9887 14.0621 8.04403C13.9404 8.12267 13.7988 8.18383 13.697 8.28576C12.3355 9.67499 10.9797 11.0671 9.62669 12.4651C9.26155 12.8437 9.25306 13.3767 9.58423 13.732C9.91823 14.0902 10.4419 14.099 10.8127 13.7233C12.7855 11.702 14.7556 9.6779 16.7199 7.64794C17.0907 7.26351 17.0851 6.73053 16.7171 6.34901C14.7697 4.33652 12.8167 2.32987 10.858 0.329035C10.7278 0.195063 10.5466 0.0873038 10.3683 0.0319679C10.0088 -0.0757916 9.63235 0.116428 9.44554 0.451356C9.26438 0.78046 9.31533 1.20859 9.60687 1.51148C10.6768 2.62111 11.7524 3.72492 12.8308 4.82581C13.2271 5.2219 13.6262 5.60925 14.0225 6.00243Z"
                          fill="white"
                        />
                        <path
                          d="M14.0225 6.00241C13.6262 5.60923 13.2243 5.22188 12.8336 4.82288C11.7552 3.72199 10.6796 2.61818 9.60971 1.50855C9.31816 1.20566 9.26721 0.77753 9.44837 0.448427C9.63518 0.113498 10.0116 -0.0787213 10.3711 0.0290382C10.5466 0.0814617 10.7278 0.192134 10.8608 0.326105C12.8195 2.32694 14.7697 4.33359 16.7199 6.34608C17.0879 6.72469 17.0936 7.26058 16.7228 7.64501C14.7584 9.67497 12.7884 11.6991 10.8155 13.7203C10.4475 14.0989 9.92106 14.0873 9.58706 13.7291C9.25589 13.3737 9.26155 12.8408 9.62952 12.4622C10.9825 11.0642 12.3383 9.67206 13.6998 8.28284C13.8017 8.1809 13.9404 8.11974 14.0649 8.0411C14.0338 7.98577 14.0055 7.93334 13.9743 7.87801C13.8526 7.87801 13.7281 7.87801 13.6064 7.87801C9.47101 7.8751 5.33848 7.8751 1.20311 7.87218C1.0814 7.87218 0.962519 7.87801 0.840808 7.86927C0.3483 7.84015 -0.00834304 7.45862 0.00014847 6.98098C0.00863998 6.515 0.351131 6.14512 0.832316 6.12764C1.3503 6.10726 1.86828 6.11891 2.38626 6.11891C6.16215 6.11599 9.93521 6.11599 13.7083 6.11599C13.7904 6.11599 13.8724 6.10726 13.9574 6.10143C13.9772 6.0694 13.9998 6.03445 14.0225 6.00241Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* <div className="w-full grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-[30px]"> */}
          {/* <Slider {...settings}>
            {productCategories[2].active_sub_categories.length > 0 &&
              productCategories[2].active_sub_categories
                // .slice(0, categories.length > 6 ? 6 : categories.length)
                .map((item, i) => (
                  <div
                    data-aos="fade-left"
                    data-aos-delay={i + "00"}
                    key={i}
                    className="w-full cursor-pointer item group"
                  >
                    <Link
                      href={{
                        pathname: "/products",
                        query: { category: item.slug },
                      }}
                      passhref
                    >
                      <a rel="noopener noreferrer">
                        <div className="w-full h-[192px] relative rounded bg-qgreenlow flex justify-center items-center">
                          <div className="relative w-full h-full transition duration-300 ease-in-out transform scale-100 group-hover:scale-110">
                            <Image
                              layout="fill"
                              objectFit="scale-down"
                              src={
                                process.env.NEXT_PUBLIC_BASE_URL + item.image
                              }
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="mt-5 text-lg text-center transition duration-300 ease-in-out text-qgray group-hover:text-qgreen">
                          {item.name}
                        </p>
                      </a>
                    </Link>
                  </div>
                ))}
          </Slider> */}
          {/* </div> */}
        </div>
        {/* <div className="grid lg:grid-cols-3 grid-cols-1 gap-[30px]">
          <div data-aos="fade-right" className="w-full rounded item">
            <div
              className="w-full flex flex-col justify-between  h-[453px] rounded"
              style={{
                backgroundImage: `url(/assets/images/ads-bg-1.png)`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <div className="px-[30px] pt-[30px]">
                <span className="inline-block mb-2 text-sm font-medium uppercase text-qblack">
                  {adsOne.title_one}
                </span>
                <h1 className="text-[34px] leading-[38px] font-semibold text-qblack mb-[20px] w-[277px]">
                  {adsOne.title_two}
                </h1>
                <Link
                  href={{
                    pathname: "/products",
                    query: { category: adsOne.product_slug },
                  }}
                  passHref
                >
                  <a rel="noopener noreferrer">
                    <ShopNowBtn
                      className="w-[128px] h-[40px] bg-qgreen"
                      textColor="text-white group-hover:text-white"
                    />
                  </a>
                </Link>
              </div>
              <div className="w-full h-[230px] relative">
                <Image
                  layout="fill"
                  objectFit="scale-down"
                  src={`${process.env.NEXT_PUBLIC_BASE_URL + adsOne.image}`}
                  alt="cat"
                />
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="w-full item">
            <div
              className="w-full flex flex-col-reverse justify-between  h-[453px] rounded"
              style={{
                backgroundImage: `url(/assets/images/ads-bg-2.png)`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <div className="px-[30px] pb-[30px]">
                <span className="inline-block mb-2 text-sm font-medium uppercase text-qblack">
                  {adsTwo.title_one}
                </span>
                <h1 className="text-[34px] leading-[38px] font-semibold text-qblack mb-[20px] w-[277px]">
                  {adsTwo.title_two}
                </h1>
                <Link
                  href={{
                    pathname: "/products",
                    query: { category: adsTwo.product_slug },
                  }}
                  passhref
                >
                  <a rel="noopener noreferrer">
                    <ShopNowBtn
                      className="w-[128px] h-[40px] bg-[#FE0600]"
                      textColor="text-white group-hover:text-white"
                    />
                  </a>
                </Link>
              </div>
              <div className="w-full h-[230px] relative">
                <Image
                  layout="fill"
                  objectFit="scale-down"
                  src={`${process.env.NEXT_PUBLIC_BASE_URL + adsTwo.image}`}
                  alt="cat"
                />
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="w-full item">
            <div
              className="w-full flex flex-col justify-between  h-[453px] rounded"
              style={{
                backgroundImage: `url(/assets/images/ads-bg-3.png)`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <div className="px-[30px] pt-[30px]">
                <span className="inline-block mb-2 text-sm font-medium uppercase text-qblack">
                  {adsThree.title_one}
                </span>
                <h1 className="text-[34px] leading-[38px] font-semibold text-qblack mb-[20px] w-[277px]">
                  {adsThree.title_two}
                </h1>
                <Link
                  href={{
                    pathname: "/products",
                    query: { category: adsThree.product_slug },
                  }}
                  passhref
                >
                  <a rel="noopener noreferrer">
                    <ShopNowBtn
                      className="w-[128px] h-[40px] bg-[#921DFF]"
                      textColor="text-white group-hover:text-white"
                    />
                  </a>
                </Link>
              </div>
              <div className="w-full h-[230px] relative">
                <Image
                  layout="fill"
                  objectFit="scale-down"
                  src={`${process.env.NEXT_PUBLIC_BASE_URL + adsThree.image}`}
                  alt="cat"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default CategorySection;
