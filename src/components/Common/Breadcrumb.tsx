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
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-start">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                {subtitle ? (
                  <div
                    className={`mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-yellow ${subtitleClassName ?? ""}`}
                  >
                    {subtitle}
                  </div>
                ) : null}
                <h1
                  className={`mb-4 font-body text-3xl font-semibold uppercase tracking-[0.08em] text-white sm:text-4xl ${titleClassName ?? ""}`}
                >
                  {pageName}
                </h1>
                <p className="text-sm font-normal leading-relaxed text-white/80 md:text-base">
                  {description}
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="flex items-start justify-end text-end md:mt-[34px] lg:mt-[38px]">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <Link
                      href="/"
                      className="pr-1 text-sm font-normal text-white/70 hover:text-yellow"
                    >
                      Home
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-white/60"></span>
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
