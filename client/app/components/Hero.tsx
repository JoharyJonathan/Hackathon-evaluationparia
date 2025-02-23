"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RoboAnimation } from "./robo-animation";
import { FloatingPaper } from "./floating-paper";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Fond avec éléments flottants */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={6} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Réinventez l&apos;évaluation grâce à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                EvalIA
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
            Créez un compte et réalisez des auto-évaluations instantanées grâce à l&apos;IA. Obtenez des retours précis et personnalisés pour booster votre apprentissage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center"
              onClick={() => {}}
            >
              <ArrowRight className="mr-2 h-5 w-5" /> {/* Use the new icon */}
              <span>Commencer</span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animation du robot */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <RoboAnimation />
      </div>
    </div>
  );
}
