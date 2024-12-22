import DynamicSearchBar from "@/components/DynamicSearchBar";
import FeaturedListings from "@/components/FeaturedListings";
import InteractiveMap from "@/components/InteractiveMap";
import MarketTrends from "@/components/MarketTrends";
import NewsletterSignup from "@/components/NewsletterSignup";
import PopularNeighborhoods from "@/components/PopularNeighborhoods";
import PropertyCarousel from "@/components/PropertyCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import WelcomeAnimation from "@/components/WelcomeAnimation";


export default function Home() {
  return (
    <main className="space-y-16">
      <WelcomeAnimation />
      <section className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Find Your Dream Home, One Click at a Time</h1>
        <DynamicSearchBar />
      </section>
      <PropertyCarousel />
      <FeaturedListings />
      <PopularNeighborhoods />
      <InteractiveMap />
      <TestimonialsSection />
      <MarketTrends />
      <NewsletterSignup />
    </main>
  )
}

