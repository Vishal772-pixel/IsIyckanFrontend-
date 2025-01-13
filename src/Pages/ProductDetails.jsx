import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ChevronRight } from 'lucide-react'
import Button from '../components/Button'

export default function ProductDetails() {
  const [selectedTab, setSelectedTab] = useState('details')
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState('white')

  const colors = [
    { name: 'white', class: 'bg-gray-100' },
    { name: 'beige', class: 'bg-[#E5D3B3]' },
    { name: 'gray', class: 'bg-gray-600' }
  ]

  const relatedProducts = [
    {
      id: 1,
      name: 'Modern Armchair',
      price: '499.00 SEK',
     image: '/assets/ModernwoodenChair.png', // Fixed image path
    },
    {
      id: 2,
      name: 'Coffee Table',
      price: '299.00 SEK',
      image: '/assets/ModernwoodenChair.png', // Fixed image path
    },
    {
      id: 3,
      name: 'Floor Lamp',
      price: '199.00 SEK',
     image: '/assets/ModernwoodenChair.png', // Fixed image path
    },
    {
      id: 4,
      name: 'Mini Rolling Chair',
      price: '89.00 SEK',
     image: '/assets/ModernwoodenChair.png', // Fixed image path
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/living-room" className="hover:text-gray-900">Living Room</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">Modern Workspace Desk</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600&text=Modern+Workspace+Desk"
                alt="Modern Workspace Desk"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <button
                  key={i}
                  className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden"
                >
                  <img
                    src="/placeholder.svg?height=100&width=100&text=Thumbnail"
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">Modern Workspace Desk</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
                />
              ))}
              <span className="ml-2 text-gray-600">(128 reviews)</span>
            </div>

            {/* Price */}
            <div className="text-2xl font-bold mb-6">1,299.00 SEK</div>

            {/* Description */}
            <p className="text-gray-600 mb-6">
              Experience the perfect blend of modern design and functionality. Modern Workspace Desk 
              is crafted with premium materials and designed for both style and functionality.
            </p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex space-x-3">
                {colors.map(color => (
                  <button
                    key={color.name}
                    className={`w-8 h-8 rounded-full ${color.class} ${
                      selectedColor === color.name ? 'ring-2 ring-offset-2 ring-red-600' : ''
                    }`}
                    onClick={() => setSelectedColor(color.name)}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mb-8">
              <Button variant="primary" className="flex-1">
                Add to Cart
              </Button>
              <Button variant="outline" className="flex-1">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {['details', 'specifications', 'pricing', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    selectedTab === tab
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {selectedTab === 'details' && (
              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold mb-4">Product Description</h3>
                <p className="mb-4">
                  Our Modern Comfort Sofa combines contemporary design with exceptional comfort. 
                  The premium upholstery is both durable and soft to the touch, while the solid 
                  frame ensures lasting stability.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Premium quality fabric upholstery</li>
                  <li>High-density foam cushioning</li>
                  <li>Solid wood frame construction</li>
                  <li>Removable seat cushions</li>
                  <li>Easy maintenance and cleaning</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

