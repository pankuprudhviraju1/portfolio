import Container from "./Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#FAFAFA]/80 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <div className="text-lg font-semibold tracking-tight">
            PR
          </div>

          <nav className="flex items-center gap-8 text-sm text-neutral-600">

            <a href="#about">About</a>

            <a href="#work">Work</a>

            <a href="#resume">Resume</a>

            <a href="#contact">Contact</a>

          </nav>

        </div>
      </Container>
    </header>
  );
}