'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Award, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';

const values = [
  {
    icon: Heart,
    title: 'Mindful Living',
    description: 'We believe in creating products that enhance your journey to inner peace and balance.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Building a supportive community of wellness enthusiasts who inspire each other.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Every product is crafted with meticulous attention to detail and premium materials.',
  },
  {
    icon: Globe,
    title: 'Sustainable Future',
    description: 'Committed to eco-friendly practices and sustainable sourcing for a better planet.',
  },
];

const team = [
  {
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    bio: 'Former wellness coach with 15+ years in mindfulness practices.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Design',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    bio: 'Award-winning designer passionate about creating beautiful, functional products.',
  },
  {
    name: 'Emma Thompson',
    role: 'Wellness Expert',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    bio: 'Certified meditation instructor and holistic wellness practitioner.',
  },
];

const stats = [
  { number: '50K+', label: 'Happy Customers' },
  { number: '200+', label: 'Premium Products' },
  { number: '4.9★', label: 'Average Rating' },
  { number: '15+', label: 'Countries Served' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-crimson/20 via-black to-gold/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-crimson/10 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold/20 to-crimson/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-gold/30"
            >
              <Sparkles className="h-5 w-5 text-gold" />
              <span className="text-gold font-medium">Our Story</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              Crafting
              <span className="bg-gradient-to-r from-gold via-crimson to-gold bg-clip-text text-transparent">
                {' '}Mindful Moments
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
            >
              At Zenvia, we believe that wellness isn't just a destination—it's a journey of mindful choices, 
              premium experiences, and authentic connections with yourself and the world around you.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-gold to-crimson hover:from-gold/90 hover:to-crimson/90 text-black font-bold px-8 py-4 rounded-full group transition-all duration-300 shadow-2xl hover:shadow-gold/25"
              >
                <Link href="/shop" className="flex items-center space-x-2">
                  <span>Explore Products</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gold/50 text-gold hover:bg-gold/10 font-bold px-8 py-4 rounded-full transition-all duration-300"
              >
                Our Mission
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold to-crimson bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Core
              <span className="bg-gradient-to-r from-gold to-crimson bg-clip-text text-transparent">
                {' '}Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do, from product design to customer experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gold/50 transition-all duration-300 group h-full backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-gold/20 to-crimson/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-8 w-8 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our
              <span className="bg-gradient-to-r from-gold to-crimson bg-clip-text text-transparent">
                {' '}Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate individuals dedicated to bringing you the finest wellness experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gold/50 transition-all duration-300 group overflow-hidden backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                      <Badge variant="outline" className="border-gold/50 text-gold mb-4">
                        {member.role}
                      </Badge>
                      <p className="text-gray-400 leading-relaxed">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our
                <span className="bg-gradient-to-r from-gold to-crimson bg-clip-text text-transparent">
                  {' '}Mission
                </span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  We're on a mission to make wellness accessible, beautiful, and transformative. 
                  Every product we create is designed to elevate your daily rituals and bring 
                  moments of peace to your busy life.
                </p>
                <p>
                  From our sustainably sourced materials to our mindful packaging, we consider 
                  every detail in our commitment to your wellbeing and our planet's health.
                </p>
                <p>
                  Join us in creating a world where wellness isn't a luxury, but a natural part 
                  of living beautifully and authentically.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-gradient-to-r from-gold to-crimson hover:from-gold/90 hover:to-crimson/90 text-black font-bold px-8 py-4 rounded-full group transition-all duration-300 shadow-2xl hover:shadow-gold/25"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Get in Touch</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3822905/pexels-photo-3822905.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="Wellness lifestyle"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-gold to-crimson rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-crimson to-gold rounded-full blur-3xl opacity-40"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}