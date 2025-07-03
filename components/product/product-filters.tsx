'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useProducts } from '@/hooks/use-products';
import { CATEGORIES, COLORS } from '@/lib/constants';

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function FilterSection({ title, children, defaultOpen = true }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-muted/50 rounded-md">
        <span className="font-medium">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-3 p-2">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}

export function ProductFilters() {
  const { filters, setFilters } = useProducts();

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, category]
      : filters.categories.filter((c) => c !== category);
    setFilters({ categories: newCategories });
  };

  const handlePriceChange = (value: number[]) => {
    setFilters({ priceRange: [value[0], value[1]] });
  };

  const handleColorChange = (color: string, checked: boolean) => {
    const newColors = checked
      ? [...filters.colors, color]
      : filters.colors.filter((c) => c !== color);
    setFilters({ colors: newColors });
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      priceRange: [0, 1000],
      sizes: [],
      colors: [],
      rating: 0,
      inStock: true,
      onSale: false,
    });
  };

  const FilterContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear All
        </Button>
      </div>

      <Separator />

      <FilterSection title="Categories">
        <div className="space-y-2">
          {CATEGORIES.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={filters.categories.includes(category.name)}
                onCheckedChange={(checked) =>
                  handleCategoryChange(category.name, checked as boolean)
                }
              />
              <Label htmlFor={category.id} className="text-sm">
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      <Separator />

      <FilterSection title="Price Range">
        <div className="space-y-4">
          <Slider
            value={filters.priceRange}
            onValueChange={handlePriceChange}
            max={1000}
            min={0}
            step={10}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </FilterSection>

      <Separator />

      <FilterSection title="Colors">
        <div className="grid grid-cols-4 gap-2">
          {COLORS.map((color) => (
            <div key={color.name} className="flex flex-col items-center space-y-1">
              <button
                className={`w-8 h-8 rounded-full border-2 ${
                  filters.colors.includes(color.name)
                    ? 'border-primary ring-2 ring-primary/20'
                    : 'border-muted-foreground/20'
                }`}
                style={{ backgroundColor: color.value }}
                onClick={() =>
                  handleColorChange(color.name, !filters.colors.includes(color.name))
                }
              />
              <span className="text-xs">{color.name}</span>
            </div>
          ))}
        </div>
      </FilterSection>

      <Separator />

      <FilterSection title="Rating">
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${rating}`}
                checked={filters.rating === rating}
                onCheckedChange={(checked) =>
                  setFilters({ rating: checked ? rating : 0 })
                }
              />
              <Label htmlFor={`rating-${rating}`} className="text-sm">
                {rating}+ Stars
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      <Separator />

      <FilterSection title="Availability">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="in-stock"
              checked={filters.inStock}
              onCheckedChange={(checked) =>
                setFilters({ inStock: checked as boolean })
              }
            />
            <Label htmlFor="in-stock" className="text-sm">
              In Stock
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="on-sale"
              checked={filters.onSale}
              onCheckedChange={(checked) =>
                setFilters({ onSale: checked as boolean })
              }
            />
            <Label htmlFor="on-sale" className="text-sm">
              On Sale
            </Label>
          </div>
        </div>
      </FilterSection>
    </div>
  );

  return (
    <>
      {/* Mobile Filter */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-4">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filter */}
      <div className="hidden lg:block w-64 p-4 bg-card border rounded-lg">
        <FilterContent />
      </div>
    </>
  );
}