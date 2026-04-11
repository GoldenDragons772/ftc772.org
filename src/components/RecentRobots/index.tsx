import Link from "next/link";
import Image from "next/image";

const robots = [
  {
    name: "Botsune Miku I",
    season: "2025-26",
    id: "botsune",
    color: "border-cyan-400/60",
    shadow: "shadow-[0_0_25px_rgba(34,211,238,0.25)]",
    image: "/images/robot/render/Miku1.png",
    scale: "scale-[1.3]",
  },
  {
    name: "Clanky",
    season: "2025-26",
    id: "clanky",
    color: "border-red-600/60",
    shadow: "shadow-[0_0_25px_rgba(220,38,38,0.25)]",
    image: "/images/robot/render/Clanky.png",
    scale: "scale-[1.4]",
  },
  {
    name: "Hydra",
    season: "2024-25",
    id: "hydra",
    color: "border-yellow/60",
    shadow: "shadow-[0_0_25px_rgba(251,176,64,0.25)]",
    image: "/images/robot/render/HydraBlack.png",
    scale: "scale-[1.1]",
  },
];

const RecentRobots = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container relative z-10">
        <div className="mb-4 flex justify-center">
          <div className="rounded-md border border-white/10 bg-black px-5 py-2 text-m font-semibold uppercase tracking-[0.5em] text-yellow shadow-[0_0_25px_rgba(0,0,0,0.35)]">
            Latest Robots
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {robots.map((robot, index) => (
            <Link
              key={index}
              href={`/robot#${robot.id}`}
              className={`group relative w-full max-w-[350px] overflow-hidden rounded-md border border-white/10 bg-[#171717] p-8 transition-all duration-300 hover:-translate-y-1 hover:${robot.color} hover:${robot.shadow} flex flex-col`}
            >
              <div className="relative z-10 mb-6 flex-grow flex items-center justify-center">
                <div className="w-full h-48 transform transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={robot.image}
                    alt={robot.name}
                    width={400}
                    height={300}
                    className={`w-full h-full object-contain ${robot.scale}`}
                  />
                </div>
              </div>

              <div className="relative z-10">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
                    {robot.season}
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-yellow opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="font-names text-xl lowercase tracking-widest text-white group-hover:text-yellow transition-colors duration-300">
                  {robot.name}
                </h3>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-white/70">
                  <span>View Details</span>
                  <svg
                    className="h-3 w-3 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Decorative background glow */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-yellow/5 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/robot"
            className="group flex items-center justify-center rounded-md border border-white/10 bg-black px-8 py-3 text-center text-base font-semibold uppercase tracking-[0.3em] text-yellow shadow-[0_0_25px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-1 hover:border-yellow/50 hover:shadow-[0_0_25px_rgba(251,176,64,0.2)]"
          >
            Explore All Creations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentRobots;
