function Sizing() {
  return (
    <div className="p-4 space-y-4">
      {/* Fixed sizes */}
      <div className="w-32 h-32 bg-blue-500"></div>
      <div className="w-64 h-24 bg-green-500"></div>
      
      {/* Percentage/fractional */}
      <div className="w-1/2 h-20 bg-red-500"></div>
      <div className="w-3/4 h-20 bg-purple-500"></div>
      <div className="w-full h-20 bg-yellow-500"></div>
      
      {/* Viewport sizes */}
      <div className="w-screen h-20 bg-pink-500"></div>
      
      {/* Min/Max width */}
      <div className="min-w-[200px] max-w-md h-20 bg-indigo-500"></div>
    </div>
  );
}

export default Sizing;