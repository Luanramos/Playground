import { Home } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-emerald-500" />
            <span className="ml-2 text-xl font-semibold">Real State</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-500">Home</a>
            <a href="#" className="text-gray-700 hover:text-emerald-500">Property</a>
            <a href="#" className="text-gray-700 hover:text-emerald-500">About</a>
            <a href="#" className="text-gray-700 hover:text-emerald-500">Service</a>
            <a href="#" className="text-gray-700 hover:text-emerald-500">Contact</a>
          </div>
          <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};