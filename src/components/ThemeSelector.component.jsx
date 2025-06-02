import { useNavigate } from 'react-router-dom';
import { themes } from '../data/Themes.data';

export default function ThemeSelector () {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Rizal's Enduring Teachings</h1>
          <p className="text-xl text-gray-600">Select a theme to explore its modern relevance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => navigate(`/teaching/${theme.id}`)}
              className={`${theme.color} rounded-xl shadow-md p-6 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              <div className="text-4xl mb-3">{theme.icon}</div>
              <h2 className="text-xl font-bold mb-2">{theme.title}</h2>
              <p className="opacity-90">{theme.brief}</p>
              <div className="mt-4 text-sm font-medium flex items-center">
                Explore theme
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-500">
          <p>Click any card to view detailed analysis with modern examples</p>
        </div>
      </div>
    </div>
  );
};
