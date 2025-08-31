import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  ChefHat, 
  Gift, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Search,
  User
} from 'lucide-react'

function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [cartItems, setCartItems] = useState(0)

  const categories = [
    { id: 'all', name: 'All Cakes', count: 24 },
    { id: 'wedding', name: 'Wedding', count: 8 },
    { id: 'birthday', name: 'Birthday', count: 12 },
    { id: 'custom', name: 'Custom', count: 4 }
  ]

  const featuredCakes = [
    {
      id: 1,
      name: 'Royal Wedding Cake',
      price: 299,
      rating: 4.9,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
      category: 'wedding',
      description: 'Elegant 3-tier wedding cake with vanilla sponge and buttercream'
    },
    {
      id: 2,
      name: 'Chocolate Birthday Delight',
      price: 89,
      rating: 4.8,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400',
      category: 'birthday',
      description: 'Rich chocolate cake with fresh berries and cream frosting'
    },
    {
      id: 3,
      name: 'Custom Unicorn Dream',
      price: 159,
      rating: 5.0,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400',
      category: 'custom',
      description: 'Magical unicorn-themed cake perfect for special celebrations'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cake-pink/10 via-cream-white to-berry-purple/10">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-cake-pink/20 sticky top-0 z-50 animate-sugar-sparkle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cake-pink to-berry-purple rounded-full flex items-center justify-center animate-cake-float">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-cake-pink to-berry-purple bg-clip-text text-transparent font-sweet">
                  Zereth Cake Hub
                </h1>
                <p className="text-xs text-chocolate-brown">Premium Artisan Cakes</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search for cakes..."
                  className="w-full pl-10 pr-4 py-2 border border-cake-pink/30 rounded-full focus:outline-none focus:ring-2 focus:ring-cake-pink focus:border-transparent animate-sugar-sparkle"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-chocolate-brown hover:text-cake-pink transition-colors animate-sweet-bounce">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 text-chocolate-brown hover:text-cake-pink transition-colors animate-sweet-bounce">
                <User className="w-5 h-5" />
              </button>
              <button className="relative p-2 text-gray-600 hover:text-pink-600 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50">
          <div className="w-full h-full bg-pink-50 opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="inline-flex items-center px-4 py-2 bg-pink-100 border border-pink-200 rounded-full text-pink-600 text-sm font-medium mb-6">
                <Gift className="w-4 h-4 mr-2" />
                Artisan Cake Boutique
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Sweet Dreams
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"> Made Real</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Handcrafted cakes made with love, premium ingredients, and artistic flair. 
                From elegant weddings to joyful birthdays, we create memories one slice at a time.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                  Order Custom Cake
                </button>
                <button className="px-8 py-4 border-2 border-pink-500 text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition-all">
                  View Gallery
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.9★</div>
                  <div className="text-gray-600 text-sm">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24h</div>
                  <div className="text-gray-600 text-sm">Fresh Daily</div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual - Cake Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main Cake Display */}
              <div className="relative bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 shadow-2xl overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20"></div>
                
                {/* Cake Illustration */}
                <div className="relative z-10 flex justify-center">
                  <div className="relative">
                    {/* Cake Base */}
                    <div className="w-48 h-32 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-full relative">
                      {/* Frosting */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-52 h-8 bg-white rounded-full shadow-lg"></div>
                      {/* Cherry */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
                      {/* Decorative dots */}
                      <div className="absolute top-4 left-8 w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="absolute top-8 right-12 w-2 h-2 bg-purple-400 rounded-full"></div>
                      <div className="absolute top-12 left-16 w-2 h-2 bg-pink-500 rounded-full"></div>
                    </div>
                    {/* Cake Stand */}
                    <div className="w-56 h-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full -mt-2"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-3 shadow-lg"
              >
                <Heart className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-3 shadow-lg"
              >
                <Star className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Cake Categories</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated collection of artisan cakes, each crafted with premium ingredients and artistic excellence.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-pink-300 hover:text-pink-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Featured Cakes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCakes.map((cake, index) => (
              <motion.div
                key={cake.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                {/* Cake Image */}
                <div className="relative h-48 bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                  {/* Placeholder for cake image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl">🎂</div>
                  </div>
                </div>

                {/* Cake Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-pink-100 text-pink-600 text-xs font-medium rounded-full">
                      {categories.find(c => c.id === cake.category)?.name}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{cake.rating}</span>
                      <span className="text-sm text-gray-400">({cake.reviews})</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{cake.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{cake.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">${cake.price}</div>
                    <button 
                      onClick={() => setCartItems(cartItems + 1)}
                      className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zereth Cake Hub?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional quality and unforgettable experiences with every cake we create.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ChefHat,
                title: 'Master Bakers',
                description: 'Our expert bakers bring years of experience and passion to every creation.'
              },
              {
                icon: Clock,
                title: 'Fresh Daily',
                description: 'All cakes are baked fresh daily using the finest premium ingredients.'
              },
              {
                icon: Gift,
                title: 'Custom Designs',
                description: 'Personalized cakes tailored to your special occasions and preferences.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Zereth Cake Hub</h3>
                  <p className="text-sm text-gray-400">Premium Artisan Cakes</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Creating sweet memories with handcrafted cakes made from the finest ingredients.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Cakes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Orders</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Wedding Cakes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Birthday Cakes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Corporate Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Delivery</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span className="text-gray-400">123 Sweet Street, Cake City</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-pink-400" />
                  <span className="text-gray-400">+1 (555) 123-CAKE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-pink-400" />
                  <span className="text-gray-400">hello@zerethcakes.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Zereth Cake Hub. All rights reserved. | Built with &hearts; for sweet moments
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
