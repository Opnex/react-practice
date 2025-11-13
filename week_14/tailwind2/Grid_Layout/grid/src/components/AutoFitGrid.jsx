function AutoFitGrid() {
  return (
    <div>
        <h1>Auto Fit Grid</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-4">
          <div className="bg-blue-500 p-8 text-white">Card 1</div>
          <div className="bg-green-500 p-8 text-white">Card 2</div>
          <div className="bg-red-500 p-8 text-white">Card 3</div>
          <div className="bg-purple-500 p-8 text-white">Card 4</div>
          <div className="bg-yellow-500 p-8">Card 5</div>
          <div className="bg-pink-500 p-8 text-white">Card 6</div>
        </div>
    </div>
  );
}

export default AutoFitGrid;