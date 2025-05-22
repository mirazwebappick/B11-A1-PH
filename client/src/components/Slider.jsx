import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
// import slide1 from "../assets/slider_1.webp";
// const slide1 = "url('../assets//slider_1.webp')";
import slider1 from "../assets/slider_1.webp";
import slider2 from "../assets/slider_2.webp";
import slider3 from "../assets/slider_3.webp";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div className="py-16 rounded-2xl overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-[500px] text-white rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center "
              style={{ backgroundImage: `url(${slider1})` }}
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-full">
              <h2 className="text-4xl font-bold drop-shadow-lg mb-4">
                Family Gardening Day
              </h2>
              <p className="max-w-xl text-base md:text-lg drop-shadow">
                Join us for a fun-filled day of planting, learning, and bonding
                with your loved ones. Perfect for all ages — tools and plants
                will be provided!
              </p>
              <button className="btn btn-primary mt-6">Learn More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[500px]  text-white rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slider2})` }}
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-full">
              <h2 className="text-4xl font-bold drop-shadow-lg mb-4">
                Children's Gardening Week
              </h2>
              <p className="max-w-xl text-base md:text-lg drop-shadow">
                Let your kids dig, plant, and grow! A hands-on event that
                teaches children the joy of gardening while having fun outdoors
                with friends.
              </p>
              <button className="btn btn-secondary mt-6">
                Register Your Child
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="relative w-full h-[500px] text-white rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slider3})` }}
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-full">
              <h2 className="text-4xl font-bold drop-shadow-lg mb-4">
                Growing Together: Generations in the Garden
              </h2>
              <p className="max-w-xl text-base md:text-lg drop-shadow">
                Experience the joy of gardening as a shared activity for
                grandparents, parents, and children. Learn, laugh, and plant
                side by side while connecting across generations.
              </p>
              <button className="btn btn-accent mt-6">
                Join the Experience
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
