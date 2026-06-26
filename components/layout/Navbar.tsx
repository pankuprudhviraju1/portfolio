import Container from "../ui/Container";
import { portfolio } from "@/data/portfolio";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#FAFAFA]/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a
            href="/"
            className="text-lg font-semibold tracking-tight"
          >
            {portfolio.shortName}
          </a>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#about" className="text-neutral-500 hover:text-black transition-colors">
              About
            </a>

            <a href="#experience" className="text-neutral-500 hover:text-black transition-colors">
              Experience
            </a>

            <a href="#projects" className="text-neutral-500 hover:text-black transition-colors">
              Work
            </a>

            <a href={portfolio.resume} target="_blank" className="text-black">
              Resume ↗
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}