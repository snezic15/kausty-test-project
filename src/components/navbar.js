import Link from "next/link"

/**
 * Navbar Component
 *
 * A simple navigation bar component for a Next.js application.
 * It displays a title/logo area and navigation links, using the
 * Next.js Link component for optimized client-side routing.
 * Styled using Tailwind CSS.
 */
const Navbar = ({ title = "Fallback", links = ["Home", "Files", "Temp"] }) => {
  return (
    // Navigation container
    // Uses flexbox to arrange items, adds padding, background color, and shadow
    <nav className="bg-white shadow-md py-4 px-6 md:px-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Site Title Area - using Next.js Link */}
        <div className="text-xl font-bold text-gray-800">
          <Link href="/" className="hover:text-blue-600">
            {title}
          </Link>
        </div>

        {/* Navigation Links - using Next.js Link */}
        {/* Uses flexbox for layout, adds spacing between links */}
        <div className="space-x-4 md:space-x-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={
                link.toLowerCase() == "home" ? "/" : `/${link.toLowerCase()}`
              }
              className="text-gray-600 hover:text-blue-600"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

// Export the component for use in other parts of the application
export default Navbar
