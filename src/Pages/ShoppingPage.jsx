import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

export default function ShoppingPage() {
  const { category } = useParams()

  // Sample data - in a real app, this would come from an API or database
  const items = [
    {
      id: 1,
      name: 'Modern Wooden Armchair',
      price: 299.99,
      rating: 4.5,
      image: '/placeholder.svg?height=300&width=400&text=Wooden+Armchair',
      category: 'chairs',
      description: 'Comfortable wooden armchair with premium finish',
      availability: 'In Stock',
      dimensions: '26"W x 32"D x 40"H'
    },
    {
      id: 2,
      name: 'Executive Office Chair',
      price: 499.99,
      rating: 4.8,
      image: '/placeholder.svg?height=300&width=400&text=Office+Chair',
      category: 'chairs',
      description: 'Ergonomic office chair with lumbar support',
      availability: 'In Stock',
      dimensions: '28"W x 30"D x 45"H'
    },
    {
      id: 3,
      name: 'Glass Conference Table',
      price: 899.99,
      rating: 4.6,
      image: '/placeholder.svg?height=300&width=400&text=Conference+Table',
      category: 'tables',
      description: 'Modern glass conference table for 8 people',
      availability: '2 weeks delivery',
      dimensions: '96"W x 48"D x 30"H'
    }
  ]

  // Filter items based on category if provided
  const filteredItems = category 
    ? items.filter(item => item.category === category)
    : items

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : 'All Products'}
          </h1>
          <p className="text-gray-600">
            Discover our collection of premium furniture designed for your space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-600">({item.rating})</span>
                  </div>
                  <span className="ml-auto text-2xl font-bold">${item.price}</span>
                </div>
                <div className="mb-4">
                  <p className="text-gray-600">{item.description}</p>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Availability:</span> {item.availability}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Dimensions:</span> {item.dimensions}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button variant="primary" className="w-full">
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="w-full">
                    Request Quote
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

