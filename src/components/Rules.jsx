import Image from "next/image";

const Rules = () => {
	return (
		<>
			<div className="md:flex mx-10 mt-10 text-white">
				<div className="absolute">
					<Image
						src="/purpleLens.png"
						width={500}
						height={500}
						alt="reward cup"
						className="relative top-[-3.5rem] left-[-6rem] opacity-40"
					/>
				</div>
				<div className="absolute">
					<Image
						src="/purpleLens.png"
						width={500}
						height={500}
						alt="reward cup"
						className="relative top-[13rem] left-[12rem] opacity-30"
					/>
				</div>
				<div className="flex justify-center">
					<Image
						src={"/rulesImg.png"}
						width={300}
						height={300}
						alt="woman reading rules and regulations"
					/>
				</div>
				<div className="text-center my-5">
					<div className="text-2xl font-bold">
						Rules and <span className="text-color-2">Guidelines</span>
					</div>
					<div>
						Rules and Guidelines Our tech hackathon is a melting pot of
						visionaries, and its purpose is as clear as day: to shape the
						future. Whether you're a coding genius, a design maverick, or a
						concept wizard, you'll have the chance to transform your ideas into
						reality. Solving real-world problems, pushing the boundaries of
						technology, and creating solutions that can change the world, that's
						what we're all about!
					</div>
				</div>
			</div>
		</>
	);
};

export default Rules;
