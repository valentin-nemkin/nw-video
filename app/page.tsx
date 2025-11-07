'use client';

import Hero from '@/components/Hero';
import Description from '@/components/Description';
import CTASection from '@/components/CTASection';
import PhotosGallery from '@/components/PhotosGallery';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* === Hero Section === */}
      <section id="hero" className="relative w-full hero-svh overflow-hidden">
        <Hero />
      </section>

      {/* === Description Section === */}
      <section id="description" className="section-padding">
        <Description />
      </section>

      {/* === CTA Section === */}
      <section id="cta" className="section-padding muted-bg">
        <CTASection />
      </section>

      {/* === Photos Gallery === */}
      <section id="photos" className="section-padding">
        <PhotosGallery />
      </section>

      {/* === Footer === */}
      <footer id="footer" className="section-padding muted-bg">
        <Footer />
      </footer>
    </main>
  );
}
