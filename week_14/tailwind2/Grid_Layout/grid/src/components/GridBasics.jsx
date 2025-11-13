function GridBasics() {
  return (
    <div className="p-4 space-y-8">
      <h1>Grid Basics</h1>
      {/* 2 columns */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-500 p-4 text-white">1</div>
        <div className="bg-blue-500 p-4 text-white">2</div>
        <div className="bg-blue-500 p-4 text-white">3</div>
        <div className="bg-blue-500 p-4 text-white">4</div>
      </div>
      
      {/* 3 columns */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-500 p-4 text-white">1</div>
        <div className="bg-green-500 p-4 text-white">2</div>
        <div className="bg-green-500 p-4 text-white">3</div>
        <div className="bg-green-500 p-4 text-white">4</div>
        <div className="bg-green-500 p-4 text-white">5</div>
        <div className="bg-green-500 p-4 text-white">6</div>
      </div>
      
      {/* 4 columns */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-red-500 p-4 text-white">1</div>
        <div className="bg-red-500 p-4 text-white">2</div>
        <div className="bg-red-500 p-4 text-white">3</div>
        <div className="bg-red-500 p-4 text-white">4</div>
      </div>
    </div>
  );
}

export default GridBasics;