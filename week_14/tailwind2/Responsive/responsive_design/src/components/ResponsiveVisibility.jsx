function ResponsiveVisibility() {
  return (
    <div className="p-4">
      {/* Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block bg-blue-500 p-4 text-white mb-4">
        Only visible on large screens
      </div>
      
      {/* Visible on mobile, hidden on desktop */}
      <div className="block lg:hidden bg-green-500 p-4 text-white mb-4">
        Only visible on mobile
      </div>
      
      {/* Different content for different sizes */}
      <div className="bg-red-500 p-4 text-white">
        <span className="block sm:hidden">📱 Mobile View</span>
        <span className="hidden sm:block md:hidden">📱 Tablet View</span>
        <span className="hidden md:block">💻 Desktop View</span>
      </div>
    </div>
  );
}

export default ResponsiveVisibility