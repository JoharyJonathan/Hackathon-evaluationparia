"use client"
import { motion } from "framer-motion"
import { CheckCircle, Edit, BarChart2 } from "lucide-react"

export default function Features() {
  const features = [
    {
      title: "Création d'examens dynamiques",
      description: "Générez automatiquement des examens adaptés au niveau des étudiants grâce à l'IA.",
      icon: <Edit className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Correction intelligente",
      description: "Profitez d'une correction automatique et d'un feedback personnalisé pour chaque réponse.",
      icon: <CheckCircle className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Analyse approfondie",
      description: "Accédez à des tableaux de bord détaillés pour suivre les performances et identifier les points faibles.",
      icon: <BarChart2 className="w-8 h-8 text-purple-500" />,
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-bl from-slate-900 to-indigo-950">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-white font-bold text-center mb-8"
        >
          Fonctionnalités clés
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
