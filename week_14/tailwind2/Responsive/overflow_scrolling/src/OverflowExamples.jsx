function OverflowExamples() {
  return (
    <div className="p-4 space-y-8">
      {/* Overflow hidden */}
      <div className="overflow-hidden bg-gray-100 p-4 h-32">
        <p className="text-gray-700">
          This is a long text that will be cut off because overflow is hidden. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      
      {/* Overflow scroll */}
      <div className="overflow-scroll bg-gray-100 p-4 h-32">
        <p className="text-gray-700">
          This text is scrollable. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>
      
      {/* Overflow auto (only shows scrollbar when needed) */}
      <div className="overflow-auto bg-gray-100 p-4 h-32">
        <p className="text-gray-700">
          Scrollbar appears only when content overflows. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

export default OverflowExamples;