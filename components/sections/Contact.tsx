import Container from "../ui/Container";
import Section from "../ui/Section";
import FadeIn from "../ui/FadeIn";

export default function Contact() {
  return (
    <Section id="contact">
      <FadeIn>
        <Container>

          <div className="mb-10">
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-neutral-400">
              Contact
            </p>

            <h2 className="max-w-3xl text-5xl font-semibold tracking-tight">
              Let’s build something together.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              I’m available for freelance work, contract roles, and new product opportunities.
              Reach out with your idea and I’ll respond as soon as possible.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-neutral-400">
                Email
              </p>
              <p className="mt-2 text-xl font-medium text-neutral-700">
                prudhviraju.panku4@gmail.com
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-neutral-400">
                Location
              </p>
              <p className="mt-2 text-xl font-medium text-neutral-700">
                India
              </p>
            </div>
          </div>

        </Container>
      </FadeIn>
    </Section>
  );
}
