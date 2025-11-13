function AlignItems() {
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-center text-2xl">Align Item Cross Axis Examples</h1>
      {/* Stretch (default) */}
      <div className="flex items-stretch gap-2 bg-gray-100 p-4 h-32">
        <div className="bg-blue-500 p-4">Stretch</div>
        <div className="bg-blue-500 p-4">Stretch</div>
      </div>
      
      {/* Start */}
      <div className="flex items-start gap-2 bg-gray-100 p-4 h-32">
        <div className="bg-green-500 p-4">Start</div>
        <div className="bg-green-500 p-4">Start</div>
      </div>
      
      {/* Center */}
      <div className="flex items-center gap-2 bg-gray-100 p-4 h-32">
        <div className="bg-red-500 p-4">Center</div>
        <div className="bg-red-500 p-4">Center</div>
      </div>
      
      {/* End */}
      <div className="flex items-end gap-2 bg-gray-100 p-4 h-32">
        <div className="bg-purple-500 p-4">End</div>
        <div className="bg-purple-500 p-4">End</div>
      </div>
    </div>
  );
}

export default AlignItems;