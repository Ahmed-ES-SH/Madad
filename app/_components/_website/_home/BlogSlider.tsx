"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Img from "../../_global/Img";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import { directionMap } from "@/app/constants/constants";

export default function BlogSlider() {
  const { local } = useVariables();
  const { blogSection } = getTranslations(local);
  const slides = [
    {
      image: "/portfoliosection/2.jpg",
      date: "Jan 09, 2021",
      title:
        "Facebook is creating a news section in Watch to feature breaking news",
      desc: "Facebook launched the Watch platform in August",
    },
    {
      image: "/portfoliosection/3.jpg",
      date: "May 30, 2021",
      title: "What CFR (Conversations, Feedback, Recognition) really is about",
      desc: "For a lot of people these days, Measure What Matters.",
    },
    {
      image: "/portfoliosection/4.jpg",
      date: "Jul 12, 2021",
      title: "Twitter is testing new monetization features for creators",
      desc: "New tipping and super follow options are coming soon.",
    },
    {
      image: "/portfoliosection/5.jpg",
      date: "Aug 25, 2021",
      title: "LinkedIn adds new tools for job seekers and recruiters",
      desc: "Better communication and more transparency in hiring.",
    },
  ];

  return (
    <div
      dir={directionMap[local]}
      className="c-container max-lg:flex-col gap-5 flex items-start justify-between border-t border-gray-300 py-10 lg:py-14"
    >
      <div className="w-full flex justify-between flex-col  lg:w-2/5">
        <div
          className={`block ${
            local == "en" ? "lg:text-left" : "lg:text-right"
          } text-center`}
        >
          <h2 className="text-4xl font-bold text-gray-900  leading-[3.25rem] mb-5">
            {blogSection.title}{" "}
            <span className=" text-primary-red underline">
              {blogSection.blogs}
            </span>
          </h2>
          <p className="text-gray-500 mb-10 max-lg:max-w-xl max-lg:mx-auto">
            {blogSection.paragraphLine}
          </p>
          <Link
            href="/blog"
            className="primary-btn max-lg:mx-auto bg-primary-red hover:bg-white hover:border-primary-red"
          >
            {blogSection.button}
          </Link>
        </div>
        <div className="flex relative w-1/2  mx-auto h-[20vh] max-md:h-[8vh] items-center lg:justify-center justify-center lg:mt-0 mt-16 gap-4 mb-4">
          <button
            id="slider-button-left"
            className="swiper-button-prev group text-primary-red flex justify-center items-center   w-11 h-11 transition-all duration-500 rounded-full "
          ></button>
          <button
            id="slider-button-right"
            className="swiper-button-next group flex justify-center items-center   w-11 h-11 transition-all duration-500 rounded-full "
          ></button>
        </div>
      </div>

      <div style={{ direction: "ltr" }} className="lg:w-3/5 max-lg:w-full">
        <Swiper
          autoplay={{
            delay: 1500,
          }}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: "#slider-button-left",
            nextEl: "#slider-button-right",
          }}
          modules={[Navigation, Autoplay]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link
                className="group relative block rounded-xl focus:outline-none"
                href="#"
              >
                <div className="relative rounded-xl overflow-hidden w-full h-[450px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
                  <Img
                    className="size-full absolute top-0 start-0 object-cover"
                    src={slide.image}
                  />
                </div>

                <div className="absolute top-0 inset-x-0 z-10">
                  <div className="p-4 flex items-center sm:p-6">
                    <div className="shrink-0 bg-white/50 rounded-full">
                      <Img
                        className="size-[46px] border-2 border-white rounded-full"
                        src="/logo.png"
                      />
                    </div>
                    <div className="ms-2.5 sm:ms-4">
                      <h4 className="font-semibold text-white">Admin</h4>
                      <p className="text-xs text-white/80">{slide.date}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 z-10">
                  <div className="flex flex-col p-4 sm:p-6">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
                      {slide.title}
                    </h3>
                    <p className="mt-2 text-white/80">{slide.desc}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
