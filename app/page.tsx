import Header from './components/Header'
import HeroSection from './components/HeroSection'
import GenerateSection from './components/GenerateSection'
import GallerySection from './components/GallerySection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-screen-xl mx-auto px-4 lg:px-20">
        <HeroSection />
        <GenerateSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  )
}
