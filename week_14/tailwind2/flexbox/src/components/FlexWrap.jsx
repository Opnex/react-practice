function FlexWrap() {
  return (
    <div className="space-y-4 p-4">
      <h1>Flex Wrap Examples</h1>
      {/* No wrap (default) - items overflow */}
      <div className="flex gap-2 bg-gray-100 p-4">
        <div className="bg-blue-500 p-4 w-40">1</div>
        <div className="bg-blue-500 p-4 w-40">2</div>
        <div className="bg-blue-500 p-4 w-40">3</div>
        <div className="bg-blue-500 p-4 w-40">4</div>
        <div className="bg-blue-500 p-4 w-40">5</div>
      </div>
      
      {/* Wrap - items go to next line */}
      <div className="flex flex-wrap gap-2 bg-gray-100 p-4">
        <div className="bg-green-500 p-4 w-40">1</div>
        <div className="bg-green-500 p-4 w-40">2</div>
        <div className="bg-green-500 p-4 w-40">3</div>
        <div className="bg-green-500 p-4 w-40">4</div>
        <div className="bg-green-500 p-4 w-40">5</div>
      </div>
    </div>
  );
}

export default FlexWrap