"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";

interface MediaItem {
  id: string;
  type: "youtube" | "instagram";
  title: string;
  subtitle: string;
  category: "youtube" | "instagram" | "robot" | "outreach" | "vlog";
  image?: string;
  videoId?: string;
  caption: string;
  author: string;
  date: string;
  isoDate: string; // ISO 8601 string for precise chronological sorting
  stats: string;
  likes?: string;
  comments?: string;
  tags?: string[];
  externalUrl: string;
}

// ─────────────────────────────────────────────────────────────
// ALL MEDIA ITEMS ORDERED CHRONOLOGICALLY (NEWEST TO OLDEST)
// ─────────────────────────────────────────────────────────────
const mediaData: MediaItem[] = [
  {
    id: "yt-1",
    type: "youtube",
    title: "The Drive Coach — Every FTC Team's Secret Weapon",
    subtitle: "Albert Mathisz · BioBuzz Kickoff 2026",
    category: "youtube",
    videoId: "HtLR81psUIM",
    caption:
      "A comprehensive masterclass on match dynamics, driver communication, real-time tactical adjustments, and optimizing high-pressure match strategy.",
    author: "@GoldenDragons772",
    date: "Sep 28, 2026",
    isoDate: "2026-09-28",
    stats: "Workshop Video · Strategy",
    externalUrl: "https://www.youtube.com/watch?v=HtLR81psUIM",
  },
  {
    id: "ig-1",
    type: "instagram",
    title: "Introducing the 2026-2027 Golden Dragons Squad",
    subtitle: "Official Team Roster Announcement",
    category: "instagram",
    image: "/images/team/team_2026.jpg",
    caption:
      "Introducing our 14-person FTC 772 roster ready for the season! From CAD and manufacturing to autonomous software and community outreach, our team is united at GSSM to push the skill ceiling in SC robotics.",
    author: "@gssm.golden.dragons",
    date: "Sep 22, 2026",
    isoDate: "2026-09-22",
    stats: "438 likes · 42 comments",
    likes: "438",
    comments: "42",
    tags: ["#FTC772", "#GoldenDragons", "#FIRSTrobotics", "#GSSM", "#RoboticsTeam"],
    externalUrl: "https://www.instagram.com/gssm.golden.dragons/",
  },
  {
    id: "yt-2",
    type: "youtube",
    title: "Preventing Failures | Griffin LaRue | BioBuzz Kickoff",
    subtitle: "Engineering Best Practices",
    category: "youtube",
    videoId: "mjnsMjTEPUc",
    caption:
      "How to design robust FTC hardware, wire electrical systems reliably, and test mechanisms before matches to eliminate failures on field.",
    author: "@GoldenDragons772",
    date: "Sep 18, 2026",
    isoDate: "2026-09-18",
    stats: "Engineering Workshop · Hardware",
    externalUrl: "https://www.youtube.com/watch?v=mjnsMjTEPUc",
  },
  {
    id: "yt-4",
    type: "youtube",
    title: "Portfolio Tips & Tricks | Shree & Shreeji Patel",
    subtitle: "BioBuzz Kickoff Workshop 2026",
    category: "youtube",
    videoId: "zg0PQNzMcM8",
    caption:
      "A comprehensive guide on structuring an award-winning Engineering Portfolio, highlighting team story, technical drawings, and outreach impact.",
    author: "@GoldenDragons772",
    date: "Sep 12, 2026",
    isoDate: "2026-09-12",
    stats: "Judging & Portfolio Guide",
    externalUrl: "https://www.youtube.com/watch?v=zg0PQNzMcM8",
  },
  {
    id: "ig-2",
    type: "instagram",
    title: "Hands-on STEM Mentorship with Future Engineers",
    subtitle: "Classroom Robotics Workshop Series",
    category: "outreach",
    image: "/images/outreach/outreach-1.jpg",
    caption:
      "Bringing robotics to life! Our team spent the afternoon mentoring local elementary and middle school students on gearing, motor control, and mechanism prototyping.",
    author: "@gssm.golden.dragons",
    date: "Sep 05, 2026",
    isoDate: "2026-09-05",
    stats: "372 likes · 28 comments",
    likes: "372",
    comments: "28",
    tags: ["#STEMEducation", "#CommunityOutreach", "#YouthInSTEM", "#FTC"],
    externalUrl: "https://www.instagram.com/gssm.golden.dragons/",
  },
  {
    id: "yt-3",
    type: "youtube",
    title: "772 GOES TO CANADA! — A KDays Premier Experience",
    subtitle: "Official Competition Vlog",
    category: "vlog",
    videoId: "UdjtFWJO4vg",
    caption:
      "Follow the Golden Dragons behind the scenes from South Carolina all the way to Edmonton, Alberta for the international Canadian Rockies Premier Event where 772 won Champion and Control Award!",
    author: "@GoldenDragons772",
    date: "Aug 24, 2026",
    isoDate: "2026-08-24",
    stats: "Competition Vlog · KDays Canada",
    externalUrl: "https://www.youtube.com/watch?v=UdjtFWJO4vg",
  },
  {
    id: "ig-3",
    type: "instagram",
    title: "Botsune Miku II Hardware Architecture",
    subtitle: "Custom Drivetrain & Passthrough Archetype",
    category: "robot",
    image: "/images/robot/render/Miku2.png",
    caption:
      "Full Onshape CAD render of Botsune Miku II. Designed for high-speed cycle optimization with a precision pocketed 6061 aluminum chassis and custom turret launcher.",
    author: "@gssm.golden.dragons",
    date: "Aug 15, 2026",
    isoDate: "2026-08-15",
    stats: "542 likes · 49 comments",
    likes: "542",
    comments: "49",
    tags: ["#Onshape", "#CAD", "#MechanicalDesign", "#RoboticsEngineering"],
    externalUrl: "https://www.instagram.com/gssm.golden.dragons/",
  },
  {
    id: "ig-4",
    type: "instagram",
    title: "Next-Gen Drivers Behind the Controls",
    subtitle: "Interactive Bleacher Demos",
    category: "outreach",
    image: "/images/outreach/outreach-2.jpg",
    caption:
      "Nothing beats seeing a kid's eyes light up when they take the wheel of a competition robot for the first time! Interactive drive demos at our summer showcase.",
    author: "@gssm.golden.dragons",
    date: "Aug 08, 2026",
    isoDate: "2026-08-08",
    stats: "419 likes · 33 comments",
    likes: "419",
    comments: "33",
    tags: ["#FutureRoboticists", "#Inspire", "#HandsOnLearning"],
    externalUrl: "https://www.instagram.com/gssm.golden.dragons/",
  },
  {
    id: "ig-5",
    type: "instagram",
    title: "Hartsville Community Outreach Parade",
    subtitle: "7,500+ Community Outreach Hours",
    category: "outreach",
    image: "/images/team/parade.png",
    caption:
      "Driving our robot down the streets of Hartsville! Connecting with families and demonstrating how high school robotics prepares students for real-world STEM careers.",
    author: "@gssm.golden.dragons",
    date: "Jul 20, 2026",
    isoDate: "2026-07-20",
    stats: "389 likes · 27 comments",
    likes: "389",
    comments: "27",
    tags: ["#HartsvilleSC", "#CommunityLove", "#STEMParade"],
    externalUrl: "https://www.instagram.com/gssm.golden.dragons/",
  },
  {
    id: "yt-6",
    type: "youtube",
    title: "FTC 772 DECODE MTI Submission | 232 NP (ACCEPTED)",
    subtitle: "Maryland Tech Invitational",
    category: "youtube",
    videoId: "hQlTPHKS0g4",
    caption:
      "Official Maryland Tech Invitational (MTI) qualification match submission achieving a 232 no-penalty score run.",
    author: "@GoldenDragons772",
    date: "Jun 25, 2026",
    isoDate: "2026-06-25",
    stats: "232 Points · MTI Accepted",
    externalUrl: "https://www.youtube.com/watch?v=hQlTPHKS0g4",
  },
  {
    id: "ig-6",
    type: "instagram",
    title: "Hardware Prototyping & Mechanism Assembly",
    subtitle: "Late Night Lab Sessions at GSSM",
    category: "robot",
    image: "/images/outreach/outreach-3.jpg",
    caption:
      "Iterating on intake geometries and testing chain tensioning with REV hardware. Countless hours of prototyping go into every single scoring mechanism.",
    author: "@gssm.golden.dragons",
    date: "Jun 10, 2026",
    isoDate: "2026-06-10",
    stats: "481 likes · 39 comments",
    likes: "481",
    comments: "39",
    tags: ["#Prototyping", "#RoboticsLab", "#EngineeringDesign", "#FIRST"],
    externalUrl: "https://www.instagram.com/gssm.golden.dragons/",
  },
  {
    id: "yt-7",
    type: "youtube",
    title: "THAT TIME WE WON INSPIRE!! | 772 Into The Deep",
    subtitle: "1st Place Inspire Award Celebration",
    category: "youtube",
    videoId: "6Z2cg5ssTYg",
    caption:
      "Celebrating taking home the 1st Place Inspire Award — the highest recognition in FIRST robotics honoring technical excellence and community leadership.",
    author: "@GoldenDragons772",
    date: "May 26, 2026",
    isoDate: "2026-05-26",
    stats: "1st Place Inspire Award",
    externalUrl: "https://www.youtube.com/watch?v=6Z2cg5ssTYg",
  },
  {
    id: "ig-7",
    type: "instagram",
    title: "SC State Champions & 1st Inspire Award Legacy",
    subtitle: "Championship Season Recap",
    category: "instagram",
    image: "/images/team/team_2025.jpg",
    caption:
      "Winning alliance partners at the South Carolina FTC Championship and awarded the 1st Place Inspire Award! Unbelievably grateful for our mentors and GSSM community.",
    author: "@gssm.golden.dragons",
    date: "May 14, 2026",
    isoDate: "2026-05-14",
    stats: "624 likes · 58 comments",
    likes: "624",
    comments: "58",
    tags: ["#StateChampions", "#InspireAward", "#HoustonWorlds", "#FTC772"],
    externalUrl: "https://www.instagram.com/gssm.golden.dragons/",
  },
  {
    id: "yt-9",
    type: "youtube",
    title: "772 ITD Worlds Robot Explanation",
    subtitle: "World Championship Machine Breakdown",
    category: "robot",
    videoId: "xt5nobGcAuU",
    caption:
      "Detailed technical breakdown of our World Championship robot architecture, custom passthrough intake, and turret shooter.",
    author: "@GoldenDragons772",
    date: "Apr 28, 2026",
    isoDate: "2026-04-28",
    stats: "Technical Deep Dive",
    externalUrl: "https://www.youtube.com/watch?v=xt5nobGcAuU",
  },
  {
    id: "ig-8",
    type: "instagram",
    title: "Technical Design Review & Team Presentation",
    subtitle: "Community STEM Presentations",
    category: "outreach",
    image: "/images/outreach/outreach-4.jpg",
    caption:
      "Presenting our iterative design workflow, autonomous trajectory math, and mechanical stress analysis to visiting educators and students.",
    author: "@gssm.golden.dragons",
    date: "Apr 12, 2026",
    isoDate: "2026-04-12",
    stats: "364 likes · 22 comments",
    likes: "364",
    comments: "22",
    tags: ["#DesignReview", "#STEMPresentation", "#PublicSpeaking"],
    externalUrl: "https://www.instagram.com/gssm.golden.dragons/",
  },
  {
    id: "ig-9",
    type: "instagram",
    title: "Hydra Black Competition Machine",
    subtitle: "International Control Award Winner",
    category: "robot",
    image: "/images/robot/render/HydraBlack.png",
    caption:
      "Hydra Black — the machine that represented SC at the Maryland Tech Invitational and captured 1st Control Award internationally in Canada!",
    author: "@gssm.golden.dragons",
    date: "Mar 18, 2026",
    isoDate: "2026-03-18",
    stats: "479 likes · 31 comments",
    likes: "479",
    comments: "31",
    tags: ["#HydraBlack", "#ControlAward", "#MTI", "#JavaRobotics"],
    externalUrl: "https://www.instagram.com/gssm.golden.dragons/",
  },
  {
    id: "yt-5",
    type: "youtube",
    title: "SC FTC States 2026 — Golden Dragons",
    subtitle: "Tournament Finals Highlights",
    category: "vlog",
    videoId: "ao-LrqhUa8c",
    caption:
      "Complete match footage and behind-the-scenes action from the 2026 South Carolina State Championship tournament.",
    author: "@GoldenDragons772",
    date: "Feb 22, 2026",
    isoDate: "2026-02-22",
    stats: "State Championship Finals",
    externalUrl: "https://www.youtube.com/watch?v=ao-LrqhUa8c",
  },
  {
    id: "ig-11",
    type: "instagram",
    title: "Senior Mentorship & The Culture of 772",
    subtitle: "Passing Down the Torch at GSSM",
    category: "instagram",
    image: "/images/team/team_2026_alt.jpg",
    caption:
      "At its core, Golden Dragons is more than just robots. Seniors teaching new juniors the ropes through hands-on experience, fostering a supportive environment.",
    author: "@gssm.golden.dragons",
    date: "Feb 08, 2026",
    isoDate: "2026-02-08",
    stats: "342 likes · 19 comments",
    likes: "342",
    comments: "19",
    tags: ["#Teamwork", "#GSSMRobotics", "#Mentorship", "#FutureLeaders"],
    externalUrl: "https://www.instagram.com/gssm.golden.dragons/",
  },
  {
    id: "yt-8",
    type: "youtube",
    title: "HYDRA | SC ITD States Robot Reveal | 772",
    subtitle: "Official Robot Reveal",
    category: "robot",
    videoId: "7AHc4Ny8D0c",
    caption:
      "Cinematic robot reveal video for Hydra, showcasing high-speed autonomous pathing, active intake, and rapid cycle times.",
    author: "@GoldenDragons772",
    date: "Jan 15, 2026",
    isoDate: "2026-01-15",
    stats: "Official Robot Reveal Video",
    externalUrl: "https://www.youtube.com/watch?v=7AHc4Ny8D0c",
  },
  {
    id: "yt-10",
    type: "youtube",
    title: "First Scrimmage Vlog! - State Record Set",
    subtitle: "Early Season Record Breaker",
    category: "vlog",
    videoId: "R9iVv4WKt9c",
    caption:
      "Highlights and live match clips from our first official scrimmage of the season where the Golden Dragons set a new state scoring record.",
    author: "@GoldenDragons772",
    date: "Dec 14, 2025",
    isoDate: "2025-12-14",
    stats: "State Record Run",
    externalUrl: "https://www.youtube.com/watch?v=R9iVv4WKt9c",
  },
  {
    id: "ig-10",
    type: "instagram",
    title: "Spreading STEM Joy in the Community",
    subtitle: "Dinosaur Parade & Robot Fun",
    category: "outreach",
    image: "/images/outreach/outreach-5.jpg",
    caption:
      "Bringing robotics to life with inflatable dinosaurs and mobile robots! Spreading smiles and STEM excitement across town.",
    author: "@gssm.golden.dragons",
    date: "Oct 28, 2025",
    isoDate: "2025-10-28",
    stats: "512 likes · 44 comments",
    likes: "512",
    comments: "44",
    tags: ["#CommunityEvent", "#RoboticsFun", "#STEMJoy"],
    externalUrl: "https://www.instagram.com/gssm.golden.dragons/",
  },
];

