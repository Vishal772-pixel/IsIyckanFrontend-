import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Features from './components/Features'
import Button from "./components/Button"
import ProductListing from './Pages/ProductListing'
import ProductDetails from './Pages/ProductDetails'
import ShoppingPage from './Pages/ShoppingPage'
import HeroSection from './components/HeroSection'

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <Features />
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
              {['ISO Certified', 'Award Winning', 'Eco-Friendly', 'Expert Support', '5-Star Rated'].map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/office-furniture" element={<ShoppingPage />} />
          <Route path="/hotel-furniture" element={<ShoppingPage />} />
          <Route path="/home-office" element={<ShoppingPage />} />
          <Route path="/pubs" element={<ShoppingPage />} />
          <Route path="/special-offers" element={<ShoppingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}