import Link from "next/link";

const Breadcrumb = ({
  pageName,
  description,
  titleClassName,
  subtitle,
  subtitleClassName,
}: {
  pageName: string;
  description: string;
  titleClassName?: string;
  subtitle?: string;
  subtitleClassName?: string;
}) => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-[#171717] pt-28 lg:pt-[150px]">
        <div className="absolute inset-0 bg-dragon-grid bg-[size:32px_32px] opacity-25 [mask-image:radial-gradient(70%_60%_at_50%_0%,rgba(0,0,0,1),transparent)]" />
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                <h1
                  className={`mb-5 font-display text-3xl lowercase text-white sm:text-4xl ${titleClassName ?? ""}`}
                >
                  {pageName}
                </h1>
                {subtitle ? (
                  <div
                    className={`mb-3 text-base font-light uppercase tracking-[0.3em] text-[#919191] ${subtitleClassName ?? ""}`}
                  >
                    {subtitle}
                  </div>
                ) : null}
                <p className="text-sm font-normal leading-relaxed text-[#919191] md:text-base">
                  {description}
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <Link
                      href="/"
                      className="pr-1 text-sm font-normal text-[#919191] hover:text-yellow"
                    >
                      Home
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-[#919191]"></span>
                  </li>
                  <li className="text-sm font-semibold text-yellow">
                    {pageName}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
