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
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Bot className="w-8 h-8 text-purple-500" />
        <span className="text-white font-medium text-xl">EvalIA</span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/fonctionnalites">Fonctionnalités</NavLink>
        <NavLink href="/comment-ca-marche">Comment ça marche</NavLink>
        <NavLink href="/exemples">Exemples</NavLink>
        <NavLink href="/tarifs">Tarifs</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Link href="/login">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">
            Commencer
          </Button>
        </Link>
      </div>

      {/* <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => {}}>
        <Menu className="w-6 h-6" />
      </Button> */}
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </Link>
  )
}
