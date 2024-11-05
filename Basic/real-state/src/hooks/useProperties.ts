import { useState, useMemo } from 'react';
import { Property, FilterState } from '../types/property';

const INITIAL_PROPERTIES: Property[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Modern Family Home",
    location: "Beverly Hills, CA",
    price: 1250000,
    beds: 4,
    baths: 3,
    sqft: 2500
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Luxury Villa",
    location: "Miami Beach, FL",
    price: 2150000,
    beds: 5,
    baths: 4,
    sqft: 3200
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Modern Apartment",
    location: "Manhattan, NY",
    price: 850000,
    beds: 2,
    baths: 2,
    sqft: 1200
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Cozy Townhouse",
    location: "Beverly Hills, CA",
    price: 950000,
    beds: 3,
    baths: 2,
    sqft: 1800
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Luxury Penthouse",
    location: "Los Angeles, CA",
    price: 3500000,
    beds: 4,
    baths: 4,
    sqft: 3800
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Modern Condo",
    location: "San Francisco, CA",
    price: 1750000,
    beds: 3,
    baths: 2,
    sqft: 1600
  }
];

export const LOCATIONS = Array.from(
  new Set(INITIAL_PROPERTIES.map(property => property.location))
).sort();

export const PROPERTY_TYPES = [
  "House",
  "Apartment",
  "Villa",
  "Penthouse",
  "Condo",
  "Townhouse",
  "Duplex",
  "Studio"
];

const getPriceRange = (range: string): [number, number] => {
  switch (range) {
    case "Under $500k":
      return [0, 500000];
    case "$500k - $1M":
      return [500000, 1000000];
    case "$1M - $2M":
      return [1000000, 2000000];
    case "$2M - $3M":
      return [2000000, 3000000];
    case "$3M - $5M":
      return [3000000, 5000000];
    case "$5M+":
      return [5000000, Infinity];
    default:
      return [0, Infinity];
  }
};

export const useProperties = () => {
  const [filters, setFilters] = useState<FilterState>({
    location: "",
    propertyType: "",
    priceRange: ""
  });

  const filteredProperties = useMemo(() => {
    return INITIAL_PROPERTIES.filter(property => {
      const [minPrice, maxPrice] = getPriceRange(filters.priceRange);
      
      const matchesLocation = !filters.location || 
        property.location === filters.location;
      
      const matchesPrice = property.price >= minPrice && property.price <= maxPrice;

      const matchesType = !filters.propertyType ||
        property.title.toLowerCase().includes(filters.propertyType.toLowerCase());

      return matchesLocation && matchesPrice && matchesType;
    });
  }, [filters]);

  return {
    properties: filteredProperties,
    filters,
    setFilters
  };
};