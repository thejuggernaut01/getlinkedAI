"use client";

import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
	//aos useEffect hook
	useEffect(() => {
		AOS.init({
			duration: 750,
			offset: 0,
			once: true,
			anchorPlacement: "top-bottom",
		});
	}, []);
	return (
		<>
			<div>
				{/* medium and desktop design */}
				<div className="hidden md:block">
					<div className="w-full flex flex-col items-end">
						<div className="py-6 px-7 text-xl font-bold">
							Igniting a Revolution in HR Innovation
						</div>
						<div className="md:mt-[-1.5rem] md:mr-[1.7rem]">
							<Image
								src="/Vector 4.png"
								width={100}
								height={100}
								alt="pink line"
								className="md:w-[8.5rem] lg:w-[8.8rem]"
							/>
						</div>
					</div>

					{/* background beautifications */}
					<div className="">
						<div className="absolute top-[4rem] md:top-[3rem] left-[-6rem] md:left-[-1rem]">
							<Image
								src="/purpleLens.png"
								width={500}
								height={500}
								alt="purple lens"
								className="blur opacity-50 z-0"
							/>
						</div>

						<div className="absolute top-[8.5rem] md:top-[8.5rem] left-[9rem]  md:left-[11rem]">
							<Image
								src={"/star.png"}
								width={12}
								height={12}
								alt="star image"
							/>
						</div>

						<div className="md:hidden absolute md:top-[12rem] left-[22rem]">
							<Image
								src={"/stargray.png"}
								width={8}
								height={8}
								alt="star image"
							/>
						</div>
						<div className="hidden md:block absolute top-[8.5rem] md:top-[12rem] left-[22rem] md:left-[50rem]">
							<Image
								src={"/stargray.png"}
								width={15}
								height={15}
								alt="star image"
							/>
						</div>

						<div className="md:hidden absolute top-[21.5rem] left-[22rem]">
							<Image
								src={"/stargray.png"}
								width={8}
								height={8}
								alt="star image"
							/>
						</div>
						<div className="hidden md:block absolute md:top-[33rem] md:left-[32rem]">
							<Image
								src={"/stargray.png"}
								width={15}
								height={15}
								alt="star image"
							/>
						</div>
					</div>
					{/* background styles ends here */}

					{/* main content */}
					<div className="md:flex text-white">
						<div className="md:pl-16 lg:ml-20 md:flex-1">
							<div className="flex justify-center md:justify-start">
								<Image
									src="/Title.png"
									width={300}
									height={300}
									alt="title"
									className="md:w-[25rem] lg:w-[40rem]"
								/>
							</div>

							<div className="text-center mt-2 md:text-start md:mr-[5rem]">
								Participate in getlinked tech Hackathon 2023 stand a chance to
								win a Big prize
							</div>
							<div className="text-center mt-10 justify-center md:text-start z-10 relative">
								<Link href={"/register"}>
									<Button text={"Register"} />
								</Link>
							</div>
							<div className="flex py-[1.6rem] justify-center text-center md:justify-normal md:mt-2 gap-4">
								<div className="text-6xl">
									00
									<span className="text-sm">H</span>
								</div>
								<div className="text-6xl">
									00
									<span className="text-sm">M</span>
								</div>
								<div className="text-6xl">
									00
									<span className="text-sm">S</span>
								</div>
							</div>
						</div>

						<div className="flex flex-col md:flex-1 items-center">
							<div className="mr-5 z-10">
								<Image
									src="/Image 1.png"
									width={500}
									height={500}
									alt="virtual reality"
									className=" md:w-full md:h-[27rem] z-10 object-contain"
								/>
							</div>
							<div className="lg:mt-[-22.5rem] md:mt-[-20rem]  lg:mr-5  top-[-10rem]">
								<div className="md:flex justify-center">
									<Image
										src={"/man.png"}
										width={500}
										height={500}
										alt="man in a virtual reality"
										className="filter grayscale -hue-rotate-180 relative z-0 object-contain"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* medium and desktop design ends here */}

				{/* mobile screen design */}
				<div className="md:hidden">
					<div>
						<div
							data-aos="fade-right"
							className="flex py-6 text-[1.1rem] text-center justify-center font-bold"
						>
							Igniting a Revolution in HR Innovation
						</div>
						<div data-aos="fade-left" className="absolute">
							<Image
								src="/Vector 4.png"
								width={100}
								height={100}
								alt="pink line"
								className="relative w-[7rem] top-[-1.5rem] left-[14rem]"
							/>
						</div>
					</div>

					{/* background beautifications */}
					<div className="">
						<div className="absolute top-[4rem] left-[-6rem]">
							<Image
								src="/purpleLens.png"
								width={500}
								height={500}
								alt="purple lens"
								className="blur opacity-50 z-0"
							/>
						</div>

						<div className="absolute top-[8.5rem] left-[9rem]">
							<Image
								src={"/star.png"}
								width={12}
								height={12}
								alt="star image"
							/>
						</div>

						<div className="absolute left-[22rem]">
							<Image
								src={"/stargray.png"}
								width={8}
								height={8}
								alt="star image"
							/>
						</div>
						<div className="hidden absolute top-[8.5rem] left-[22rem]">
							<Image
								src={"/stargray.png"}
								width={15}
								height={15}
								alt="star image"
							/>
						</div>

						<div className="md:hidden absolute top-[21.5rem] left-[22rem]">
							<Image
								src={"/stargray.png"}
								width={8}
								height={8}
								alt="star image"
							/>
						</div>
						<div className="hidden md:block absolute md:top-[33rem] md:left-[32rem]">
							<Image
								src={"/stargray.png"}
								width={15}
								height={15}
								alt="star image"
							/>
						</div>
					</div>

					{/* main content */}
					<div className="md:flex text-white">
						<div className="md:ml-28">
							<div className="justify-center mt-5">
								<div data-aos="flip-left" className="absolute">
									<Image
										src={"/Creative 1.png"}
										width={20}
										height={20}
										alt="idea"
										className="relative top-[-1.2rem] left-[17rem]"
									/>
								</div>
								<div
									data-aos="fade-up-right"
									className="text-4xl font-bold flex justify-center"
								>
									getlinkedTech
								</div>
								<div className="flex items-center justify-center">
									<div data-aos="fade-up-right" className="text-4xl font-bold">
										Hackathon
									</div>
									<div data-aos="fade-up-right" className="text-4xl font-bold">
										1.0
									</div>
									<div data-aos="fade-up-left">
										<Image
											src={"/chain.png"}
											width={40}
											height={40}
											alt="chain"
										/>
									</div>
									<div data-aos="fade-up-left">
										<Image
											src={"/banger.png"}
											width={40}
											height={40}
											alt="banger"
										/>
									</div>
								</div>
							</div>

							<div
								data-aos="fade-up"
								border-gray-500
								border-t-1
								className="text-center px-10 mt-2"
							>
								Participat in getlinked tech Hackathon 2023 stand a chance to
								win a Big prize
							</div>
							<div
								data-aos="fade-up"
								className="text-center mt-[1.6rem] justify-center md:text-start z-10 relative"
							>
								<Link href={"/register"}>
									<Button text={"Register"} />
								</Link>
							</div>
							<div
								data-aos="fade-up"
								className="flex py-[1.6rem] justify-center text-center md:justify-normal gap-4"
							>
								<div className="text-6xl">
									00
									<span className="text-sm">H</span>
								</div>
								<div className="text-6xl">
									00
									<span className="text-sm">M</span>
								</div>
								<div className="text-6xl">
									00
									<span className="text-sm">S</span>
								</div>
							</div>

							<div
								data-aos="fade-right"
								className="md:hidden absolute md:top-[10rem] md:left-[45rem] z-10"
							>
								<Image
									src="/Image 1.png"
									width={350}
									height={350}
									alt="virtual reality"
									className="relative top-[0.5rem] left-[2.3rem] z-10"
								/>
							</div>
						</div>
						<div data-aos="fade-left" className="mt-[1.7rem] z-0">
							<div className="mt-5">
								<div className="flex justify-center">
									<Image
										src={"/man.png"}
										width={500}
										height={500}
										alt="man in a virtual reality"
										className="filter grayscale -hue-rotate-180 relative z-0"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Landing;
