import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="text-sm bg-cover bg-no-repeat">
      {/* Main Footer */}
      <div className="px-6 pt-16 pb-6" style={{
        backgroundImage: `url('https://supreme-group.vercel.app/static/media/footer.dbe7db48d54962232591.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="w-container max-w-screen-lg md:mx-auto">
          <div className="flex flex-col md:justify-between md:items-start gap-10">
            {/* Logo */}
            <Link href="/">
              <span>
                <Image
                  width={161}
                  height={48}
                  src="/logo.svg"
                  alt="Footer Logo"
                />
              </span>
            </Link>

            {/* Links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-gray-700 text-left w-full md:w-25">
              {/* Applications */}
              <div>
                <h3 className="mb-2 sg-translate font-semibold uppercase text-opacity-90 mb-5 text-base">APPLICATIONS</h3>
                <ul className="space-y-2 leading-[2.5]">
                  <li><Link href="/applications/apparel" className="text-sm sm:text-base opacity-80 hover:opacity-100">Apparel</Link></li>
                  <li><Link href="/applications/automotive" className="text-sm sm:text-base opacity-80 hover:opacity-100">Automotive</Link></li>
                  <li><Link href="/applications/filtration" className="text-sm sm:text-base opacity-80 hover:opacity-100">Filtration</Link></li>
                  <li><Link href="/applications/customised-nonwoven" className="text-sm sm:text-base opacity-80 hover:opacity-100">Customized Nonwoven</Link></li>
                </ul>

              </div>

              {/* Company */}
              <div>
                <h3 className="mb-2 sg-translate font-semibold uppercase text-opacity-90 mb-5 text-base">COMPANY</h3>
                <ul className="space-y-2 leading-[2.5]">
                  <li><Link href="/who-we-are" className="text-sm sm:text-base opacity-80 hover:opacity-100">Who We Are</Link></li>
                  <li><Link href="/global-competency" className="text-sm sm:text-base opacity-80 hover:opacity-100">Global Competency</Link></li>
                  <li><Link href="/innovation" className="text-sm sm:text-base opacity-80 hover:opacity-100">Innovation</Link></li>
                  <li><Link href="/esg-impact" className="text-sm sm:text-base opacity-80 hover:opacity-100">ESG Impact</Link></li>
                </ul>
              </div>

              {/* More */}
              <div>
                <h3 className="mb-2 sg-translate font-semibold uppercase text-opacity-90 mb-5 text-base">MORE</h3>
                <ul className="space-y-2 leading-[2.5]">
                  <li><Link href="/contact" className="text-sm sm:text-base opacity-80 hover:opacity-100">Contact Us</Link></li>
                  <li><Link href="/careers" className="text-sm sm:text-base opacity-80 hover:opacity-100">Careers</Link></li>
                </ul>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="mb-2 sg-translate font-semibold uppercase text-opacity-90 mb-5 text-base">FOLLOW US</h3>
                <ul className="space-y-2 leading-[2.5]">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/supremegroup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base opacity-80 hover:opacity-100"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-10 flex flex-col md:flex-row md:justify-between items-center gap-4 pt-6 text-sm text-gray-600 mb-8">
            <p>©2024. All Rights Reserved.</p>
            <p className="hidden md:block text-center md:text-right">
              Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
