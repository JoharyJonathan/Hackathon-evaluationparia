"use client"

import Button from "../ui/Button"
import { Bot } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react"

export default function Header() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-gray-200"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Bot className="w-8 h-8 text-gray-900" />
        <span className="text-gray-900 font-medium text-xl">EvalIA</span>
      </Link>

      <form className="hidden md:flex items-center space-x-2 w-full max-w-md">
        <input
          type="search"
          className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Rechercher..."
        />
        <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">
          Rechercher
        </Button>
      </form>

      <div className="hidden md:flex items-center space-x-4">
        <Link href="/login">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full">
            Commencer
          </Button>
        </Link>
      </div>

      {/* <Button variant="ghost" size="icon" className="md:hidden text-gray-900" onClick={() => {}}>
        <Menu className="w-6 h-6" />
      </Button> */}
    </motion.nav>
  )
}

