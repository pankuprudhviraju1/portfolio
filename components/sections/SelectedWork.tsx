import Container from "../ui/Container";
import Section from "../ui/Section";
import Divider from "../ui/Divider";
import FadeIn from "../ui/FadeIn";

import { projects } from "@/data/projects";

export default function SelectedWork() {
  return (
    <Section id="projects">
      <FadeIn>
        <Container>

          <div className="mb-24">

            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-neutral-400">
              Selected Work
            </p>

            <h2 className="max-w-3xl text-5xl font-semibold tracking-tight">
              Software built to solve real problems.
            </h2>

          </div>

          {projects.map((project, index) => (
            <div key={project.title}>

              <div className="grid gap-10 md:grid-cols-12">

                <div className="md:col-span-2">
                  <p className="text-sm text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                <div className="md:col-span-10">

                  <h3 className="text-3xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-neutral-500">
                    {project.category}
                  </p>

                  <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
                    {project.description}
                  </p>

                  <button className="mt-10 text-sm font-medium hover:underline">
                    Read Case Study →
                  </button>

                </div>

              </div>

              {index !== projects.length - 1 && (
                <Divider />
              )}

            </div>
          ))}

        </Container>
      </FadeIn>
    </Section>
  );
}