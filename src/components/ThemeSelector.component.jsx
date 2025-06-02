export default function ThemeSelector ({ onThemeSelect }){
  const themes = [
    {
      id: 1,
      title: "Education & Enlightenment",
      icon: "📚",
      brief: "Rizal's vision for education as liberation",
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      id: 2,
      title: "Nationalism & Civic Duty",
      icon: "🇵🇭",
      brief: "Love for country and responsible citizenship",
      color: "bg-red-100 text-red-800"
    },
    {
      id: 3,
      title: "Peaceful Reform",
      icon: "✌️",
      brief: "Change through non-violent means",
      color: "bg-green-100 text-green-800"
    },
    {
      id: 4,
      title: "Gender Equality",
      icon: "⚧",
      brief: "Women's rights and empowerment",
      color: "bg-pink-100 text-pink-800"
    },
    {
      id: 5,
      title: "Social Justice",
      icon: "⚖️",
      brief: "Fight against exploitation and inequality",
      color: "bg-purple-100 text-purple-800"
    },
    {
      id: 6,
      title: "Cultural Identity",
      icon: "🌏",
      brief: "Preserving Filipino heritage",
      color: "bg-amber-100 text-amber-800"
    },
    {
      id: 7,
      title: "Moral Courage",
      icon: "🦸",
      brief: "Standing for truth despite risks",
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 8,
      title: "Global Perspective",
      icon: "✈️",
      brief: "Learning from the world while staying rooted",
      color: "bg-teal-100 text-teal-800"
    }
  ];

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
              onClick={() => onThemeSelect(theme.id)}
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
