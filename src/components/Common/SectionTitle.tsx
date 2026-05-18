const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  titleClassName = "",
  gradientActive = false,
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  titleClassName?: string;
  gradientActive?: boolean;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <div className="relative mb-4">
          <h2 className={`font-display text-3xl lowercase !leading-tight text-white sm:text-4xl md:text-[45px] ${titleClassName}`}>
            {title}
          </h2>
          <h2 
            className={`absolute inset-0 font-display text-3xl lowercase !leading-tight gold-shine transition-opacity duration-700 sm:text-4xl md:text-[45px] ${gradientActive ? "opacity-100" : "opacity-0"}`}
            aria-hidden="true"
          >
            {title}
          </h2>
        </div>
        <p className="text-sm font-normal !leading-relaxed text-white/80 md:text-base">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
