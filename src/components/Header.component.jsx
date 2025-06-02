export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-800">Rizal's Legacies</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#home"
                  className="text-gray-700 hover:text-blue-700 transition font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#theme-selector"
                  className="text-gray-700 hover:text-blue-700 transition font-medium"
                >
                  Legacies
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
