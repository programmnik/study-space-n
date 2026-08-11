import { Features } from "@/components/landing/Features";
import { Hero } from "@/components/landing/Hero";
import { Slider } from "@/components/landing/Slider";
import { Container } from "@/components/shared/Container";
import { Header } from "@/components/shared/Header";

export default function Home() {
  return <>
    <Header />
    <main className="pt-20 min-h-screen">
      <Container>
        <Hero />
        <Features />
      </Container>

      <Slider />
    </main>
  </>
}
