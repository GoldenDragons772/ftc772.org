import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Golden Dragons (772)",
  description: "Meet the students and mentors of FTC 772 Golden Dragons.",
};

const TeamPage = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-[#171717]">
        <div className="absolute inset-0 bg-triangle-mesh bg-cover bg-center opacity-40 blur-[2px] scale-[1.02]" />
        <div className="relative z-10">
          <Breadcrumb
            pageName="Meet the Team"
            description="Our team is composed of dedicated students from the South Carolina Governor's School for Science and Mathematics, supported by amazing mentors."
            titleClassName="text-white text-4xl sm:text-5xl tracking-[0.08em]"
            subtitle="The people behind the robot"
            subtitleClassName="text-xs text-yellow tracking-[0.4em]"
          />
          <Team />
        </div>
      </div>
    </>
  );
};

export default TeamPage;
