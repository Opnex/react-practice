function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-green-600 to-green-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">🇳🇬</span>
              <span className="text-sm font-semibold">Made in Nigeria</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Discover Authentic Nigerian Products
            </h1>
            
            <p className="text-lg md:text-xl text-green-100 mb-8 leading-relaxed">
              Shop the finest selection of Nigerian foods, fashion, and crafts. 
              Supporting local businesses, delivering excellence nationwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors">
                Shop Now
              </button>
              <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl md:text-4xl font-bold">500+</div>
                <div className="text-green-200 text-sm">Products</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold">10k+</div>
                <div className="text-green-200 text-sm">Customers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold">36</div>
                <div className="text-green-200 text-sm">States</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image Placeholder */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-6xl">
                🛒
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white text-gray-800 p-4 rounded-lg shadow-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <div className="font-bold">4.9/5</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-800 p-4 rounded-lg shadow-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚚</span>
                  <div>
                    <div className="font-bold">Free Delivery</div>
                    <div className="text-xs text-gray-600">Nationwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
