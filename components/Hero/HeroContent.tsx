import Link from "next/link";

export default function HeroContent() {
  return (
    <>
      {/* Heading */}
      <h1 className="mt-8 text-6xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-7xl lg:text-8xl">
        Build
        <br />
        Digital
        <br />
        Products
        <br />
        That Sell
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
        We craft premium websites, scalable mobile applications and
        AI-powered digital products that help businesses stand out in the
        digital world.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="#"
          className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105"
        >
          Start Project →
        </Link>

        <Link
          href="#"
          className="rounded-full border border-white/10 px-8 py-4 font-semibold text-white transition duration-300 hover:border-white/30"
        >
          View Our Work
        </Link>
      </div>
    </>
  );
}