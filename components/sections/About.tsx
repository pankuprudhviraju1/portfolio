import Container from "../ui/Container";
import Section from "../ui/Section";
import FadeIn from "../ui/FadeIn";

export default function About() {
  return (
    <Section id="about">
    <FadeIn>
      <Container>

        <p className="mb-10 text-sm uppercase tracking-[0.3em] text-neutral-400">
          About
        </p>

        <div className="max-w-3xl">

          <h2 className="text-4xl font-semibold tracking-tight">
            I enjoy building software that is simple,
            scalable, and useful.
          </h2>

          <p className="mt-10 text-lg leading-9 text-neutral-600">
            I'm currently pursuing my M.Tech in Computer Science while
            building full-stack applications, cloud solutions, and AI
            systems. My experience at Siemens Healthineers taught me the
            importance of writing reliable software that solves real-world
            engineering problems.
          </p>

        </div>

      </Container>
      </FadeIn>
    </Section>
  );
}