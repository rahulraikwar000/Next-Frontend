export default function HeroBanner() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/automotive.224e7418884105595114.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <span className="sg-translate font-light pt-2 pb-3  text-lg  xl:text-xl 2xl:text-[1.375rem] text-white block leading-snug">Driven by performance</span>
        <h2 className="sg-translate text-white font-light leading-tight pb-2 text-3xl md:text-4xl">
          <span className="font-semibold text-3xl md:text-4xl">
            Soft trims and <span className="text-[#00bfff]">NVH<span className="block md:hidden"></span> solutions</span>
          </span>
          <br className="hidden md:block" /> for seamless rides
        </h2>

      </div>
    </section>
  );
}
