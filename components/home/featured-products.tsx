'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Sparkles, Crown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/product-card';
import { FEATURED_PRODUCTS } from '@/lib/constants';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-crimson rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-gold rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-3 glass rounded-full px-6 py-3 mb-8 border-gradient"
          >
            <Crown className="h-5 w-5 text-gold animate-pulse" />
            <span className="text-sm font-bold text-gold tracking-wider uppercase">
              Luxury Bestsellers
            </span>
            <Sparkles className="h-4 w-4 text-gold animate-glow" />
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-display font-playfair font-black mb-6 text-shadow-luxury"
          >
            Featured 
            <span className="block bg-gradient-to-r from-crimson via-gold to-crimson bg-clip-text text-transparent">
              Collections
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Discover our most coveted wellness products, meticulously crafted to bring 
            <span className="text-gold font-semibold"> luxury and harmony </span>
            to your daily rituals.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {FEATURED_PRODUCTS.map((product, index) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={{
                ...product,
                description: 'Premium quality product designed for modern wellness and mindful living.',
                images: [product.image],
                sizes: ['S', 'M', 'L'],
                colors: ['White', 'Black', 'Gray'],
                inStock: true,
                tags: ['wellness', 'premium', 'mindful'],
                createdAt: '2024-01-01',
                updatedAt: '2024-01-01',
              }} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg" className="btn-gold text-lg font-bold px-12 py-4 group">
            <Link href="/shop" className="flex items-center space-x-3">
              <span>Explore All Products</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}