export interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
}

export interface FilterState {
  location: string;
  propertyType: string;
  priceRange: string;
}