'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    id: '1',
    name: 'Wellness',
    description: 'Products for mind and body wellness',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    href: '/shop?category=wellness',
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: '2',
    name: 'Mindfulness',
    description: 'Tools for meditation and mindfulness',
    image: 'https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    href: '/shop?category=mindfulness',
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: '3',
    name: 'Lifestyle',
    description: 'Premium lifestyle essentials',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    href: '/shop?category=lifestyle',
    color: 'from-green-400 to-green-600',
  },
  {
    id: '4',
    name: 'Home & Living',
    description: 'Create your zen sanctuary',
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    href: '/shop?category=home-living',
    color: 'from-orange-400 to-orange-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function CategoriesShowcase() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-playfair font-bold mb-4"
          >
            Shop by Category
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our carefully curated collections designed to enhance every aspect of your mindful lifestyle.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
                    <div className="absolute inset-0 bg-black/20" />
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                      <h3 className="text-xl font-playfair font-bold mb-2">
                        {category.name}
                      </h3>
                      <p className="text-sm opacity-90 mb-4">
                        {category.description}
                      </p>
                      
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-white border-white/30 hover:bg-white/20 w-fit group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <Link href={category.href} className="flex items-center space-x-2">
                          <span>Explore</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}