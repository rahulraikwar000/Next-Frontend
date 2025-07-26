import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div
      id="header-wrapper"
      className="bg-white shadow-lg top-0 left-0 right-0 z-[9999]"
      style={{ transform: 'translate(0px, 0px)' }}
    >
      <header className="2xl:py-2 xlg:py-1 py-3 z-50">
        <div className="w-container h-full xlg:py-3 py-1 mt-[2px] flex gap-4 items-center justify-between m-auto">
          <Link href="/">
            <span>
              <Image
                width={148}
                height={44}
                src="/logo.svg"
                alt="MainLogo"
              />
            </span>
          </Link>
        </div>
      </header>
    </div>
  );
}
