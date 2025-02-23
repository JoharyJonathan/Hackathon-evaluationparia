export default function DashboardLayout({ children }) {
    return (
      <div className="min-h-screen flex">
        <aside className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          <nav>
            <ul>
              <li className="mb-2">
                <a href="/dashboard/student" className="hover:underline">Étudiant</a>
              </li>
              <li>
                <a href="/dashboard/teacher" className="hover:underline">Professeur</a>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="flex-grow p-6">{children}</div>
      </div>
    );
  }
  