const categories = [
  { id: "all", label: "All Media", count: mediaData.length },
  { id: "youtube", label: "YouTube Videos", count: mediaData.filter(m => m.type === "youtube").length },
  { id: "instagram", label: "Instagram Highlights", count: mediaData.filter(m => m.type === "instagram").length },
  { id: "vlog", label: "Competition Vlogs", count: mediaData.filter(m => m.category === "vlog").length },
  { id: "robot", label: "Robots & CAD", count: mediaData.filter(m => m.category === "robot").length },
  { id: "outreach", label: "Community Outreach", count: mediaData.filter(m => m.category === "outreach").length },
];

export default function MediaPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [inlinePlayingId, setInlinePlayingId] = useState<string | null>(null);

  // Filter and sort chronologically
  const filteredAndSortedMedia = useMemo(() => {
    const filtered = mediaData.filter((item) => {
      const matchesCategory =
        activeCategory === "all"
          ? true
          : activeCategory === "youtube"
          ? item.type === "youtube"
          : activeCategory === "instagram"
          ? item.type === "instagram"
          : item.category === activeCategory;

      const matchesSearch =
        searchQuery.trim() === ""
          ? true
          : item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.tags && item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesCategory && matchesSearch;
    });

    return [...filtered].sort((a, b) => {
      const dateA = new Date(a.isoDate).getTime();
      const dateB = new Date(b.isoDate).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [activeCategory, searchQuery, sortOrder]);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-transparent">
        {/* Subtle mesh background accent */}
        <div className="pointer-events-none absolute inset-0 bg-triangle-mesh bg-cover bg-center opacity-30 blur-[2px] scale-[1.02]" />

        <div className="relative z-10">
          <Breadcrumb
            pageName="Media &amp; Highlights"
            description="Explore competition vlogs, robot reveals, engineering workshops, and community outreach photos from the Golden Dragons."
            titleClassName="text-white text-4xl sm:text-5xl md:text-6xl tracking-[0.08em]"
            subtitle="Photos &amp; Videos"
            subtitleClassName="text-xs text-[#FFBA24] tracking-[0.4em]"
          />

          <div className="container pb-28 pt-2">
            {/* ═══════════════════════════════════════════════════════ */}
            {/* CHANNEL SOCIAL STRIP                                  */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div className="mb-12 grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto">
              {/* YouTube Channel Banner */}
              <a
                href="https://www.youtube.com/@GoldenDragons772"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-black/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_10px_30px_-10px_rgba(239,68,68,0.4)] flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-red-600/20 text-red-500 border border-red-500/30 group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                      Golden Dragons [FTC 772]
                    </h3>
                    <p className="text-xs text-white/60">@GoldenDragons772 · YouTube</p>
                  </div>
                </div>
                <span className="rounded-full bg-red-500/15 border border-red-500/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-red-400 flex items-center gap-1 group-hover:bg-red-500 group-hover:text-white transition-all">
                  Subscribe ↗
                </span>
              </a>

              {/* Instagram Profile Banner */}
              <a
                href="https://www.instagram.com/gssm.golden.dragons/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-black/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:shadow-[0_10px_30px_-10px_rgba(236,72,153,0.4)] flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-pink-600/20 text-pink-400 border border-pink-500/30 group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors">
                      @gssm.golden.dragons
                    </h3>
                    <p className="text-xs text-white/60">GSSM Golden Dragons · Instagram</p>
                  </div>
                </div>
                <span className="rounded-full bg-pink-500/15 border border-pink-500/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-pink-400 flex items-center gap-1 group-hover:bg-pink-500 group-hover:text-white transition-all">
                  Follow ↗
                </span>
              </a>
            </div>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* SEARCH, SORT & CATEGORY FILTER BAR                    */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div className="mb-6 flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                        isActive
                          ? "bg-[#FFBA24] text-black shadow-[0_0_20px_rgba(255,186,36,0.4)] scale-105"
                          : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                          isActive ? "bg-black/20 text-black" : "bg-white/10 text-white/50"
                        }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Sorting and Search Bar */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                {/* Chronological Sort Toggle Button */}
                <button
                  onClick={() => setSortOrder(sortOrder === "newest" ? "oldest" : "newest")}
                  className="flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3.5 py-2 text-xs font-semibold text-white/80 hover:text-white hover:border-[#FFBA24] backdrop-blur-md transition-all whitespace-nowrap"
                  title="Toggle Chronological Direction"
                >
                  <span className="text-[#FFBA24]">⇅</span>
                  <span>{sortOrder === "newest" ? "Newest First" : "Oldest First"}</span>
                </button>

                {/* Search Field */}
                <div className="relative w-full sm:w-64">
                  <input
                    type="text"
                    placeholder="Search media, CAD, vlogs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs text-white placeholder-white/40 backdrop-blur-md focus:border-[#FFBA24] focus:outline-none focus:ring-1 focus:ring-[#FFBA24] transition-all pl-9"
                  />
                  <svg
                    className="absolute left-3 top-2.5 h-4 w-4 text-white/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-2 text-white/50 hover:text-white text-xs"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Collage Status Counter & Chronological Indicator */}
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-xs text-white/50 border-b border-white/5 pb-3">
              <span className="font-medium tracking-wide">
                Showing <strong className="text-[#FFBA24]">{filteredAndSortedMedia.length}</strong> items in chronological order (
                <span className="text-[#FFBA24]">
                  {sortOrder === "newest" ? "Newest → Oldest" : "Oldest → Newest"}
                </span>
                )
              </span>
              <span className="text-[11px] text-white/40 italic">
                Click any post to view on platform · YouTube videos play inline
              </span>
            </div>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* SCROLLING MEDIA COLLAGE (MASONRY FEED)                */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div className="media-collage-columns">
              {filteredAndSortedMedia.map((item) => {
                const isYouTube = item.type === "youtube";
                const isPlaying = inlinePlayingId === item.id;

                if (isYouTube) {
                  return (
                    <div
                      key={item.id}
                      className="media-collage-card relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0a0a0c]/80 backdrop-blur-xl transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_20px_45px_rgba(239,68,68,0.2)] group"
                    >
                      {/* Video / Player Container */}
                      <div className="relative aspect-video w-full overflow-hidden bg-black">
                        {isPlaying ? (
                          <div className="relative h-full w-full">
                            <iframe
                              className="h-full w-full border-0"
                              src={`https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1`}
                              title={item.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />
                            {/* Close inline player button */}
                            <button
                              onClick={() => setInlinePlayingId(null)}
                              className="absolute top-2.5 right-2.5 z-30 flex h-7 w-7 items-center justify-center rounded-full bg-black/80 text-white/80 border border-white/20 text-xs hover:border-red-500 hover:text-red-400 backdrop-blur-sm transition-all shadow-lg"
                              title="Close inline video"
                            >
                              ✕
                            </button>
                          </div>
                        ) : (
                          <div
                            onClick={() => setInlinePlayingId(item.id)}
                            className="relative h-full w-full cursor-pointer group/thumb"
                            title="Click to play video inline"
                          >
                            <Image
                              src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/20 transition-colors" />

                            {/* Centered Glowing Red Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_0_30px_rgba(239,68,68,0.7)] group-hover/thumb:scale-115 transition-transform duration-300">
                                <svg
                                  className="w-6 h-6 fill-current translate-x-0.5"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>

                            {/* Badges */}
                            <span className="absolute bottom-3 left-3 rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white border border-white/15 flex items-center gap-1.5 shadow">
                              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                              Play Video Inline
                            </span>
                            <span className="absolute top-3 right-3 rounded-full bg-red-600/90 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow flex items-center gap-1">
                              YouTube
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Video Info Content */}
                      <div className="p-5 sm:p-6">
                        <div className="flex items-center justify-between text-xs text-white/50 mb-2">
                          <span className="font-semibold text-red-400 tracking-wide">
                            {item.author}
                          </span>
                          <span className="flex items-center gap-1 font-mono text-[11px] text-[#FFBA24]/90 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                            <svg className="w-3 h-3 text-[#FFBA24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {item.date}
                          </span>
                        </div>

                        {/* Clickable Title directly linking to YouTube */}
                        <a
                          href={item.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-base font-bold text-white mb-2 leading-snug group-hover:text-red-400 transition-colors"
                        >
                          {item.title} ↗
                        </a>

                        <p className="text-xs text-white/70 leading-relaxed mb-4 line-clamp-3">
                          {item.caption}
                        </p>

                        {/* Footer with Actions */}
                        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                          <span className="text-[11px] text-white/40 tracking-tight">
                            {item.stats}
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setInlinePlayingId(isPlaying ? null : item.id)}
                              className="text-[11px] font-semibold text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-2.5 py-1 rounded-full transition-all"
                            >
                              {isPlaying ? "Close Player" : "▶ Play Inline"}
                            </button>
                            <a
                              href={item.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] font-bold text-red-400 hover:text-white bg-red-600/20 hover:bg-red-600 border border-red-500/30 px-3 py-1 rounded-full transition-all flex items-center gap-1 shadow"
                            >
                              <span>YouTube</span>
                              <span>↗</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                // ─── INSTAGRAM COLLAGE CARD ───
                return (
                  <div
                    key={item.id}
                    className="media-collage-card relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0a0a0c]/80 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:shadow-[0_20px_45px_rgba(236,72,153,0.2)] group"
                  >
                    {/* Clickable Image leading to Instagram */}
                    <a
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative w-full overflow-hidden bg-black/60 cursor-pointer"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-black/20" />

                        {/* Platform Badge */}
                        <span className="absolute top-3 right-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md flex items-center gap-1">
                          <span>📸</span> Instagram
                        </span>

                        {/* Hover Overlay Prompt */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                          <span className="rounded-full bg-pink-600/90 border border-pink-400 px-4 py-2 text-xs font-bold text-white shadow-xl flex items-center gap-1.5 scale-95 group-hover:scale-100 transition-transform">
                            <span>View on Instagram</span>
                            <span>↗</span>
                          </span>
                        </div>
                      </div>
                    </a>

                    {/* Post Content */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center justify-between text-xs text-white/50 mb-2">
                        <span className="font-semibold text-pink-400 tracking-wide">
                          {item.author}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[11px] text-[#FFBA24]/90 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                          <svg className="w-3 h-3 text-[#FFBA24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {item.date}
                        </span>
                      </div>

                      {/* Clickable Title */}
                      <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-base font-bold text-white mb-2 leading-snug group-hover:text-pink-400 transition-colors"
                      >
                        {item.title} ↗
                      </a>

                      <p className="text-xs text-white/70 leading-relaxed mb-4 line-clamp-3">
                        {item.caption}
                      </p>

                      {/* Tags */}
                      {item.tags && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {item.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] text-[#FFBA24]/90"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Card Footer */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[11px] text-white/40 tracking-tight">
                          {item.stats}
                        </span>
                        <a
                          href={item.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-bold text-pink-400 hover:text-white bg-pink-600/20 hover:bg-pink-600 border border-pink-500/30 px-3 py-1 rounded-full transition-all flex items-center gap-1 shadow"
                        >
                          <span>Instagram</span>
                          <span>↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty state if search has no results */}
            {filteredAndSortedMedia.length === 0 && (
              <div className="text-center py-20 bg-black/40 rounded-[28px] border border-white/10 mt-6">
                <p className="text-lg text-white font-medium mb-2">No media items found</p>
                <p className="text-sm text-white/50 mb-4">
                  No posts matched your search for "{searchQuery}".
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="rounded-full bg-[#FFBA24] text-black px-5 py-2 text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
