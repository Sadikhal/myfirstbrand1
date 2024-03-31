"use client";
import "../ui/styles.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dynamic from "next/dynamic";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Testimonial } from "../constants/Testimonial";
import { Quote } from "lucide-react";

const TestimonialSlider = ({ number }) => {
  return (
    <div className="px-3 py-10 gap-12 flex flex-col h-full">
      <div className="font-normal sm:text-[70px] uppercase leading-[.9em] font-teko text-[50px]">
        OUR HAPPY clients <span className="text-[#FC8D00]">.</span>
      </div>
      <Swiper
        swiper-pagination-bullet-active={{
          color: "black",
        }}
        className="w-full h-full  text-foreground"
        slidesPerView={number}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {Testimonial.map((item) => (
          <SwiperSlide className="text-justify  text-foreground">
            <Card className="md:p-4 p-1 sm:p-2 bg-[#011222] group hover:bg-[#FC8D00] drop-shadow-2xl">
              <CardHeader>
                <CardDescription className=" flex justify-between items-center px-0">
                  <div className="gap-6 flex items-center">
                    <img
                      src="/person11.png"
                      className=" w-16 h-16 rounded-full object-contain"
                      alt=""
                    />
                    <div className="flex gap-1 flex-col ">
                      <div className="font-teko font-normal uppercase tracking-[.05em] text-[24px] leading-[1.2em] text-left text-foreground group-hover:text-black">
                        {item.brand}
                      </div>
                      <div className="text-left font-teko font-[300] uppercase tracking-[.05em] text-[16px] leading-[1.2em] text-[#FC8D00] group-hover:text-black">
                        {item.name}
                      </div>
                    </div>
                  </div>
                  <div className="group-hover:hidden">
                    <Quote color="orange" />
                  </div>
                  <div className="group-hover:block hidden">
                    <Quote color="black" />
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8">
                <p className="font-rubik text-[16px] leading-[2.125em] text-flex group-hover:text-black">
                  "{item.desc}"
                </p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
