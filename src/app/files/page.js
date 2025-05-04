import Navbar from "@/components/navbar"

export default function Home() {
  return (
    // Main container div acting like the HTML body styling
    // Uses Flexbox to center content vertically and horizontally within the viewport
    // Sets a minimum height of the full viewport height and a light gray background
    <div>
      <Navbar title="FilesHome!" links={["Home", "Help"]} />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans">
        {/* Content container */}
        {/* Centers the text, adds padding, rounds corners, applies a background color, and adds a shadow */}
        {/* Sets a max-width, ensures it takes full width on smaller screens, and adds horizontal margin */}
        <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md w-full mx-4">
          {/* Main Heading */}
          {/* Applies text size, font weight, color, and bottom margin */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to the Basic Next.js Page!
          </h1>

          {/* Paragraph Text */}
          {/* Applies text color */}
          <p className="text-gray-600">
            This is a simple Next.js page component structure. You can modify
            and build upon this foundation.
          </p>
        </div>
      </div>
    </div>
  )
}
