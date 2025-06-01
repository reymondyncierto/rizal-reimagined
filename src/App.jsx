import './App.css'
import Header from './components/Header.component'
import HeroSection from './components/HeroSection.component'
import Footer from './components/Footer.component'
import RizalsTeachings from './components/RizalsTeachings.component'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RizalsTeachings />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
