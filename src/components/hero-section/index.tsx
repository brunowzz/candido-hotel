import Image from "next/image";
import CountNumber from "../count-number";

export default function HeroSection() {
  return (
    <section className="container mx-auto flex items-center gap-12 px-4">
      <div className="h-full py-10">
        <h1 className="font-heading mb-6"> Explore nosso requintado hotel </h1>

        <p className="mb-12 max-w-lg text-[#4a4a4a] dark:text-[#ffffff]">
          Experimente um hotel requintado imerso na rica história do hotel e na
          elegância atemporal.
        </p>

        <button className="btn-primary">Começar</button>

        <div className="mt-12 flex justify-between">
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-center text-xs lg:text-xl">Quarto Básico</p>
            <CountNumber duration={2800} endValue={100} />
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-center text-xs lg:text-xl">Quarto de Luxo</p>
            <CountNumber duration={3200} endValue={80} />
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-center text-xs lg:text-xl">Suite</p>
            <CountNumber duration={3600} endValue={60} />
          </div>
        </div>
      </div>

      <div className="hidden grid-cols-1 gap-8 md:grid">
        <figure className="h-48 overflow-hidden rounded-2xl">
          <Image
            src="/hero-1.jpeg"
            alt="hero 1"
            width={300}
            height={300}
            className="img scale-animation"
          />
        </figure>

        <div className="grid h-48 grid-cols-2 gap-8">
          <figure className="overflow-hidden rounded-2xl">
            <Image
              src="/hero-2.jpeg"
              alt="hero 2"
              width={300}
              height={300}
              className="img scale-animation"
            />
          </figure>

          <figure className="overflow-hidden rounded-2xl">
            <Image
              src="/hero-3.jpeg"
              alt="hero 3"
              width={300}
              height={300}
              className="img scale-animation"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
