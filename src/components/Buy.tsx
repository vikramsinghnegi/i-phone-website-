import { motion } from 'framer-motion';
import { CreditCard, Truck, Shield } from 'lucide-react';

const colors = [
  { name: 'Natural Titanium', class: 'bg-gray-300' },
  { name: 'Blue Titanium', class: 'bg-blue-400' },
  { name: 'White Titanium', class: 'bg-gray-100' },
  { name: 'Black Titanium', class: 'bg-gray-900' }
];

const storage = [
  { size: '128GB', price: '$999' },
  { size: '256GB', price: '$1099' },
  { size: '512GB', price: '$1299' },
  { size: '1TB', price: '$1499' }
];

export default function Buy() {
  return (
    <section id="buy" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Buy iPhone 15 Pro</h2>
          <p className="text-gray-600 text-lg">
            Get up to $800 in credit when you trade in iPhone 11 or higher
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Choose your finish</h3>
            <div className="grid grid-cols-2 gap-4 mb-12">
              {colors.map((color) => (
                <motion.button
                  key={color.name}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl border border-gray-200 hover:border-blue-500 transition"
                >
                  <div className={`w-full h-24 rounded-lg ${color.class} mb-4`} />
                  <span className="text-gray-900">{color.name}</span>
                </motion.button>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-6">Storage</h3>
            <div className="grid grid-cols-2 gap-4">
              {storage.map((option) => (
                <motion.button
                  key={option.size}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl border border-gray-200 hover:border-blue-500 transition"
                >
                  <span className="block text-xl font-semibold">{option.size}</span>
                  <span className="text-gray-600">{option.price}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold">Order Summary</h3>
              <span className="text-2xl text-blue-600">From $999</span>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <CreditCard className="w-6 h-6 text-gray-600 mr-4" />
                <span>Pay 0% APR for 24 months</span>
              </div>
              <div className="flex items-center">
                <Truck className="w-6 h-6 text-gray-600 mr-4" />
                <span>Free delivery</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-gray-600 mr-4" />
                <span>1 year Apple warranty</span>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}