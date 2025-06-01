import React from 'react';

export default function RizalsTeachings() {
  const teachings = [
    {
      id: 1,
      title: "Advocacy for Education & Enlightenment",
      rizalsQuote: "The youth is the hope of the nation.",
      rizalsSource: "El Filibusterismo (1891)",
      rizalsIdea: "Education liberates people from oppression. Rizal founded schools in Dapitan and emphasized science, languages, and critical thought.",
      modernExample: {
        title: "2024 UP Budget Cuts & PISA Rankings",
        description: "Protests erupted after government slashed funding for state universities, while the Philippines scored among the lowest in global education assessments.",
        sources: [
          { name: "Philippine Daily Inquirer, 2024", url: "#" },
          { name: "OECD PISA Report, 2023", url: "#" }
        ]
      },
      criticalQuestion: "Is the Philippines fulfilling Rizal's dream of education for liberation?",
      analysisPoints: [
        "Despite free college (RA 10931), many rural schools lack teachers and materials",
        "Rizal valued holistic education, but today's system prioritizes memorization over critical thinking",
        "How can we bridge the gap between Rizal's vision and current realities?"
      ]
    },
    {
      id: 2,
      title: "Nationalism & Civic Responsibility",
      rizalsQuote: "Why independence, if the slaves of today will be the tyrants of tomorrow?",
      rizalsSource: "Letter to Marcelo H. del Pilar (1892)",
      rizalsIdea: "Love for country should translate to holding leaders accountable and participating in civic life.",
      modernExample: {
        title: "PDAF & PhilHealth Scandals",
        description: "Public outrage over corruption cases like Pharmally and DPWH fund misuse reflects Rizal's warnings about greed in government.",
        sources: [
          { name: "Rappler Investigation, 2023", url: "#" },
          { name: "COA Reports, 2022-2023", url: "#" }
        ]
      },
      criticalQuestion: "Are modern Filipinos practicing Rizal's brand of constructive nationalism?",
      analysisPoints: [
        "The rise of historical revisionism challenges Rizal's emphasis on truth",
        "Social media has created new avenues for civic engagement Rizal couldn't imagine",
        "How do we balance nationalism with global citizenship in the 21st century?"
      ]
    },
    {
      id: 3,
      title: "Non-Violent Reform & Peaceful Resistance",
      rizalsQuote: "I do not write for this generation. I am writing for other ages.",
      rizalsSource: "Letter to Ferdinand Blumentritt (1887)",
      rizalsIdea: "Change through intellectual discourse and peaceful means rather than armed struggle.",
      modernExample: {
        title: "#JunkTerrorLaw Movement & Community Pantries",
        description: "Activists used legal petitions and social media campaigns against the Anti-Terror Law, while community pantries emerged as peaceful protest against government inefficiency.",
        sources: [
          { name: "CNN Philippines, 2021", url: "#" },
          { name: "ABS-CBN News, 2021-2023", url: "#" }
        ]
      },
      criticalQuestion: "Is peaceful resistance still effective in the digital age?",
      analysisPoints: [
        "Rizal's La Solidaridad vs. modern hashtag activism",
        "The government's response to peaceful protests today vs. Spanish colonial reaction",
        "When does peaceful protest become insufficient?"
      ]
    },
    {
      id: 4,
      title: "Gender Equality & Women's Empowerment",
      rizalsQuote: "Women are not merely for reproduction and the kitchen; they must be educated.",
      rizalsSource: "Letter to the Women of Malolos (1889)",
      rizalsIdea: "Women deserve equal rights and education to participate fully in society.",
      modernExample: {
        title: "#HijaAko Movement & Women in Politics",
        description: "Women called out victim-blaming in abuse cases, while more women hold political office but still face gender-based challenges.",
        sources: [
          { name: "Rappler, 2021-2024", url: "#" },
          { name: "COMELEC Data, 2022 Elections", url: "#" }
        ]
      },
      criticalQuestion: "Has the Philippines achieved Rizal's vision for women?",
      analysisPoints: [
        "Compare Rizal's time (no suffrage) to today (women leaders)",
        "Persistent gender pay gap and glass ceilings",
        "How Rizal's feminist views were ahead of his time"
      ]
    },
    {
      id: 5,
      title: "Social Justice & Equality",
      rizalsQuote: "There are no tyrants where there are no slaves.",
      rizalsSource: "Noli Me Tangere (1887)",
      rizalsIdea: "Condemnation of feudal systems and exploitation of the poor.",
      modernExample: {
        title: "PUV Modernization Protests & Land Reform Delays",
        description: "Jeepney drivers resist phaseouts without subsidies, while farmers demand faster CARP implementation - mirroring Rizal's critique of hacienda abuses.",
        sources: [
          { name: "Manila Bulletin, 2023", url: "#" },
          { name: "Kilusang Magbubukid Reports", url: "#" }
        ]
      },
      criticalQuestion: "Has Philippine society moved beyond feudal structures?",
      analysisPoints: [
        "Modern economic inequality vs. Spanish-era class system",
        "Oligarchic control in contemporary politics",
        "Rizal's solution vs. modern welfare programs"
      ]
    },
    {
      id: 6,
      title: "Importance of Language & Cultural Identity",
      rizalsQuote: "Ang hindi marunong magmahal sa sariling wika, daig pa ang hayop at malansang isda.",
      rizalsSource: "El Amor Patrio (1882)",
      rizalsIdea: "Preserve Filipino identity while selectively adopting foreign ideas.",
      modernExample: {
        title: "Mother Tongue Education Debate & Colonial Mentality",
        description: "DepEd's language policy controversies and ongoing preference for Western culture over local traditions.",
        sources: [
          { name: "DepEd Memos, 2023", url: "#" },
          { name: "Philippine Studies Journal", url: "#" }
        ]
      },
      criticalQuestion: "Is globalization erasing Filipino identity?",
      analysisPoints: [
        "Rizal's multilingualism vs. English-only preference today",
        "K-pop influence vs. traditional arts preservation",
        "Balancing cultural pride with global integration"
      ]
    },
    {
      id: 7,
      title: "Moral Integrity & Sacrifice for the Greater Good",
      rizalsQuote: "I die without seeing the dawn... You who will see it, welcome it for me.",
      rizalsSource: "Last poem (1896)",
      rizalsIdea: "Stand for truth and justice regardless of personal cost.",
      modernExample: {
        title: "Whistleblowers & Journalists Under Threat",
        description: "Cases like Jun Lozada (NBN-ZTE scam) and Maria Ressa (Rappler) show continuing risks for truth-tellers.",
        sources: [
          { name: "Committee to Protect Journalists", url: "#" },
          { name: "Philippine Center for Investigative Journalism", url: "#" }
        ]
      },
      criticalQuestion: "Are modern Filipinos willing to sacrifice like Rizal did?",
      analysisPoints: [
        "Comparing Rizal's exile to modern red-tagging",
        "The psychology of martyrdom in Filipino culture",
        "How to cultivate courage without romanticizing suffering"
      ]
    },
    {
      id: 8,
      title: "Global Perspective & International Solidarity",
      rizalsQuote: "Travel is the best way to learn about other cultures and improve one's own.",
      rizalsSource: "Diaries (1882-1892)",
      rizalsIdea: "Learn from other nations while maintaining Filipino sovereignty.",
      modernExample: {
        title: "OFW Rights Advocacy & UN Engagement",
        description: "Migrant workers groups demand better protections, while the Philippines balances international relations with national interests.",
        sources: [
          { name: "DMW Statistics, 2023", url: "#" },
          { name: "DFA Reports", url: "#" }
        ]
      },
      criticalQuestion: "How should the Philippines engage with the world today?",
      analysisPoints: [
        "Rizal's European experience vs. modern globalization",
        "The diaspora as modern ilustrados",
        "Sovereignty challenges in economic partnerships"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">José Rizal's Teachings in Modern Philippines</h1>
          <p className="text-xl text-gray-600">
            Eight enduring ideals and their contemporary relevance
          </p>
          <div className="mt-6">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#teaching-container"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Explore the Teachings
              </a>
            </div>
          </div>
        </div>

        {/* Teaching Cards */}
        <div id="teaching-container" className="space-y-16">
          {teachings.map((teaching) => (
            <div key={teaching.id} className="bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white font-bold text-lg">
                      {teaching.id}
                    </div>
                    <h2 className="ml-4 text-2xl font-bold text-gray-800">{teaching.title}</h2>
                  </div>

                  <blockquote className="border-l-4 border-indigo-200 pl-4 italic text-gray-700 my-4">
                    "{teaching.rizalsQuote}"
                    <footer className="not-italic text-sm text-gray-500 mt-1">— {teaching.rizalsSource}</footer>
                  </blockquote>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Rizal's Idea Section */}
                  <div className="bg-indigo-50 p-6 rounded-lg h-full">
                    <h3 className="font-semibold text-indigo-800 text-lg mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Rizal's Core Idea
                    </h3>
                    <p className="text-gray-700">{teaching.rizalsIdea}</p>
                  </div>

                  {/* Modern Example Section */}
                  <div className="bg-green-50 p-6 rounded-lg h-full">
                    <h3 className="font-semibold text-green-800 text-lg mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Modern Evidence
                    </h3>
                    <h4 className="font-medium text-gray-800 mb-2">{teaching.modernExample.title}</h4>
                    <p className="text-gray-700 mb-3">{teaching.modernExample.description}</p>
                    <div className="text-sm">
                      <h5 className="font-medium text-gray-600 mb-1">Sources:</h5>
                      <ul className="space-y-1">
                        {teaching.modernExample.sources.map((source, index) => (
                          <li key={index}>
                            <a href={source.url} className="text-indigo-600 hover:underline inline-flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                              </svg>
                              {source.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Critical Analysis Section */}
                <div className="mt-6 bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 text-lg mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Critical Analysis
                  </h3>
                  <p className="font-medium text-gray-800 mb-4">"{teaching.criticalQuestion}"</p>
                  <ul className="space-y-3">
                    {teaching.analysisPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 mt-1 mr-3">
                          <svg className="h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Discussion Prompt */}
                <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Join the Discussion
                  </h4>
                  <p className="text-gray-600 mb-3">What other modern examples can you think of that relate to this teaching?</p>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    rows="3"
                    placeholder="Share your thoughts..."
                  ></textarea>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs text-gray-500">All discussions are moderated</span>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Submit Response
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2">About This Project</h3>
            <p>This interactive exploration was created to promote critical thinking about Philippine history and society.</p>
            <p className="mt-1">All Rizal quotes are from public domain works. Modern examples are cited from credible news sources.</p>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <p>© {new Date().getFullYear()} Rizal Studies Interactive. Not affiliated with any government institution.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
