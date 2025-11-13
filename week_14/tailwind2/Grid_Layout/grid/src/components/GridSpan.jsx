function GridSpan() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <h1>Grid Span</h1>
      {/* Span 2 columns */}
      <div className="col-span-2 bg-blue-500 p-4 text-white">Spans 2 columns</div>
      <div className="bg-green-500 p-4 text-white">1 column</div>
      
      {/* Span 3 columns (full width) */}
      <div className="col-span-3 bg-red-500 p-4 text-white">Spans 3 columns (full width)</div>
      
      <div className="bg-purple-500 p-4 text-white">1</div>
      <div className="bg-purple-500 p-4 text-white">2</div>
      <div className="bg-purple-500 p-4 text-white">3</div>
    </div>
  );
}

export default GridSpan;