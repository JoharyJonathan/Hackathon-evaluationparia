import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-purple-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-white text-xl font-bold">EvalIA</h1>
        </Link>
        <div className="space-x-4">
          <Link href="/login" className="text-white hover:underline">Connexion</Link>
          <Link href="/register" className="text-white hover:underline">Inscription</Link>
        </div>
      </div>
    </nav>
  );
}
