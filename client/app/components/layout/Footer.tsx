export default function Footer() {
    return (
      <footer className="bg-gray-900 p-4 text-gray-400 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} EvalIA. Tous droits réservés.</p>
        </div>
      </footer>
    );
  }
  