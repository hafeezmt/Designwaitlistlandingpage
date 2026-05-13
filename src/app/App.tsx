import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-6 md:px-12 lg:px-20 border-b border-gray-100 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <ImageWithFallback
            src="/src/imports/image.png"
            alt="PropaBridge"
            className="h-10 md:h-12"
          />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#1B4FCC] text-white px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-[#1540A3] transition-all shadow-md hover:shadow-lg text-sm md:text-base"
          >
            Join the Waitlist Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 md:px-12 lg:px-20 bg-gradient-to-br from-[#1B4FCC] to-[#0D3BA8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-white max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight font-bold">
              Be first to get access to verified locations
            </h1>

            <p className="text-2xl md:text-3xl font-semibold mb-12 text-white text-opacity-90">
              Abuja · Kaduna · Minna
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-[#1B4FCC] px-8 py-4 md:px-12 md:py-4 rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-base md:text-lg font-semibold"
            >
              Join Our Waitlist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
