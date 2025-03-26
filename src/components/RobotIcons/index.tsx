"use client";

import Link from "next/link";
import Image from "next/image";

const RobotIcons = () => {
    // add new robots on top
  const robots = [
    {
      year: "Into the Deep: 2024-2025",
      name: "Hydra",
      image: "https://media.team254.com/2024/03/8e7107a6-2024-robot-homepagecrop.png",
      link: "/robot/Hydra"
    },
    {
      year: "Into the Deep: 2024-2025",
      name: "Viper",
      image: "/images/robot/2025.png",
      link: "/robot/Viper"
    },
    {
        year: "Centerstage: 2023-2024",
        name: "Giles Cory",
        image: "/images/robot/2024.png",
        link: "/robot/GilesCory"
    }
  ];

  return (
    <div className="team-bg flex mt-10 md:mt-0 min-h-96 w-full">
      <div className="flex justify-center items-center w-full gap-4 px-4">
        {robots.map((robot) => (
          <div 
            key={robot.year}
            className="relative group flex-1 transition-all duration-300 hover:flex-[1.05]"
            style={{ maxWidth: '400px', minWidth: '300px' }}
          >
            <Link href={robot.link} className="block h-full">
              <div className="aspect-video overflow-hidden rounded-lg shadow-xl bg-gray-100">
                <Image
                  alt={`${robot.name}, Team 254's ${robot.year} FRC Robot`}
                  src={robot.image}
                  width={400}
                  height={300}
                  className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105" // Changed object-cover to object-contain
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-bold text-lg md:text-xl drop-shadow-lg">
                  {robot.name}
                  <span className="block text-sm font-normal opacity-90">{robot.year}</span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RobotIcons;