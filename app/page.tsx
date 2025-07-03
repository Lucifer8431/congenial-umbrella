import { HeroSection } from '@/components/home/hero-section';
import { FeaturedProducts } from '@/components/home/featured-products';
import { CategoriesShowcase } from '@/components/home/categories-showcase';
import { Testimonials } from '@/components/home/testimonials';
import { NewsletterSection } from '@/components/home/newsletter-section';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CategoriesShowcase />
        <Testimonials />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}