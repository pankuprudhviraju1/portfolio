import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAFAFA] text-[#111111]">
        <Container>

          <section className="flex min-h-screen items-center">

            <div>

              <h1 className="text-7xl font-semibold tracking-[-0.05em] md:text-8xl">
                Prudhvi Raju
              </h1>

              <p className="mt-8 text-2xl text-neutral-700">
                Software Engineer.
              </p>

              <p className="mt-4 max-w-xl text-lg leading-8 text-neutral-500">
                Building software that solves real problems through
                thoughtful engineering.
              </p>

            </div>

          </section>

        </Container>
      </main>
    </>
  );
}