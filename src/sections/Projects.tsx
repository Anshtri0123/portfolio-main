import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const Projects = () => {
  const categories = [
    {
      name: "Real Estate",
      projects: [
        {
          title: "99acrerajhomeproperty",
          description: "A website for 99acrerajhomeproperty Real Estate business.",
          image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
          link: "https://99acrerajhomeproperty.com/"
        },
        {
          title: "Axisarthgroup",
          description: "A website for Axisarth Homes Pvt. Ltd., a Real Estate business.",
          image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
          link: "https://axisarthgroup.com/"
        },
        {
          title: "BAPL Infrabuild",
          description: "A website for BAPL Infrabuild Pvt. Ltd., a Real Estate business.",
          image: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=800",
          link: "https://nhcitykanpur.in/"
        }
      ]
    },
    {
      name: "E-Commerce",
      projects: [
        {
          title: "Lgs Jewels",
          description: "Shopping website for Lgs Jewels, a premium jewelry brand.",
          image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800",
          link: "https://lgsjewels.com/"
        },
        {
          title: "Geeta Fabs",
          description: "A website for Geeta Fabs, a textile printing business.",
          image: "https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg?auto=compress&cs=tinysrgb&w=800",
          link: "https://textileprintingonline.ae/"
        },
        {
          title: "Radhavallabh Industries",
          description: "A website for Radhavallabh Industries, a manufacturing business.",
          image: "https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&w=800",
          link: "https://rvilgroup.co.in/"
        }
      ]
    },
    {
      name: "Healthcare / Pharma",
      projects: [
        {
          title: "Emad Pharma",
          description: "A website for Emad Pharma, a pharmaceutical company.",
          image: "https://images.pexels.com/photos/1170976/pexels-photo-1170976.jpeg?auto=compress&cs=tinysrgb&w=800",
          link: "https://emadpharma.in/"
        },
        {
          title: "Biozen",
          description: "A website for Biozen, a health product company.",
          image: "https://images.pexels.com/photos/8376298/pexels-photo-8376298.jpeg?auto=compress&cs=tinysrgb&w=800",
          link: "https://thebiozen.com/"
        },
        {
          title: "Make My Chemicals",
          description: "A website for Make My Chemicals, a chemical manufacturing company.",
          image: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800",
          link: "https://makemychemicals.com/chemical/"
        }
      ]
    },
    {
      name: "Education",
      projects: [
        {
          title: "Global Abroad Study",
          description: "A website for Global Abroad Study, an overseas education consultancy.",
          image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800",
          link: "https://www.global-abroadstudy.com/"
        },
        {
          title: "Earth Moving Info",
          description: "A website for Earth Moving Info, an educational knowledge platform.",
          image: "https://images.pexels.com/photos/3184641/pexels-photo-3184641.jpeg?auto=compress&cs=tinysrgb&w=800",
          link: "https://earthmovinginfo.com/"
        }
      ]
    },
    {
      name: "Figma & UI",
      projects: [
        {
          title: "Capzient",
          description: "Figma design for Capzient business platform.",
          image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
          link: "https://www.figma.com/design/flhbOsTLETBhDrRncaxSVj/Capzient?node-id=0-1"
        },
        {
          title: "Nike Air Jordan",
          description: "Figma design for Nike Air Jordan concept website.",
          image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
          link: "https://www.figma.com/design/VGntyFPvQL7RBp23NA397M/NIKE-AIR-JORDAN-(Community)"
        },
        {
          title: "Bhojanam",
          description: "Figma design for Bhojanam food delivery app.",
          image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800",
          link: "https://www.figma.com/design/JGNTTyy0U02PTEo7wcgOmT/Bhojanam-food-delivery-app"
        }
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold text-white mb-8 border-l-4 border-purple-500 pl-4"
            >
              {category.name}
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex space-x-4">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Project</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
