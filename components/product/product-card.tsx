'use client';

import { motion } from 'framer-motion';
import { Heart, Star, ShoppingBag, Eye, Crown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/lib/types';
import { useCart } from '@/hooks/use-cart';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="group glass rounded-2xl overflow-hidden shadow-luxury hover:shadow-gold transition-all duration-500 border-gradient relative"
    >
      <div className="relative aspect-1-1 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 space-y-2">
          {product.new && (
            <Badge className="bg-gradient-gold text-black font-bold px-3 py-1 shadow-gold">
              <Crown className="h-3 w-3 mr-1" />
              New
            </Badge>
          )}
          {product.trending && (
            <Badge className="bg-gradient-crimson text-foreground font-bold px-3 py-1 shadow-crimson">
              <Zap className="h-3 w-3 mr-1" />
              Trending
            </Badge>
          )}
          {product.originalPrice && (
            <Badge variant="destructive" className="font-bold px-3 py-1">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="icon"
              variant="secondary"
              className="h-10 w-10 glass border-gradient hover:bg-crimson/20"
              onClick={handleWishlist}
            >
              <Heart className={`h-4 w-4 transition-colors duration-300 ${isWishlisted ? 'fill-current text-crimson' : 'text-foreground'}`} />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="icon" 
              variant="secondary" 
              className="h-10 w-10 glass border-gradient hover:bg-gold/20" 
              asChild
            >
              <Link href={`/product/${product.id}`}>
                <Eye className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Quick Add Button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={handleAddToCart}
              className="w-full btn-luxury font-semibold"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <p className="text-sm text-gold font-medium uppercase tracking-wider">{product.category}</p>
          <h3 className="font-playfair font-bold text-lg line-clamp-2 group-hover:text-gold transition-colors duration-300 mt-1">
            <Link href={`/product/${product.id}`}>{product.name}</Link>
          </h3>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-current text-gold'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground font-medium">
            ({product.reviewCount})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-gold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          {!product.inStock && (
            <Badge variant="secondary" className="text-xs bg-muted">
              Out of Stock
            </Badge>
          )}
        </div>
      </div>

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 shimmer"></div>
      </div>
    </motion.div>
  );
}