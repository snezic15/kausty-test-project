import Navbar from "@/components/navbar"
import AnimatedGif from "@/components/animation"
import TrollFace from "@/assets/trollface.jpg"

export default function Home() {
  return (
    <div>
      <Navbar title="HelpHome!" links={["Home", "Files"]} />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans p-4">
        {/* Content container */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl mx-auto">
          {/* Grid layout with 2 columns and 2 rows */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="flex items-center justify-center">
              <AnimatedGif src="https://c.tenor.com/b_xkx1S5qxIAAAAd/tenor.gif" />
            </div>
            <div className="flex items-center justify-center">
              <AnimatedGif src={TrollFace.src} />
            </div>
            <div className="flex items-center justify-center">
              <AnimatedGif src={TrollFace.src} />
            </div>
            <div className="flex items-center justify-center">
              <AnimatedGif src="https://c.tenor.com/b_xkx1S5qxIAAAAd/tenor.gif" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
