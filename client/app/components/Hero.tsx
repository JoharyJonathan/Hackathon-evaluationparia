"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-start justify-center overflow-hidden">
      {/* Fond abstrait en semi-transparence */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/images/abstract-bg.png')] bg-cover bg-center"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:col-span-1 md:flex md:items-center md:justify-center"
        >
          <Image
            src="/robot.jpg"
            width={350}
            height={350}
            alt="Illustration robot"
            className="rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="md:col-span-1 md:flex md:flex-col md:justify-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
            Révolutionnez vos évaluations
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-900">
            Créez un compte et profitez de notre auto-évaluation assistée par IA
            pour booster vos performances.
          </p>
          <div className="mt-8">
            <Link href="/login">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                Commencer
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
