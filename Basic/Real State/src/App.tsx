import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';
import { PropertyCard } from './components/PropertyCard';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { useProperties } from './hooks/useProperties';

function App() {
  const { properties, filters, setFilters } = useProperties();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center" style={{ minHeight: "75vh" }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}>
          <span className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="text-white">
                <h1 className="text-5xl font-semibold">Let's hunt for your dream residence</h1>
                <p className="mt-4 text-lg">Find the perfect place to live with your family. We have a wide range of properties for you to choose from.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SearchBar filters={filters} onFilterChange={setFilters} />

      {/* Properties Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {properties.length > 0 ? 'Available Properties' : 'No properties found'}
          </h2>
          <button className="text-emerald-500 hover:text-emerald-600">See more →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>

      <Features />

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center">
                <span className="text-4xl font-bold text-emerald-500">4.8</span>
                <div className="ml-4">
                  <div className="flex text-yellow-400">★★★★★</div>
                  <p className="text-gray-600">250+ Reviews</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How much is your property worth now?</h3>
              <p className="text-gray-600 mb-4">Get a free property valuation and find out how much your property is worth in today's market.</p>
              <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-gray-400">We help you find the perfect place to call home.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Buy Property</li>
                <li>Sell Property</li>
                <li>Rent Property</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@realt.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Real Estate St</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;