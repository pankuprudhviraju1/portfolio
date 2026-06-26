import Container from "../ui/Container";
import Section from "../ui/Section";
import Divider from "../ui/Divider";
import FadeIn from "../ui/FadeIn";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience">
        <FadeIn>
      <Container>

        <div className="mb-24">

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-neutral-400">
            Experience
          </p>

          <h2 className="max-w-2xl text-5xl font-semibold tracking-tight">
            Building software that scales,
            not just software that works.
          </h2>

        </div>

        {experience.map((job, index) => (
          <div key={job.company}>

            <div className="grid gap-10 md:grid-cols-12">

              <div className="md:col-span-3">
                <p className="text-sm text-neutral-400">
                  {job.duration}
                </p>
              </div>

              <div className="md:col-span-9">

                <h3 className="text-3xl font-semibold">
                  {job.company}
                </h3>

                <p className="mt-2 text-lg text-neutral-500">
                  {job.role}
                </p>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
                  {job.description}
                </p>

              </div>

            </div>

            {index !== experience.length - 1 && (
              <Divider />
            )}

          </div>
        ))}

      </Container>
      </FadeIn>
    </Section>
  );
}