import { Check } from 'lucide-react';
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
      <section className="px-6 py-16 md:py-20 md:px-12 lg:px-20 bg-gradient-to-br from-[#1B4FCC] to-[#0D3BA8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-white max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight text-center">
              Be among the <span className="font-bold">FIRST to TEST</span> our platform before it goes live to the public.
            </h1>

            <p className="text-lg md:text-xl text-white text-opacity-95 mb-8 text-center">
              As an early access member, you will be the first to experience:
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <Check className="w-7 h-7 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg md:text-xl"><strong>Instant Property Matching:</strong> Chat directly with Propa AI, our intelligent WhatsApp concierge, to find properties that fit your exact needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-7 h-7 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg md:text-xl"><strong>Verified Listings Only:</strong> Discover active and upcoming projects from credible developers with zero upfront costs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Check className="w-7 h-7 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg md:text-xl"><strong>A Seamless Experience:</strong> A digital real estate ecosystem designed to eliminate stress, friction, and uncertainty from property transactions.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl md:text-3xl font-semibold mb-3">Coming Soon!</p>
              <p className="text-lg md:text-xl">We are putting the final touches on the platform. Secure your spot in line today and join our exclusive testing group.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 md:px-12 lg:px-20 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; 2026 PropaBridge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}