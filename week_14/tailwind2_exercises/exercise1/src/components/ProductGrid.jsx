const ProductGrid = () => {
  const products = [
    { name: "Jollof Rice", price: "₦1,500" },
    { name: "Ankara Fabric", price: "₦5,000" },
    { name: "Suya", price: "₦1,000" },
    { name: "Aso-Ebi", price: "₦15,000" },
    { name: "Palm Wine", price: "₦1,200" },
    { name: "Agbada", price: "₦25,000" },
    { name: "Chin Chin", price: "₦500" },
    { name: "Puff Puff", price: "₦300" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            Nigerian Marketplace
          </h1>
          <p className="text-amber-700 text-lg">
            Responsive Nigerian products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-amber-100"
            >
              {/* Product Image */}
              <div className="h-48 bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-6xl">🍛</span>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-orange-600 mb-4">
                  {product.price}
                </p>
                
                {/* Add to Cart Button */}
                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 active:scale-95">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;