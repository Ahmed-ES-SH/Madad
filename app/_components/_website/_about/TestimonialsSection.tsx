"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

// Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { directionMap } from "@/app/constants/constants";
import { getTranslations } from "@/app/helpers/helpers";
import { useVariables } from "@/app/context/VariablesContext";

type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`text-lg ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { local } = useVariables();
  const { testimonialsSection } = getTranslations(local);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "أحمد محمد",
      position: "مدير تقني",
      company: "شركة التقنية المتقدمة",
      content:
        "تجربة رائعة مع فريق مدد. لقد قاموا بتطوير موقعنا بمهنية عالية وفي الوقت المحدد. النتائج فاقت توقعاتنا.",
      rating: 5,
      avatar: "AM",
    },
    {
      id: 2,
      name: "فاطمة علي",
      position: "مديرة مشروع",
      company: "مؤسسة الابتكار",
      content:
        "خدمة عملاء ممتازة ودعم فني متواصل. التطبيق الذي طوروه لنا ساعد في زيادة كفاءة العمل بشكل كبير.",
      rating: 5,
      avatar: "FA",
    },
    {
      id: 3,
      name: "محمد حسن",
      position: "رئيس قسم التسويق",
      company: "شركة النهضة الرقمية",
      content:
        "فريق محترف ومتخصص. ساعدونا في تحويل أفكارنا إلى واقع رقمي متميز. أنصح بهم بشدة.",
      rating: 5,
      avatar: "MH",
    },
    {
      id: 4,
      name: "سارة أحمد",
      position: "مديرة عامة",
      company: "مجموعة الإبداع",
      content:
        "تعاون مثمر وحلول مبتكرة. لقد حققنا نموًا ملحوظًا في أعمالنا بفضل الحلول التقنية التي قدموها.",
      rating: 4,
      avatar: "SA",
    },
    {
      id: 5,
      name: "عمر خالد",
      position: "مؤسس الشركة",
      company: "ستارت أب تك",
      content:
        "شراكة ناجحة من البداية. فهموا احتياجاتنا بسرعة وقدموا حلولاً عملية وفعالة.",
      rating: 5,
      avatar: "OK",
    },
  ];

  return (
    <>
      <section
        dir={directionMap[local]}
        ref={ref}
        className="py-20 relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className={`absolute top-0 left-0 w-full h-full  bg-repeat`}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 ">
              {testimonialsSection.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-white mx-auto mb-6"></div>
            <p className="text-lg  max-w-2xl mx-auto">
              {testimonialsSection.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full mx-auto"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet !bg-white !opacity-50",
                bulletActiveClass:
                  "swiper-pagination-bullet-active !bg-yellow-400 !opacity-100",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              effect="coverflow"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-primary-blue backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-sky-500  transition-all duration-300 h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <FaQuoteLeft className="text-yellow-400 text-2xl mb-4" />

                        <StarRating rating={testimonial.rating} />

                        <p className=" leading-relaxed mb-6 text-center text-white">
                          {testimonial.content}
                        </p>

                        <FaQuoteRight className="text-yellow-400 text-2xl mb-6 ml-auto" />
                      </div>

                      <div className="text-center pt-6 border-t border-white/20">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-blue-500 rounded-full flex items-center justify-center  font-bold text-lg">
                          {testimonial.avatar}
                        </div>
                        <h4 className="font-bold text-lg text-white mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-blue-200 text-sm mb-1">
                          {testimonial.position}
                        </p>
                        <p className="text-yellow-400 text-sm font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
    </>
  );
}
