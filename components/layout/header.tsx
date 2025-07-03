'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, User, Menu, X, Heart, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/hooks/use-cart';
import { CartDrawer } from '@/components/cart/cart-drawer';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Journal', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getTotalItems, openCart } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-luxury border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-crimson to-gold flex items-center justify-center shadow-luxury">
                <Crown className="h-7 w-7 text-black" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-crimson to-gold opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
            </motion.div>
            <motion.span 
              className="font-playfair text-2xl font-bold text-foreground group-hover:text-gold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Zenvia
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium transition-all duration-300 hover:text-gold relative group py-2"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-crimson to-gold transition-all duration-300 group-hover:w-full"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-crimson/10 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '280px', opacity: 1 }}
                  className="relative"
                >
                  <Input
                    type="text"
                    placeholder="Search luxury products..."
                    className="w-full pl-12 pr-4 bg-card/50 border-border focus:border-gold focus-luxury rounded-full"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gold" />
                </motion.div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="hidden sm:flex hover:bg-card/50 hover:text-gold transition-all duration-300 rounded-full"
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Wishlist */}
            <Button 
              variant="ghost" 
              size="icon" 
              asChild
              className="hover:bg-card/50 hover:text-crimson transition-all duration-300 rounded-full relative group"
            >
              <Link href="/account/wishlist">
                <Heart className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-crimson/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-lg"></div>
              </Link>
            </Button>

            {/* Account */}
            <Button 
              variant="ghost" 
              size="icon" 
              asChild
              className="hover:bg-card/50 hover:text-gold transition-all duration-300 rounded-full relative group"
            >
              <Link href="/account">
                <User className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-lg"></div>
              </Link>
            </Button>

            {/* Cart */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={openCart} 
              className="relative hover:bg-card/50 hover:text-gold transition-all duration-300 rounded-full group"
            >
              <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 h-6 w-6 bg-gradient-crimson text-foreground rounded-full text-xs flex items-center justify-center font-bold shadow-crimson"
                >
                  {totalItems}
                </motion.span>
              )}
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-lg"></div>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden hover:bg-card/50 hover:text-gold transition-all duration-300 rounded-full"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black/95 backdrop-blur-xl border-border">
                <div className="flex flex-col space-y-6 mt-8">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="text-lg font-medium transition-all duration-300 hover:text-gold block py-3 px-4 rounded-lg hover:bg-card/30"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer />
    </header>
  );
}