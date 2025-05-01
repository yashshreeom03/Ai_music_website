// src/app/page.tsx
import Header from '../components/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <section className="h-screen bg-gray-100">How it Works</section>
      </main>
    </>
  );
}
