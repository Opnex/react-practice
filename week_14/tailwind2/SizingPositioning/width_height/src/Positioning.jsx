function Positioning() {
  return (
    <div className="p-4 space-y-8">
      {/* Relative positioning */}
      <div className="relative w-64 h-32 bg-gray-200">
        <div className="absolute top-0 right-0 bg-red-500 p-2 text-white">
          Top Right
        </div>
        <div className="absolute bottom-0 left-0 bg-blue-500 p-2 text-white">
          Bottom Left
        </div>
      </div>
      
      {/* Centered with absolute */}
      <div className="relative w-64 h-32 bg-gray-200">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 p-4 text-white">
          Centered
        </div>
      </div>
      
      {/* Sticky positioning */}
      <div className="h-96 overflow-y-scroll bg-gray-100 p-4">
        <div className="sticky top-0 bg-white p-4 shadow mb-4">
          Sticky Header
        </div>
        <div className="space-y-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="bg-white p-4 shadow">
              Content {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Positioning