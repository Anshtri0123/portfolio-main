import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Palette } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
            <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
            >
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
              <img 
                src="/myimage.png" 
                alt="Your Name" 
                className="w-full h-full object-cover rounded-2xl" 
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
              Welcome to Weblancer
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
              At Weblancer, we are passionate about crafting beautiful and functional web experiences. Our team of skilled developers and designers work collaboratively to bring your ideas to life. Whether you're a startup looking to establish your online presence or an established business aiming to enhance your digital footprint, we have the expertise to deliver top-notch solutions tailored to your needs. We have over 10+ people speicialized in their field 40+ projects and happy clients.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Code className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">Clean Code</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Palette className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">Professional Design</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;