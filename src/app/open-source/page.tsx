import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Open Source | Golden Dragons (772)",
  description: "Explore our open source CADs and documentation.",
};

const cads = [
  {
    name: "Botsune Miku II",
    link: "https://cad.onshape.com/documents/61f386a8d71adcb83098f8c3/w/9199250a2bd2a2ba5d99ddea/e/a43fcf9ead0a230abe681aaf",
    image: "/images/robot/render/Miku2.png",
    desc: "Our most efficient robot ever. Ranked 24th Globally with a Top 20 Autonomous",
  },
  {
    name: "Botsune Miku I",
    link: "https://cad.onshape.com/documents/1f8d26aab061d6c4f00e75bb/w/78d2ae30230638e657c28646/e/c40911113f37b7450706c718",
    image: "/images/robot/render/Miku1.png",
    desc: "Early 2025-26 design iteration. See our progression.",
  },
  {
    name: "Hydra",
    link: "https://cad.onshape.com/documents/5bb8a293581e33db99dc2191/w/27a3b07c31a9a496257a0aaf/e/bc6e29449637d0bddc340290",
    image: "/images/robot/render/HydraBlack.png",
    desc: "Our competitive robot design featuring advanced subsystems.",
  },
  {
    name: "Viper",
    link: "https://cad.onshape.com/documents/27f61ffb7fe9a5dead4bec75/w/5febf54cc1c5b292a19b8272/e/306040d0a124176dbb12131f",
    image: "/images/robot/render/2025.png",
    desc: "Innovative mechanisms built for maximum efficiency.",
  },
  {
    name: "Giles Corey",
    link: "https://cad.onshape.com/documents/db188ed0eca815e818395ae0/w/e054d7bafd089f92932147e9/e/b7853eb5f72bab2bb2ef06e4",
    image: "/images/robot/render/2024.png",
    desc: "The robot that laid the groundwork for our future success.",
  },
];

const repos = [
  {
    name: "CenterStage",
    desc: "2023-24 CenterStage codebase for FIRST Tech Challenge team 772 from SCGSSM",
    url: "https://github.com/GoldenDragons772/CenterStage",
  },
  {
    name: "Decode",
    desc: "2025-26 Decode codebase for FIRST Tech Challenge team 772 from SCGSSM ",
    url: "https://github.com/GoldenDragons772/Decode",
  },
  {
    name: "ftc772.org",
    desc: "Source code for our official team website.",
    url: "https://github.com/GoldenDragons772/ftc772.org",
  },
  {
    name: "GDocs",
    desc: "Documentation site repository containing our guides and handbooks.",
    url: "https://github.com/GoldenDragons772/GDocs",
  },
  {
    name: "IntoTheDeep",
    desc: "2024-25 IntoTheDeep codebase for FIRST Tech Challenge team 772 from SCGSSM",
    url: "https://github.com/GoldenDragons772/IntoTheDeep",
  },
];

