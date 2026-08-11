import { Container } from "@/components/shared/Container";
import { Header } from "@/components/shared/Header";

export default function Home() {
  return <>
    <Header />
    <main className="pt-20 min-h-screen">
      <Container>
        <div className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Study Space N
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Умное пространство для твоего обучения
          </p>
        </div>
      </Container>
    </main>
  </>
}
