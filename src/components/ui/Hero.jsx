import Reveal from "../motion/Reveal";
import { Button } from "./Button";
import VideoModal from "./VideoModal";

export default function Hero() {
  return (
    <section id="home" className="relative pt-24">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-[var(--dark)]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.85)), url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // parallax-like (simple + 1:1 feel)
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-sm font-semibold text-white/80">
                Where Creativity Meets Structural Mastery
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                Where innovative design meet precision construction to create spaces that inspire and endure
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-white/75">
                Our approach unites visionary architecture with flawless construction execution.
                From concept to completion, we build environments that tell a story of innovation,
                precision, and enduring quality.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Button>Get Free Estimate</Button>
                <VideoModal
                  trigger={
                    <button className="group inline-flex items-center gap-3 text-white">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10 border border-white/20 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                        ▶
                      </span>
                      <span className="text-sm font-semibold">Watch Our Video</span>
                    </button>
                  }
                  videoUrl="https://www.youtube.com/embed/Y-x0efG1seA"
                />
              </div>
            </Reveal>
          </div>

          {/* Right circle */}
          <div className="hidden lg:col-span-4 lg:block">
            <div className="grid place-items-center">
              <img
                src="/images/year-experience-circle-transperant.svg"
                alt=""
                className="w-[280px] animate-spin-slow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero info box */}
      <div className="mx-auto max-w-7xl px-4 -mt-16 pb-14">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5 rounded-3xl bg-white p-6 shadow-lg overflow-hidden group">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold text-neutral-500">DesignBuild</p>
                <h3 className="mt-2 text-xl font-bold">Shaping the future of design</h3>
              </div>
              <a className="text-sm font-semibold text-[var(--brand)] hover:underline" href="#about">
                Learn More
              </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl">
              <img
                src="/images/hero-info-image-1.jpg"
                alt=""
                className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-lg group">
            <img
              src="/images/hero-info-image-2.jpg"
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <div className="lg:col-span-4 rounded-3xl bg-[var(--dark)] p-6 text-white shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between">
              <img src="/images/icon-hero-info-1.svg" alt="" className="h-10 w-10" />
              <div className="flex -space-x-2">
                {["author-1.jpg","author-2.jpg","author-3.jpg","author-4.jpg","author-5.jpg"].map((a) => (
                  <img key={a} src={`/images/${a}`} alt="" className="h-9 w-9 rounded-full border-2 border-[var(--dark)] object-cover" />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-white/70">Happy Satisfied Customers</p>
              <h3 className="mt-2 text-4xl font-extrabold">15K+</h3>
            </div>

            <img
              src="/images/icon-hero-info-bg-1.svg"
              alt=""
              className="absolute -right-6 -bottom-6 h-32 w-32 opacity-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
