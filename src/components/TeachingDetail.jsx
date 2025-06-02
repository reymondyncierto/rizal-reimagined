import { useParams, useNavigate } from 'react-router-dom';
import { teachings } from '../data/Teachings.data';

export default function TeachingDetail() {
  const { themeId } = useParams();
  const navigate = useNavigate();

  const teaching = teachings.find(t => t.id === parseInt(themeId));

  if (!teaching) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600 mb-4">Theme not found</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Back to all themes
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center text-indigo-600 hover:text-indigo-800"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all themes
        </button>


        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
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

              <div className="bg-indigo-50 p-6 rounded-lg h-full">
                <h3 className="font-semibold text-indigo-800 text-lg mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Rizal's Core Idea
                </h3>
                <p className="text-gray-700">{teaching.rizalsIdea}</p>
              </div>


              <div className="bg-green-50 p-6 rounded-lg h-full">
                <h3 className="font-semibold text-green-800 text-lg mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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


            <div className="mt-6 bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-800 text-lg mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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


            <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </div>
    </div>
  );
}
