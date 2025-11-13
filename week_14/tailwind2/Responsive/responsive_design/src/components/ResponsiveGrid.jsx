function ResponsiveGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div className="bg-blue-500 p-8 text-white">1</div>
      <div className="bg-blue-500 p-8 text-white">2</div>
      <div className="bg-blue-500 p-8 text-white">3</div>
      <div className="bg-blue-500 p-8 text-white">4</div>
      <div className="bg-blue-500 p-8 text-white">5</div>
      <div className="bg-blue-500 p-8 text-white">6</div>
      <div className="bg-blue-500 p-8 text-white">7</div>
      <div className="bg-blue-500 p-8 text-white">8</div>
    </div>
  );
}

export default ResponsiveGrid;