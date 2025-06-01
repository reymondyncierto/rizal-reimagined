export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gray-50 md:pt-32 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-6 leading-tight">
              How do <span className="text-white font-bold bg-blue-700 px-3 py-1 rounded shadow-md tracking-wide">YOU</span> remember and see Rizal nowadays in the 21st century?
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              An educational resource documenting the multifaceted contributions of the Philippines' national hero and their relevance to modern Filipino society.
            </p>

            <div className="flex justify-center">
              <a
                href="#intangible-legacies"
                className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition text-center flex items-center gap-2"
              >
                <span role="img" aria-label="arrow">👉</span>
                <span>Explore Rizal’s Legacy</span>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col h-full">
             <figure className="flex flex-col flex-1 w-full max-w-full rounded-lg overflow-hidden">
               <img
                src="/rizal.jpg"
                alt="José Rizal Monument"
                className="w-full max-h-96 object-contain flex-1"
              />
              <figcaption className="text-xs text-gray-500 mt-2">
                Jose Rizal Museum: Cebu City. Facebook. (2022, September 9).{' '}
                <a
                  href="https://www.facebook.com/joserizalmuseum/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-700"
                >
                  https://www.facebook.com/joserizalmuseum/
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
