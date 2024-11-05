import React from 'react';
import { Search } from 'lucide-react';
import { FilterState } from '../types/property';
import { LOCATIONS, PROPERTY_TYPES } from '../hooks/useProperties';

interface SearchBarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export const SearchBar = ({ filters, onFilterChange }: SearchBarProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: value
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto -mt-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <select
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          >
            <option value="">All Locations</option>
            {LOCATIONS.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Property Type</label>
          <select 
            name="propertyType"
            value={filters.propertyType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          >
            <option value="">All Types</option>
            {PROPERTY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price Range</label>
          <select 
            name="priceRange"
            value={filters.priceRange}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          >
            <option value="">All Prices</option>
            <option value="Under $500k">Under $500k</option>
            <option value="$500k - $1M">$500k - $1M</option>
            <option value="$1M - $2M">$1M - $2M</option>
            <option value="$2M - $3M">$2M - $3M</option>
            <option value="$3M - $5M">$3M - $5M</option>
            <option value="$5M+">$5M+</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <button className="w-full bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 flex items-center justify-center">
          <Search className="w-4 h-4 mr-2" />
          Search Properties
        </button>
      </div>
    </div>
  );
};