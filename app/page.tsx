'use client'

import Hero from '@/components/Sections/Hero'
import Description from '@/components/Sections/Description'
import CTASection from '@/components/Sections/CTASection'
import PhotosGallery from '@/components/Sections/PhotosGallery'
import Footer from '@/components/Sections/Footer'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      {/* Главная структура сайта */}
      <Hero />
      <Description />
      <CTASection />
      <PhotosGallery />
      <Footer />
    </main>
  )
}
