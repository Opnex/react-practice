function ResponsiveExample() {
  return (
    <div className="p-4">
      {/* Mobile: text-base, Tablet: text-lg, Desktop: text-2xl */}
      <h1 className="text-base md:text-lg lg:text-2xl">
        Responsive Text Size
      </h1>
      
      {/* Mobile: padding 4, Desktop: padding 8 */}
      <div className="p-4 lg:p-8 bg-blue-500">
        Responsive Padding
      </div>
      
      {/* Mobile: block, Desktop: flex */}
      <div className="block lg:flex gap-4 mt-4">
        <div className="bg-green-500 p-4">Item 1</div>
        <div className="bg-green-500 p-4">Item 2</div>
      </div>
    </div>
  );
}

export default ResponsiveExample