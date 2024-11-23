import { motion } from 'framer-motion';

const models = [
  {
    name: "iPhone 15 Pro",
    price: "From $999",
    features: [
      "6.7″ Super Retina XDR display",
      "A17 Pro chip",
      "Pro camera system",
      "Titanium design"
    ],
    color: "bg-gray-900"
  },
  {
    name: "iPhone 15",
    price: "From $799",
    features: [
      "6.1″ Super Retina XDR display",
      "A16 Bionic chip",
      "Dual camera system",
      "Aluminum design"
    ],
    color: "bg-blue-600"
  },
  {
    name: "iPhone 14",
    price: "From $699",
    features: [
      "6.1″ Super Retina XDR display",
      "A15 Bionic chip",
      "Dual camera system",
      "Aluminum design"
    ],
    color: "bg-purple-600"
  }
];

export default function Compare() {
  return (
    <section id="compare" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Which iPhone is right for you?</h2>
          <p className="text-gray-600 text-lg">
            Compare iPhone models to find the best one for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gray-100 to-gray-200 transform group-hover:scale-[1.02] transition-transform duration-300" />
              <div className="relative p-8 rounded-2xl">
                <div className={`w-16 h-16 ${model.color} rounded-2xl mb-6`} />
                <h3 className="text-2xl font-semibold mb-2">{model.name}</h3>
                <p className="text-xl text-blue-600 mb-6">{model.price}</p>
                <ul className="space-y-4">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-700">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition">
                  Buy
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}