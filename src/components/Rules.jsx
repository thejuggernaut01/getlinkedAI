import Image from "next/image";

const Rules = () => {
	return (
		<>
			<div className="md:flex mx-10 md:mx-0 my-10 text-white md:justify-center md:items-center md:w-full md:my-24">
				<div className="absolute">
					<Image
						src="/purpleLens.png"
						width={500}
						height={500}
						alt="purple frame"
						className="relative blur top-[-3.5rem] left-[-6rem] opacity-40"
					/>
				</div>
				<div className="hidden md:block text-center justify-center items-center md:w-full md:text-start">
					<div className="md:pl-32">
						<div className="text-2xl font-bold">Rules and</div>
						<div className="text-color-2 font-bold text-2xl">Guidelines</div>
					</div>
					<div className="md:pl-32">
						Rules and Guidelines Our tech hackathon is a melting pot of
						visionaries, and its purpose is as clear as day: to shape the
						future. Whether you're a coding genius, a design maverick, or a
						concept wizard, you'll have the chance to transform your ideas into
						reality. Solving real-world problems, pushing the boundaries of
						technology, and creating solutions that can change the world, that's
						what we're all about!
					</div>
				</div>
				<div className="md:hidden flex justify-center md:w-full">
					<Image
						src={"/rulesImg.png"}
						width={500}
						height={500}
						alt="woman reading rules"
					/>
				</div>
				<div className="md:hidden text-center justify-center items-center md:w-full md:text-start">
					<div>
						<div className="text-2xl font-bold">Rules and</div>
						<div className="text-color-2 font-bold text-2xl">Guidelines</div>
					</div>
					<div className="md:pr-32">
						Rules and Guidelines Our tech hackathon is a melting pot of
						visionaries, and its purpose is as clear as day: to shape the
						future. Whether you're a coding genius, a design maverick, or a
						concept wizard, you'll have the chance to transform your ideas into
						reality. Solving real-world problems, pushing the boundaries of
						technology, and creating solutions that can change the world, that's
						what we're all about!
					</div>
				</div>
				<div className="hidden md:block flex justify-center md:w-full">
					<Image
						src={"/rulesImg.png"}
						width={500}
						height={500}
						alt="woman reading rules"
					/>
				</div>
			</div>
		</>
	);
};

export default Rules;
