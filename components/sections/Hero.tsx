import Container from "../ui/Container";
import Button from "../ui/Button";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <Container>
        <div className="max-w-4xl">

          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-neutral-500">
            {portfolio.role}
          </p>

          <h1 className="text-6xl font-semibold tracking-[-0.06em] md:text-8xl">
            {portfolio.name}
          </h1>

          <p className="mt-8 max-w-2xl text-2xl leading-relaxed text-neutral-700">
            I build scalable software, cloud applications, and AI-powered
            systems with a focus on performance, simplicity, and thoughtful
            engineering.
          </p>

          <div className="mt-14 flex flex-wrap gap-4">
<Button
  href={portfolio.resume}
  external
>
  Resume
</Button>

<Button
  href={portfolio.github}
  external
>
  GitHub
</Button>

<Button
  href={portfolio.linkedin}
  external
>
  LinkedIn
</Button>
          </div>

        </div>
      </Container>
    </section>
  );
}