const OpenSourcePage = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap');
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        @keyframes dragonPastelSwipe {
          from { background-position: 0% center; }
          to { background-position: 100% center; }
        }
        .gdocs-dragon-logo-wrapper {
          -webkit-mask-image: url('/images/logo/logo.png');
          -webkit-mask-size: contain;
          -webkit-mask-position: center;
          -webkit-mask-repeat: no-repeat;
          mask-image: url('/images/logo/logo.png');
          mask-size: contain;
          mask-position: center;
          mask-repeat: no-repeat;
          background: linear-gradient(
            90deg,
            #B491C8 0%,    
            #FFB6C1 25%,   
            #AEC6CF 50%,   
            #B491C8 75%,   
            #FFB6C1 100%   
          );
          background-size: 400% auto;
          animation: dragonPastelSwipe 8s linear infinite;
        }
      `}} />
      <div className="relative overflow-hidden bg-transparent pb-24">
        <div className="absolute inset-0 bg-triangle-mesh bg-cover bg-center opacity-40 blur-[2px] scale-[1.02]" />
        <div className="relative z-10">
          <Breadcrumb
            pageName="Open Source"
            description="Our resources, CADs, code, and documentation available for the community."
            titleClassName="text-white text-4xl sm:text-5xl tracking-[0.08em]"
            subtitle="Sharing is caring"
            subtitleClassName="text-xs text-yellow tracking-[0.4em]"
          />

          <div className="container mx-auto px-4 md:px-8 mt-12 max-w-[1200px]">
            
            {/* GDocs Link Section (Full Width Banner) */}
            <div className="mb-20">
              <Link 
                href="https://docs.ftc772.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative block w-full rounded-[2rem] overflow-hidden bg-[#141414] border border-[#141414] hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(var(--color-primary),0.15)] hover:-translate-y-1 p-10 md:p-16 flex flex-col items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 w-full mb-8 transition-transform duration-500 group-hover:scale-105 flex justify-center">
                  <div
                    className="gdocs-custom-logo select-none"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      fontFamily: '"Montserrat", sans-serif',
                      fontWeight: 800,
                      letterSpacing: '0.05em',
                      lineHeight: 1,
                      fontSize: 'clamp(4rem, 10vw, 10rem)',
                    }}
                  >
                    <span style={{ color: '#FFBA24' }}>G</span>
                    <span style={{ color: '#ffffff' }}>D</span>
                    <div className="gdocs-dragon-logo-wrapper" style={{ display: 'inline-flex' }}>
                      <img
                        src="/images/logo/logo.png"
                        alt="Dragon Logo"
                        style={{
                          height: '0.85em',
                          width: 'auto',
                          marginLeft: '0.05em',
                          marginRight: '0.05em',
                          objectFit: 'contain',
                          opacity: 0
                        }}
                      />
                    </div>
                    <span style={{ color: '#ffffff' }}>C</span>
                    <span style={{ color: '#ffffff' }}>S</span>
                  </div>
                </div>
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-3 group-hover:text-primary transition-colors">Golden Dragons Documentation Site</h3>
                  <span className="inline-flex items-center text-lg text-white/50 group-hover:text-white transition-colors">
                    Explore our full documentation site at docs.ftc772.org
                    <svg className="w-5 h-5 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            </div>

            {/* Public Repositories Section */}
            <div className="mb-20">
              <div className="flex items-center gap-6 mb-10">
                <img src="/images/logo/github.png" alt="GitHub" className="w-10 h-10 object-contain" />
                <h2 className="text-3xl md:text-4xl font-normal text-white tracking-wider lowercase" style={{ fontFamily: '"Supercharge", sans-serif' }}>GitHub Repositories</h2>
                <div className="h-px bg-white/10 flex-grow"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {repos.map((repo, index) => (
                  <Link 
                    key={index}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-primary/50 hover:bg-[#111] transition-all duration-300 flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-normal text-white tracking-[0.15em] group-hover:text-primary transition-colors" style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}>
                        {repo.name}
                      </h3>
                      <svg className="w-6 h-6 text-white/30 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </div>
                    {/* "montserrat" style */}
                    <p className="text-white/60 text-lg font-montserrat flex-grow">
                      {repo.desc}
                    </p>
                  </Link>
                ))}

                {/* Classified / Redacted Special Tile */}
                <div 
                  className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-primary/40 hover:bg-[#111] transition-all duration-500 flex flex-col overflow-hidden [perspective:1000px] min-h-[300px]"
                >
                  <style>{`
                    @keyframes goldShimmer {
                      0% { background-position: 200% center; }
                      100% { background-position: -200% center; }
                    }
                    .animate-gold-shimmer {
                      animation: goldShimmer 4s linear infinite;
                    }
                  `}</style>

                  {/* Grid Background */}
                  <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none" />

                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <h3 className="text-2xl font-normal text-white/70 tracking-[0.15em]" style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}>
                      DragonPather <span className="blur-[4px] select-none group-hover:blur-[2px] transition-all duration-500 bg-[linear-gradient(110deg,#FFBA24,45%,#FFF0C2,55%,#FFBA24)] bg-[length:200%_auto] bg-clip-text text-transparent animate-gold-shimmer drop-shadow-[0_0_8px_rgba(255,186,36,0.6)]">[REDACTED]</span>
                    </h3>
                  </div>
                  <p className="text-white/50 text-lg font-montserrat flex-grow relative z-10">
                    Our next-generation pathing model.
                  </p>
                  
                  {/* Floating Question Mark */}
                  <div className="absolute inset-0 flex items-center justify-end pr-16 pointer-events-none z-0">
                    <span 
                      className="mt-6 text-[200px] leading-none font-normal text-[#FFBA24]/20 select-none group-hover:text-[#FFBA24]/30 [transform-style:preserve-3d] group-hover:[transform:rotateX(15deg)_rotateY(-20deg)_translateZ(20px)_scale(1.05)] transition-all duration-700 ease-out animate-pulse"
                      style={{ textShadow: "0 0 40px #FFBA24", fontFamily: '"Supercharge", sans-serif' }}
                      aria-hidden="true"
                    >
                      ?
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Public CADs Section (Raptoria Style Ready-Cards) */}
            <div>
              <div className="flex items-center gap-6 mb-12">
                <div className="bg-white px-3 py-1.5 rounded shadow-[0_0_15px_rgba(255,255,255,0.3)] flex-shrink-0">
                  <img src="/images/logo/onshape.png" alt="OnShape" className="h-6 object-contain" />
                </div>
                {/* translate-y-1 is added here to visually center the Supercharge font baseline with the logo */}
                <h2 className="text-3xl md:text-4xl font-normal text-white tracking-wider lowercase translate-y-1 flex-shrink-0" style={{ fontFamily: '"Supercharge", sans-serif' }}>Public CADs</h2>
                <div className="h-px bg-white/10 flex-grow"></div>
              </div>

              <div className="flex flex-col gap-8">
                {cads.map((cad, index) => (
                  <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center border border-white/10 rounded-[2rem] p-8 lg:p-12 bg-[#0a0a0a]">
                    
                    {/* Image / Render Side */}
                    <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/5 flex items-center justify-center p-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
                      {/* Grid Background */}
                      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(circle_at_center,black_25%,transparent_75%)] pointer-events-none" />
                      
                      <div className="relative w-full h-full z-10 flex items-center justify-center">
                        <img 
                          src={cad.image} 
                          alt={`${cad.name} CAD`} 
                          className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    {/* Text / Info Side */}
                    <div className={`flex flex-col ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                      <div className="inline-flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-primary font-medium tracking-widest text-sm uppercase">Public</span>
                      </div>
                      <h3 className={`text-4xl lg:text-6xl font-normal uppercase leading-none mb-6 tracking-[0.05em] ${
                        cad.name === 'Botsune Miku II'
                          ? 'bg-[linear-gradient(110deg,#FFBA24,45%,#FFF0C2,55%,#FFBA24)] bg-[length:200%_auto] bg-clip-text text-transparent animate-gold-shimmer drop-shadow-[0_0_12px_rgba(255,186,36,0.4)]'
                          : 'text-white'
                      }`} style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}>
                        {cad.name}
                      </h3>
                      <p className="text-white/60 text-lg mb-10 max-w-lg">
                        {cad.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-4">
                        <Link 
                          href={cad.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary hover:bg-primary/90 text-dark font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 hover:shadow-[0_0_20px_rgba(var(--color-primary),0.4)] hover:-translate-y-1"
                        >
                          Open in OnShape
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </Link>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default OpenSourcePage;
