function ProductGrid() {
  const products = [
    { id: 1, name: 'Jollof Rice', price: '1,500', image: '🍚', category: 'Food' },
    { id: 2, name: 'Ankara Fabric', price: '5,000', image: '👗', category: 'Fashion' },
    { id: 3, name: 'Suya Spice', price: '800', image: '🌶️', category: 'Food' },
    { id: 4, name: 'Aso-Ebi', price: '15,000', image: '🥻', category: 'Fashion' },
    { id: 5, name: 'Palm Wine', price: '1,200', image: '🍶', category: 'Drinks' },
    { id: 6, name: 'Agbada', price: '25,000', image: '🎩', category: 'Fashion' },
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Nigerian Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-6xl">
                {product.image}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                
                <p className="text-2xl font-bold text-green-600 mb-4">
                  ₦{product.price}
                </p>
                
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;