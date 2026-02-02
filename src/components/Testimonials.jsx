import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Reveal from "./motion/Reveal";

export default function Testimonials() {
  return (
    <section className="py-20" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal><p className="text-sm font-semibold text-neutral-500">Our Testimonials</p></Reveal>
          <Reveal delay={0.1}><h2 className="mt-3 text-3xl font-extrabold">Real feedback from those who built their dreams</h2></Reveal>
          <Reveal delay={0.2}><p className="mt-4 text-neutral-600">Our commitment to excellence has earned us the trust of homeowners, developers and businesses alike.</p></Reveal>
        </div>

        <div className="lg:col-span-7">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={18}
            slidesPerView={1}
          >
            {[1,2,3].map((i) => (
              <SwiperSlide key={i}>
                <div className="rounded-3xl border bg-white p-7 shadow-sm">
                  <img src={`/images/company-logo-${i}.svg`} alt="" className="h-10" />
                  <p className="mt-5 text-neutral-700">
                    “The team turned our dream home into a reality from design planning to final handover everything was managed with professionalism and precision.”
                  </p>
                  <div className="mt-5">
                    <p className="font-bold">Darlene Robertson</p>
                    <p className="text-sm text-neutral-500">Interior Designer</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
