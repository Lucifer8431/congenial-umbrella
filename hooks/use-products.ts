'use client';

import { create } from 'zustand';
import { Product, FilterOptions } from '@/lib/types';
import { FEATURED_PRODUCTS } from '@/lib/constants';

interface ProductStore {
  products: Product[];
  filteredProducts: Product[];
  filters: FilterOptions;
  searchQuery: string;
  sortBy: string;
  loading: boolean;
  setProducts: (products: Product[]) => void;
  setFilters: (filters: Partial<FilterOptions>) => void;
  setSearchQuery: (query: string) => void;
  setSortBy: (sortBy: string) => void;
  applyFilters: () => void;
  getFeaturedProducts: () => Product[];
  getProductsByCategory: (category: string) => Product[];
  getProductById: (id: string) => Product | undefined;
}

// Mock products data - in real app, this would come from an API
const mockProducts: Product[] = FEATURED_PRODUCTS.map(product => ({
  ...product,
  description: 'Premium quality product designed for modern wellness and mindful living.',
  images: [product.image],
  sizes: ['S', 'M', 'L'],
  colors: ['White', 'Black', 'Gray'],
  inStock: true,
  trending: product.trending || false,
  new: product.new || false,
  tags: ['wellness', 'premium', 'mindful'],
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
}));

export const useProducts = create<ProductStore>((set, get) => ({
  products: mockProducts,
  filteredProducts: mockProducts,
  filters: {
    categories: [],
    priceRange: [0, 1000],
    sizes: [],
    colors: [],
    rating: 0,
    inStock: true,
    onSale: false,
  },
  searchQuery: '',
  sortBy: 'featured',
  loading: false,
  
  setProducts: (products) => set({ products, filteredProducts: products }),
  
  setFilters: (newFilters) => {
    set({ filters: { ...get().filters, ...newFilters } });
    get().applyFilters();
  },
  
  setSearchQuery: (query) => {
    set({ searchQuery: query });
    get().applyFilters();
  },
  
  setSortBy: (sortBy) => {
    set({ sortBy });
    get().applyFilters();
  },
  
  applyFilters: () => {
    const { products, filters, searchQuery, sortBy } = get();
    let filtered = [...products];
    
    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product =>
        filters.categories.includes(product.category)
      );
    }
    
    // Price filter
    filtered = filtered.filter(product =>
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );
    
    // Rating filter
    if (filters.rating > 0) {
      filtered = filtered.filter(product => product.rating >= filters.rating);
    }
    
    // In stock filter
    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }
    
    // Sorting
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    
    set({ filteredProducts: filtered });
  },
  
  getFeaturedProducts: () => {
    return get().products.filter(product => product.featured);
  },
  
  getProductsByCategory: (category) => {
    return get().products.filter(product => product.category === category);
  },
  
  getProductById: (id) => {
    return get().products.find(product => product.id === id);
  },
}));