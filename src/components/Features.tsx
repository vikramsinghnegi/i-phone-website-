import { motion } from 'framer-motion';
import { Camera, Cpu, Battery, Shield } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: "48MP Main Camera",
    description: "Professional-grade camera system with advanced computational photography."
  },
  {
    icon: Cpu,
    title: "A17 Pro Chip",
    description: "The fastest chip ever in a smartphone, powered by advanced 3nm technology."
  },
  {
    icon: Battery,
    title: "All-day Battery",
    description: "Up to 29 hours of video playback with industry-leading battery life."
  },
  {
    icon: Shield,
    title: "Ceramic Shield",
    description: "Tougher than any smartphone glass, with Titanium design."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Designed for Pro Users</h2>
          <p className="text-gray-600 text-lg">
            Experience the most powerful iPhone we've ever created
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition duration-300"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}