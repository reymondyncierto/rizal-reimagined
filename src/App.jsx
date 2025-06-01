import './App.css'
import Header from './components/Header.component'
import HeroSection from './components/HeroSection.component'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
      </main>
    </div>
  )
}

export default App
