/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import person from "../../../asstes/images/person.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Slider = () => {
	return (
		<>
			<h1 className="text-center text-blue-500 text-3xl my-2">
				Insights from Our Users
			</h1>
			<p className="text-center font-seminbold my-4">
				Hear from global users on their Ed Nexus experience. From students to
				educators, the <br /> verdict is unanimous: Ed Nexus stands as an
				essential instrument for contemporary education.
			</p>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
						<div className="text-center border-4 border-blue-500 py-5 px-3 space-y-2 rounded-2xl">
							<div className="w-24 h-24 mx-auto rounded-full text-center">
								<img
									className="rounded-full border-4 border-blue-500 text-center"
									src={person.src}
									alt="user photo"
								/>
							</div>
							<h1 className="text-blue-500">christian Bale</h1>
							<p>5 star</p>
							<p>
								Best best best Best best best Best best best Best best best Best
								best best
							</p>
						</div>
						<div className="text-center border-4 border-blue-500 py-5 px-3 space-y-2 rounded-2xl">
							<div className="w-24 h-24 mx-auto rounded-full text-center">
								<img
									className="rounded-full border-4 border-blue-500 text-center"
									src={person.src}
									alt="user photo"
								/>
							</div>
							<h1 className="text-blue-500">christian Bale</h1>
							<p>5 star</p>
							<p>
								Best best best Best best best Best best best Best best best Best
								best best
							</p>
						</div>
						<div className="text-center border-4 border-blue-500 py-5 px-3 space-y-2 rounded-2xl">
							<div className="w-24 h-24 mx-auto rounded-full text-center">
								<img
									className="rounded-full border-4 border-blue-500 text-center"
									src={person.src}
									alt="user photo"
								/>
							</div>
							<h1 className="text-blue-500">christian Bale</h1>
							<p>5 star</p>
							<p>
								Best best best Best best best Best best best Best best best Best
								best best
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
						<div className="text-center border-4 border-blue-500 py-5 px-3 space-y-2 rounded-2xl">
							<div className="w-24 h-24 mx-auto rounded-full text-center">
								<img
									className="rounded-full border-4 border-blue-500 text-center"
									src={person.src}
									alt="user photo"
								/>
							</div>
							<h1 className="text-blue-500">christian Bale</h1>
							<p>5 star</p>
							<p>
								Best best best Best best best Best best best Best best best Best
								best best
							</p>
						</div>
						<div className="text-center border-4 border-blue-500 py-5 px-3 space-y-2 rounded-2xl">
							<div className="w-24 h-24 mx-auto rounded-full text-center">
								<img
									className="rounded-full border-4 border-blue-500 text-center"
									src={person.src}
									alt="user photo"
								/>
							</div>
							<h1 className="text-blue-500">christian Bale</h1>
							<p>5 star</p>
							<p>
								Best best best Best best best Best best best Best best best Best
								best best
							</p>
						</div>
						<div className="text-center border-4 border-blue-500 py-5 px-3 space-y-2 rounded-2xl">
							<div className="w-24 h-24 mx-auto rounded-full text-center">
								<img
									className="rounded-full border-4 border-blue-500 text-center"
									src={person.src}
									alt="user photo"
								/>
							</div>
							<h1 className="text-blue-500">christian Bale</h1>
							<p>5 star</p>
							<p>
								Best best best Best best best Best best best Best best best Best
								best best
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
						<div className="text-center border-4 border-blue-500 py-5 px-3 space-y-2 rounded-2xl">
							<div className="w-24 h-24 mx-auto rounded-full text-center">
								<img
									className="rounded-full border-4 border-blue-500 text-center"
									src={person.src}
									alt="user photo"
								/>
							</div>
							<h1 className="text-blue-500">christian Bale</h1>
							<p>5 star</p>
							<p>
								Best best best Best best best Best best best Best best best Best
								best best
							</p>
						</div>
						<div className="text-center border-4 border-blue-500 py-5 px-3 space-y-2 rounded-2xl">
							<div className="w-24 h-24 mx-auto rounded-full text-center">
								<img
									className="rounded-full border-4 border-blue-500 text-center"
									src={person.src}
									alt="user photo"
								/>
							</div>
							<h1 className="text-blue-500">christian Bale</h1>
							<p>5 star</p>
							<p>
								Best best best Best best best Best best best Best best best Best
								best best
							</p>
						</div>
						<div className="text-center border-4 border-blue-500 py-5 px-3 space-y-2 rounded-2xl">
							<div className="w-24 h-24 mx-auto rounded-full text-center">
								<img
									className="rounded-full border-4 border-blue-500 text-center"
									src={person.src}
									alt="user photo"
								/>
							</div>
							<h1 className="text-blue-500">christian Bale</h1>
							<p>5 star</p>
							<p>
								Best best best Best best best Best best best Best best best Best
								best best
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
						<div className="text-center border-4 border-blue-500 py-5 px-3 space-y-2 rounded-2xl">
							<div className="w-24 h-24 mx-auto rounded-full text-center">
								<img
									className="rounded-full border-4 border-blue-500 text-center"
									src={person.src}
									alt="user photo"
								/>
							</div>
							<h1 className="text-blue-500">christian Bale</h1>
							<p>5 star</p>
							<p>
								Best best best Best best best Best best best Best best best Best
								best best
							</p>
						</div>
						<div className="text-center border-4 border-blue-500 py-5 px-3 space-y-2 rounded-2xl">
							<div className="w-24 h-24 mx-auto rounded-full text-center">
								<img
									className="rounded-full border-4 border-blue-500 text-center"
									src={person.src}
									alt="user photo"
								/>
							</div>
							<h1 className="text-blue-500">christian Bale</h1>
							<p>5 star</p>
							<p>
								Best best best Best best best Best best best Best best best Best
								best best
							</p>
						</div>
						<div className="text-center border-4 border-blue-500 py-5 px-3 space-y-2 rounded-2xl">
							<div className="w-24 h-24 mx-auto rounded-full text-center">
								<img
									className="rounded-full border-4 border-blue-500 text-center"
									src={person.src}
									alt="user photo"
								/>
							</div>
							<h1 className="text-blue-500">christian Bale</h1>
							<p>5 star</p>
							<p>
								Best best best Best best best Best best best Best best best Best
								best best
							</p>
						</div>
					</div>
				</SwiperSlide>

			</Swiper>
		</>
	);
};

export default Slider;
