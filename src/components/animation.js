/**
 * AnimatedGif Component
 *
 * Displays an animated GIF from a given URL.
 *
 * @param {object} props - The component props.
 * @param {string} props.src - The URL of the animated GIF. Required.
 * @param {string} [props.alt='Animated GIF'] - Optional alt text for the image.
 * @param {string} [props.className] - Optional additional CSS classes for styling.
 */
const AnimatedGif = ({ src, alt = "Animated GIF", className = "" }) => {
  // Basic validation: Check if the src prop is provided
  if (!src) {
    // Optionally render nothing, a placeholder, or throw an error
    console.error("AnimatedGif component requires a 'src' prop.")
    return <div className="text-red-500">Error: GIF URL (src) is missing.</div> // Simple error message
  }

  return (
    // Use a standard img tag to display the GIF.
    // The browser handles the animation automatically.
    // We combine any passed className props with default styling.
    <img
      src={src}
      alt={alt}
      // Example default styling (optional): makes the image a block element
      // and responsive within its container. Add more Tailwind classes via the `className` prop as needed.
      className={`block max-w-full h-auto ${className}`}
      // It's good practice to include width and height if known,
      // but for animated GIFs from external URLs, dimensions might be unknown.
      // The browser will determine the size.
      // width={...} // Optional: Add if dimensions are known
      // height={...} // Optional: Add if dimensions are known
    />
  )
}

// Export the component for use in other parts of the application
export default AnimatedGif
