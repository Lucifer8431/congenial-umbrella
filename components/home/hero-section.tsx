'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Crown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-crimson/20 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/5 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-crimson rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, 20, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-gold rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, -15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-crimson to-gold rounded-full blur-2xl opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-3 glass rounded-full px-6 py-3 mb-8 border-gradient"
            >
              <Crown className="h-5 w-5 text-gold animate-pulse" />
              <span className="text-sm font-semibold text-gold tracking-wider uppercase">
                Premium Luxury Collection
              </span>
              <Sparkles className="h-4 w-4 text-gold animate-glow" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-hero font-playfair font-black text-foreground mb-8 leading-none text-shadow-luxury"
            >
              Elevate Your
              <span className="block bg-gradient-to-r from-crimson via-gold to-crimson bg-clip-text text-transparent animate-shimmer">
                Zen Journey
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Discover premium wellness products designed to transform your daily rituals into 
              <span className="text-gold font-medium"> moments of mindful luxury</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12"
            >
              <Button
                asChild
                size="lg"
                className="btn-luxury text-lg font-semibold px-10 py-4 rounded-full group relative overflow-hidden"
              >
                <Link href="/shop" className="flex items-center space-x-3">
                  <span className="relative z-10">Shop Collection</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-crimson/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="btn-gold text-lg font-semibold px-10 py-4 rounded-full group border-2 border-gold/30 hover:border-gold"
              >
                <Play className="h-6 w-6 mr-3 group-hover:scale-125 transition-transform duration-300" />
                <span>Watch Story</span>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border"
            >
              <div className="text-center lg:text-left group">
                <motion.div 
                  className="text-3xl md:text-4xl font-black text-gold mb-2 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  50K+
                </motion.div>
                <div className="text-sm text-muted-foreground font-medium tracking-wide">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left group">
                <motion.div 
                  className="text-3xl md:text-4xl font-black text-gold mb-2 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center lg:justify-start"
                  whileHover={{ scale: 1.1 }}
                >
                  4.9
                  <Sparkles className="h-6 w-6 ml-1 text-gold" />
                </motion.div>
                <div className="text-sm text-muted-foreground font-medium tracking-wide">Average Rating</div>
              </div>
              <div className="text-center lg:text-left group">
                <motion.div 
                  className="text-3xl md:text-4xl font-black text-gold mb-2 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  200+
                </motion.div>
                <div className="text-sm text-muted-foreground font-medium tracking-wide">Premium Products</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <div className="relative aspect-1-1 max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-crimson/30 to-gold/30 rounded-3xl blur-3xl animate-pulse-slow"></div>
                <div className="relative glass rounded-3xl overflow-hidden shadow-luxury border-gradient">
                  <Image
                    src="https://images.pexels.com/photos/3822902/pexels-photo-3822902.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2"
                    alt="Zen meditation setup"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>

            {/* Floating Product Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -top-6 -left-6 glass rounded-2xl p-4 shadow-gold border-gradient hover-lift"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center">
                  <Crown className="h-6 w-6 text-black" />
                </div>
                <div className="text-sm">
                  <div className="font-bold text-gold">Premium Quality</div>
                  <div className="text-muted-foreground">Handcrafted</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 shadow-crimson border-gradient hover-lift"
            >
              <div className="flex items-center space-x-3">
                <div className="text-sm text-right">
                  <div className="font-bold text-crimson">Free Shipping</div>
                  <div className="text-muted-foreground">Worldwide</div>
                </div>
                <div className="w-12 h-12 bg-gradient-crimson rounded-xl flex items-center justify-center">
                  <Zap className="h-6 w-6 text-foreground" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-8 h-14 border-2 border-gold/50 rounded-full flex justify-center relative overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-2 h-6 bg-gradient-to-b from-gold to-crimson rounded-full mt-3"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}