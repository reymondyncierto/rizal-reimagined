import { Routes, Route } from 'react-router-dom';

import './App.css'
import Header from './components/Header.component'
import HeroSection from './components/HeroSection.component'
import Footer from './components/Footer.component'
import TeachingDetail from './components/TeachingDetail'
import ThemeSelector from './components/ThemeSelector.component'

function App() {

  return (
    <div id="home" className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <section id="theme-selector" className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<ThemeSelector />} />
              <Route path="/teaching/:themeId" element={<TeachingDetail />} />
            </Routes>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
