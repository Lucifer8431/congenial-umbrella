import { SortOption } from './types';

export const SORT_OPTIONS: SortOption[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'popular', label: 'Most Popular' },
];

export const CATEGORIES = [
  { id: '1', name: 'Wellness', slug: 'wellness' },
  { id: '2', name: 'Mindfulness', slug: 'mindfulness' },
  { id: '3', name: 'Lifestyle', slug: 'lifestyle' },
  { id: '4', name: 'Home & Living', slug: 'home-living' },
  { id: '5', name: 'Personal Care', slug: 'personal-care' },
  { id: '6', name: 'Accessories', slug: 'accessories' },
];

export const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const COLORS = [
  { name: 'White', value: '#FFFFFF' },
  { name: 'Black', value: '#000000' },
  { name: 'Indigo', value: '#2D3142' },
  { name: 'Blue', value: '#91C9F7' },
  { name: 'Gold', value: '#CBA135' },
  { name: 'Purple', value: '#6E44FF' },
  { name: 'Gray', value: '#6B7280' },
  { name: 'Pink', value: '#EC4899' },
];

export const SHIPPING_OPTIONS = [
  { id: 'standard', name: 'Standard Shipping', price: 9.99, days: '5-7 business days' },
  { id: 'express', name: 'Express Shipping', price: 19.99, days: '2-3 business days' },
  { id: 'overnight', name: 'Overnight Shipping', price: 39.99, days: '1 business day' },
];

export const PAYMENT_METHODS = [
  { id: 'card', name: 'Credit/Debit Card', icon: 'CreditCard' },
  { id: 'paypal', name: 'PayPal', icon: 'DollarSign' },
  { id: 'apple-pay', name: 'Apple Pay', icon: 'Smartphone' },
  { id: 'google-pay', name: 'Google Pay', icon: 'Smartphone' },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
    comment: 'Zenvia has completely transformed my wellness routine. The quality and mindful design of their products is unmatched.',
    product: 'Meditation Cushion Set',
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
    comment: 'Amazing customer service and the fastest shipping I\'ve ever experienced. Every product feels premium.',
    product: 'Aromatherapy Starter Kit',
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
    comment: 'The attention to detail in packaging and product design shows how much care goes into every item.',
    product: 'Zen Garden Collection',
  },
];

export const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Zen Meditation Cushion',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2',
    category: 'Wellness',
    rating: 4.8,
    reviewCount: 124,
    featured: true,
    trending: true,,
    new: false
  },
  {
    id: '2',
    name: 'Aromatherapy Diffuser',
    price: 159.99,
    image: 'https://images.pexels.com/photos/6186811/pexels-photo-6186811.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2',
    category: 'Wellness',
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    new: true,
  },
  {
    id: '3',
    name: 'Organic Tea Collection',
    price: 49.99,
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2',
    category: 'Lifestyle',
    rating: 4.7,
    reviewCount: 203,
    featured: true,,
    new: false
  },
  {
    id: '4',
    name: 'Mindfulness Journal',
    price: 34.99,
    image: 'https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2',
    category: 'Mindfulness',
    rating: 4.6,
    reviewCount: 156,
    featured: true,,
    new: false
  },
];

export const BLOG_POSTS = [
  {
    id: '1',
    title: 'The Art of Mindful Living: A Beginner\'s Guide',
    excerpt: 'Discover how to incorporate mindfulness into your daily routine with simple, practical techniques.',
    image: 'https://images.pexels.com/photos/3822905/pexels-photo-3822905.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
    category: 'Mindfulness',
    author: 'Dr. Sarah Williams',
    publishedAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Creating Your Perfect Zen Space at Home',
    excerpt: 'Transform any corner of your home into a peaceful sanctuary with these design principles.',
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
    category: 'Lifestyle',
    author: 'Michael Thompson',
    publishedAt: '2024-01-12',
  },
  {
    id: '3',
    title: 'The Science Behind Aromatherapy Benefits',
    excerpt: 'Explore the research-backed benefits of essential oils and how they can enhance your wellbeing.',
    image: 'https://images.pexels.com/photos/6186807/pexels-photo-6186807.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
    category: 'Wellness',
    author: 'Dr. Emma Chen',
    publishedAt: '2024-01-10',
  },
];