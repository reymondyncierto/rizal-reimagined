import './App.css'
import Header from './components/Header.component'
import HeroSection from './components/HeroSection.component'
import Footer from './components/Footer.component'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
