import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gradient-to-b from-white to-[#e6f1fb]">
      <main className="flex flex-col items-center justify-center flex-grow text-center px-4">
        <h1 className="font-bold bg-gradient-to-tr bg-clip-text px-3 mb-6 uppercase leading-none text-center md:text-8xl text-8 xl block text-[#006abc]" style={{ fontSize: "8rem" }}>404</h1>
        <h5 className="font-normal px-3 leading-none text-center block pt-2 mb-6 md:pb-6 pb-2 ">The page you have requested doesn't exist.</h5>
        <Link
          href="/"
          className="group-focus:!bg-opacity-80 z-10 h-full whitespace-nowrap transition-all duration-700 ease-in-out 
    2xl:text-lg lg:text-base text-sm px-5 lg:px-8 lg:py-4 py-3 
    bg-[#5cd6ff] bg-opacity-80 hover:bg-opacity-90 border border-[#5cd6ff] 
    stroke-white !font-semibold rounded-full font-semibold tracking-wide leading-snug"
        >
          Go to Homepage
        </Link>
      </main>
    </div>
  );
}
