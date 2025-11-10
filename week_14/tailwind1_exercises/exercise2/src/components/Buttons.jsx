function Buttons() {
    return (
        <>
        <div class="space-x-2 space-y-2 min-h-screen flex items-center justify-center">

            {/* Primary Button */}
            <button class="bg-green-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600 transition">
                Primary
            </button>

            {/* Secondary Button */}
            <button class="bg-white text-green-500 border border-green-500 font-semibold px-4 py-2 rounded hover:bg-green-50 transition">
                Secondary
            </button>

            {/* Danger Button */}
            <button class="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 transition">
                Danger
            </button>

            {/* Success Button */}
            <button class="bg-green-400 text-white font-semibold px-4 py-2 rounded hover:bg-green-500 transition">
                Success
            </button>

            {/* Large Button */}
            <button class="bg-blue-500 text-white font-semibold px-6 py-3 rounded hover:bg-blue-600 transition">
                Large
            </button>

            {/* Small Button */}
            <button class="bg-blue-500 text-white font-semibold px-2 py-1 rounded text-sm hover:bg-blue-600 transition">
                Small
            </button>

        </div>
    </>
    );
}

export default Buttons;