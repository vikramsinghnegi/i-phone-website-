import { motion } from 'framer-motion';

const specs = [
  {
    category: "Display",
    items: [
      "6.7‑inch Super Retina XDR display",
      "ProMotion technology with adaptive refresh up to 120Hz",
      "Always-On display"
    ]
  },
  {
    category: "Camera",
    items: [
      "48MP Main | 12MP Ultra Wide",
      "12MP Telephoto with 5x optical zoom",
      "Action mode for smooth, steady video"
    ]
  },
  {
    category: "Performance",
    items: [
      "A17 Pro chip",
      "6-core CPU with 2 performance cores",
      "Neural Engine for advanced ML tasks"
    ]
  }
];

export default function Specs() {
  return (
    <section id="specs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Specifications</h2>
          <p className="text-gray-600 text-lg">
            Every detail. Considered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <h3 className="text-2xl font-semibold mb-6">{spec.category}</h3>
              <ul className="space-y-4">
                {spec.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}