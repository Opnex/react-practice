function FlexGrowShrink() {
  return (
    <div className="space-y-4 p-4">
      <h1>Flex Grow and Shrink Examples</h1>
      {/* Flex grow */}
      <div className="flex gap-2 bg-gray-100 p-4">
        <div className="bg-blue-500 p-4">Normal</div>
        <div className="bg-green-500 p-4 flex-grow">Grows to fill space</div>
        <div className="bg-blue-500 p-4">Normal</div>
      </div>
      
      {/* Multiple grow items */}
      <div className="flex gap-2 bg-gray-100 p-4">
        <div className="bg-red-500 p-4 flex-1">Flex 1</div>
        <div className="bg-green-500 p-4 flex-1">Flex 1</div>
        <div className="bg-blue-500 p-4 flex-1">Flex 1</div>
      </div>
      
      {/* Different flex values */}
      <div className="flex gap-2 bg-gray-100 p-4">
        <div className="bg-red-500 p-4 flex-1">1x</div>
        <div className="bg-green-500 p-4 flex-2">2x (twice as wide)</div>
        <div className="bg-blue-500 p-4 flex-1">1x</div>
      </div>
    </div>
  );
}

export default FlexGrowShrink;