import { useState } from 'react'

import './App.css'
import Header from './components/Header.component'
import HeroSection from './components/HeroSection.component'
import Footer from './components/Footer.component'
import TeachingDetail from './components/TeachingDetail'
import ThemeSelector from './components/ThemeSelector.component'

function App() {
  const [selectedTheme, setSelectedTheme] = useState(null)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <section id="theme-selector" className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {selectedTheme ? (
              <TeachingDetail
                themeId={selectedTheme}
                onBack={() => setSelectedTheme(null)}
              />
            ) : (
              <ThemeSelector onThemeSelect={setSelectedTheme} />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
