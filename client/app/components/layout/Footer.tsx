"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isClient, setIsClient] = useState(false);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setIsClient(true);
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-800 text-gray-200 p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {isClient ? year : "Loading..."} EvalNova. Tous droits réservés.
        </p>
        <p className="text-xs">
          Développé par <Link href='https://oeka.vercel.app'>OEKA</Link> &quot;Évaluation assistée par IA&quot;.
        </p>
      </div>
    </footer>
  );
}
