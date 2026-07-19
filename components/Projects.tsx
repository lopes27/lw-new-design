import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import VideoCard from "@/components/VideoCard";

const transformations = [
  {
    number: "01",
    title: "Transformation de cuisine",
    category: "Armoires de cuisine",
    video: "/videos/transformation-kitchen-01.mp4",
  },
  {
    number: "02",
    title: "Nouvelle finition",
    category: "Resurfaçage résidentiel",
    video: "/videos/transformation-kitchen-02.mp4",
  },
  {
    number: "03",
    title: "Projet commercial",
    category: "Surface commerciale",
    video: "/videos/transformation-commercial-01.mp4",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 overflow-hidden bg-neutral-950 px-4 py-20 text-white sm:px-6 lg:scroll-mt-28 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
              Transformations réelles
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
              Découvrez quelques projets avant et après réalisés par Maison
              Surface.
            </p>
          </div>

          <h2 className="max-w-5xl text-4xl font-medium leading-[1.03] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
            Voyez la transformation en mouvement.
          </h2>
        </div>

        </Reveal>

        <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {transformations.map((project, index) => (
            <Reveal
              key={project.number}
              delay={index * 120}
              className="group min-w-[82vw] snap-center sm:min-w-[55vw] lg:min-w-0"
            >
            <article className="h-full">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 lg:max-h-[650px]">
                <VideoCard
                  src={project.video}
                  label={`Vidéo avant/après — ${project.title}`}
                />

                <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/35 text-xs font-medium backdrop-blur-md">
                    {project.number}
                  </span>

                  <span className="rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs text-white/80 backdrop-blur-md">
                    Avant / Après
                  </span>
                </div>
              </div>

              <div className="px-2 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                  {project.title}
                </h3>
              </div>
            </article>
          </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-7 text-white/40">
            Chaque projet est réalisé selon l’espace existant, le fini choisi et
            les besoins du client.
          </p>

          <Magnetic className="w-fit">
            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
              Transformer mon espace
              <span aria-hidden="true">↗</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}