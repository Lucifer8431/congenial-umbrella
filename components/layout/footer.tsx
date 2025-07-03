import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Crown, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
  'Shop': [
    { name: 'All Products', href: '/shop' },
    { name: 'Wellness', href: '/shop?category=wellness' },
    { name: 'Mindfulness', href: '/shop?category=mindfulness' },
    { name: 'Lifestyle', href: '/shop?category=lifestyle' },
    { name: 'New Arrivals', href: '/shop?filter=new' },
    { name: 'Best Sellers', href: '/shop?filter=featured' },
  ],
  'Customer Care': [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/support' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'Track Order', href: '/track-order' },
  ],
  'Company': [
    { name: 'About Zenvia', href: '/about' },
    { name: 'Our Story', href: '/about#story' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Affiliates', href: '/affiliates' },
  ],
  'Legal': [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'CA Privacy Rights', href: '/ca-privacy' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-border/30 mt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-crimson rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-gold rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-border/30">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 glass rounded-full px-6 py-3 mb-8 border-gradient">
              <Crown className="h-5 w-5 text-gold" />
              <span className="text-sm font-bold text-gold tracking-wider uppercase">
                Exclusive Access
              </span>
              <Sparkles className="h-4 w-4 text-gold animate-glow" />
            </div>
            
            <h3 className="text-headline font-playfair font-bold mb-6 text-shadow-luxury">
              Join the 
              <span className="bg-gradient-to-r from-crimson to-gold bg-clip-text text-transparent"> Elite Circle</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Subscribe for exclusive wellness insights, luxury product launches, and 
              <span className="text-gold font-semibold"> 15% off your first order</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-12 bg-card/30 border-border focus:border-gold focus-luxury rounded-full px-6"
              />
              <Button className="btn-gold h-12 px-8 font-bold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-crimson to-gold flex items-center justify-center shadow-luxury">
                <Crown className="h-7 w-7 text-black" />
              </div>
              <span className="font-playfair text-2xl font-bold group-hover:text-gold transition-colors duration-300">Zenvia</span>
            </Link>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
              Premium wellness and mindful living products designed to elevate your journey to 
              <span className="text-gold"> inner peace and luxury</span>.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 group">
                <Phone className="h-4 w-4 text-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-gold transition-colors duration-300">1-800-ZENVIA</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-4 w-4 text-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-gold transition-colors duration-300">hello@zenvia.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin className="h-4 w-4 text-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-gold transition-colors duration-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-playfair font-bold text-lg mb-6 text-gold">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-gold transition-all duration-300 hover:translate-x-1 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-border/30" />

        {/* Bottom Section */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zenvia. All rights reserved. Crafted with luxury in mind.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-6 mt-6 sm:mt-0">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-muted-foreground hover:text-gold transition-all duration-300 hover:scale-125"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-6 border-t border-border/30">
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-muted-foreground">
            <span className="flex items-center gap-2 group">
              <div className="h-3 w-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              <span className="group-hover:text-gold transition-colors duration-300">SSL Secured</span>
            </span>
            <span className="flex items-center gap-2 group">
              <div className="h-3 w-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              <span className="group-hover:text-gold transition-colors duration-300">GDPR Compliant</span>
            </span>
            <span className="flex items-center gap-2 group">
              <div className="h-3 w-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              <span className="group-hover:text-gold transition-colors duration-300">Carbon Neutral</span>
            </span>
            <span className="flex items-center gap-2 group">
              <div className="h-3 w-3 bg-gradient-gold rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              <span className="group-hover:text-gold transition-colors duration-300">30-Day Returns</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}