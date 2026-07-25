export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Left — Brand description */}
          <div className="lg:col-span-4">
            <p className="max-w-sm text-lg leading-relaxed text-zinc-400">
              Empowering global brands with 8+ years of expertise in custom web
              development, e-commerce marketplace optimization, and Generative
              Engine Optimization (GEO). We turn complex challenges into seamless
              digital growth.
            </p>

            {/* Social */}
            <div className="mt-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-base font-semibold text-white">Company</h4>
            <ul className="mt-6 space-y-4">
              {["Home", "Company", "Solution", "Connect"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Services */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-semibold text-white">
              Specialized Services
            </h4>
            <ul className="mt-6 space-y-4">
              {[
                "Web & App Development",
                "Software Development",
                "E-commerce Solutions",
                "Digital Marketing",
                "Branding & UI/UX",
                "Business Growth",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Scale Your Online Business */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-semibold text-white">
              Scale Your Online Business
            </h4>
            <ul className="mt-6 space-y-4">
              {[
                "Launch on Top Marketplaces",
                "Build High-Converting Stores",
                "Optimize Listings for Sales",
                "Run Profitable Ad Campaigns",
                "Grow Globally",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-sm text-zinc-500">
            <span className="font-medium text-zinc-400">Mumbai Office:</span> Based
            in Mumbai, India. Serving clients worldwide.
          </p>
          <p className="text-sm text-zinc-500">
            &copy; 2026 Tcongs Infotech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}