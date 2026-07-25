"use client";
import { services } from "@/app/data/services";
import ServiceCard from "./ServiceCard";
import FeaturedService from "./FeaturedServices";
import WideService from "./WideService";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 max-w-3xl">
          <span className="rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-400">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
            Digital solutions crafted
            <br />
            for ambitious businesses.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            From websites and mobile applications to AI-powered automation,
            we build products that help businesses grow faster.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* Featured */}

          <div className="lg:col-span-2">
            <FeaturedService {...services.featured} />
          </div>

          {/* Right Side */}

          <div className="flex flex-col gap-6">

            <ServiceCard {...services.mobile} />

            <ServiceCard {...services.ai} />

          </div>

          {/* Bottom */}

          <div className="lg:col-span-3">
            <WideService {...services.design} />
          </div>

        </div>
      </div>
    </section>
  );
}