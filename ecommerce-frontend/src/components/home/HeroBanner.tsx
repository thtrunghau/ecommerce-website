import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import { bannerList } from "@/utils/index";
import { Link } from "react-router-dom";
const colors = ["bg-banner-color1", "bg-banner-color2", "bg-banner-color3"];

export const HeroBanner = () => {
  return (
    <div className="rounded-sm py-2">
      <Swiper
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
      >
        {bannerList.map((banner, i) => (
          <SwiperSlide key={banner.id}>
            <div
              className={`carousel-item h-96 rounded-md sm:h-[500px] ${colors[i]}`}
            >
              <div className="flex items-center justify-center">
                <div className="hidden justify-center lg:flex lg:w-1/2">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white">
                      {banner.title}
                    </h3>
                    <h1 className="mt-2 text-5xl font-bold text-white">
                      {banner.subtitle}
                    </h1>
                    <p className="mt-4 text-lg font-bold text-white">
                      {banner.description}
                    </p>
                    <Link
                      to="/products"
                      className="mt-4 inline-block rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
                    >
                      Shop
                    </Link>
                  </div>
                </div>
                <div className="flex w-full justify-center p-4 lg:w-1/2">
                  <img src={banner.image} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
