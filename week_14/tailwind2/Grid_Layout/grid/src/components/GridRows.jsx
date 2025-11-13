function GridRows() {
  return (
    <div>
        <h1>Grid Row</h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4 h-96">
            <div className="bg-blue-500 p-4 text-white">1</div>
            <div className="bg-green-500 p-4 text-white row-span-2">Spans 2 rows</div>
            <div className="bg-red-500 p-4 text-white">3</div>
            <div className="bg-purple-500 p-4 text-white">4</div>
            <div className="bg-yellow-500 p-4">5</div>
        </div>
    </div>
  );
}

export default GridRows;