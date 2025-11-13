const BlogPostLayout = () => {
  const relatedPosts = [
    {
      title: "Nigerian Street Food Culture",
      date: "Oct 10, 2025",
      readTime: "10 min read",
      image: "🍢"
    },
    {
      title: "Traditional Nigerian Fabrics",
      date: "Oct 8, 2025",
      readTime: "7 min read",
      image: "👘"
    },
    {
      title: "Modern Nigerian Architecture",
      date: "MOct 12, 2025",
      readTime: "15 min read",
      image: "🏛️"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Image */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
          <div className="h-96 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
            <span className="text-white text-8xl">📖</span>
          </div>
        </div>

        {/* Main Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content - 2/3 width on desktop */}
          <main className="lg:w-2/3">
            <article className="bg-white rounded-2xl shadow-lg p-8">
              
              {/* Article Header */}
              <header className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  The Evolution of Nigerian Contemporary Art
                </h1>
                
                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">OV</span>
                    </div>
                    <span className="font-medium">Ololade Victoria</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Oct 13, 2025</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>10 min read</span>
                  </div>
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Nigerian contemporary art has undergone a remarkable transformation over the past few decades, 
                  blending traditional African aesthetics with modern global influences to create a unique and vibrant artistic landscape.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Early Pioneers</h2>
                <p className="mb-6 leading-relaxed">
                  The foundation of contemporary Nigerian art was laid by masters like Ben Enwonwu and Bruce Onobrakpeya, 
                  who successfully merged Western techniques with African themes and sensibilities.
                </p>

                <p className="mb-6 leading-relaxed">
                  Their work challenged colonial perspectives and established a distinct Nigerian artistic identity 
                  that would inspire generations of artists to come.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                  <p className="text-blue-800 font-medium italic">
                    "Contemporary Nigerian art is not just about aesthetics; it's a powerful medium for social commentary, 
                    cultural preservation, and national identity formation."
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The New Generation</h2>
                <p className="mb-6 leading-relaxed">
                  Today, artists like Peju Alatise, Victor Ehikhamenor, and Ndidi Dike are pushing boundaries 
                  and gaining international recognition for their innovative approaches.
                </p>

                <p className="mb-6 leading-relaxed">
                  Their work explores themes of globalization, gender equality, environmental concerns, 
                  and the complexities of modern African identity in a rapidly changing world.
                </p>
              </div>

              {/* Article Tags */}
              <footer className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {['Contemporary Art', 'Nigerian Culture', 'African Artists', 'Art History'].map((tag) => (
                    <span 
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </footer>
            </article>
          </main>

          {/* Sidebar - 1/3 width on desktop */}
          <aside className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Related Posts
              </h2>

              {/* Related Posts List */}
              <div className="space-y-6">
                {relatedPosts.map((post, index) => (
                  <article key={index} className="group cursor-pointer">
                    <div className="flex gap-4">
                      {/* Post Image */}
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-2xl group-hover:scale-105 transition-transform duration-300">
                        {post.image}
                      </div>
                      
                      {/* Post Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white">
                <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get the latest articles on Nigerian culture and art.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPostLayout;