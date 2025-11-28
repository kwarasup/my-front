import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F0] font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] bg-[#5D8C7B] overflow-hidden flex items-center">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/hero-bg.png"
            alt="Leaves Background"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        {/* Header / Navigation */}
        <header className="absolute top-0 left-0 right-0 z-20 p-6 flex justify-between items-center container mx-auto">
          <div className="text-[#E8DCC4] font-bold text-xl tracking-widest">RENNALE</div>
          <div className="flex gap-4">
            <a href="/login" className="px-6 py-2 text-[#E8DCC4] hover:text-white transition-colors font-medium">
              Login
            </a>
            <a href="/login" className="px-6 py-2 bg-[#E3C099] text-[#5D4037] rounded-full font-bold hover:bg-[#dcb080] transition-colors">
              Signup
            </a>
          </div>
        </header>

        <div className="container mx-auto px-6 z-10 relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight text-[#E8DCC4]">
              Rennale <br /> Renuelly
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-md leading-relaxed">
              Experience the natural renewal of your senses. Our organic approach brings the essence of nature directly to your lifestyle, creating harmony and balance.
            </p>
            <button className="mt-8 px-8 py-4 bg-[#E3C099] text-[#5D4037] font-bold rounded-full shadow-lg hover:bg-[#dcb080] transition-colors text-lg">
              Heses Roge
            </button>
          </div>

          {/* Right side decorative leaves (part of the bg image usually, but we can add a floating leaf if we want) */}
          <div className="hidden md:block relative h-full">
            {/* Placeholder for more specific leaf composition if needed */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#2F5246] py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              </div>
              <h3 className="text-xl font-semibold">Exelgaris</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Discover the pure essence of natural ingredients sourced responsibly.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-xl font-semibold">Narconmersi</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Sustainable practices that ensure a better future for our planet.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </div>
              <h3 className="text-xl font-semibold">Cleotews</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Innovative solutions for modern living, rooted in tradition.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <h3 className="text-xl font-semibold">Weohe sloasarcion</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Connecting you with the earth through mindful design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="bg-[#1a3c33] py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Row 1 */}
            {/* Card 1: Green */}
            <div className="bg-[#7FA075] rounded-3xl p-8 flex flex-col items-center justify-center text-center text-white aspect-square shadow-xl">
              <div className="mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Siare Seador</h3>
              <p className="text-xs opacity-80">Embrace the calm of the forest.</p>
            </div>

            {/* Card 2: Brown */}
            <div className="bg-[#6B4E3D] rounded-3xl p-8 flex flex-col items-center justify-center text-center text-white aspect-square shadow-xl">
              <div className="mb-4 bg-black/20 p-3 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Teavnt</h3>
              <p className="text-xs opacity-80">Rooted in strength and stability.</p>
            </div>

            {/* Card 3: Light Brown */}
            <div className="bg-[#A67C52] rounded-3xl p-8 flex flex-col items-center justify-center text-center text-white aspect-square shadow-xl">
              <div className="mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Vousehufres</h3>
              <p className="text-xs opacity-80">Natural elegance for every day.</p>
            </div>

            {/* Row 2 */}
            {/* Card 4: Image */}
            <div className="rounded-3xl overflow-hidden aspect-square shadow-xl relative">
              <Image
                src="/grid-1.png"
                alt="Forest Sunlight"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Card 5: Dark Brown */}
            <div className="bg-[#4A3728] rounded-3xl p-8 flex flex-col items-center justify-center text-center text-white aspect-square shadow-xl">
              <div className="mb-4 bg-white/10 p-3 rounded-full">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 3.5L18.5 20H5.5L12 5.5z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Bsoei Fias te</h3>
              <p className="text-xs opacity-80">Discover the hidden beauty.</p>
            </div>

            {/* Card 6: Beige */}
            <div className="bg-[#C6A88F] rounded-3xl p-8 flex flex-col items-center justify-center text-center text-[#4A3728] aspect-square shadow-xl">
              <div className="mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Blisstdare</h3>
              <p className="text-xs opacity-80">Simple, pure, and authentic.</p>
            </div>

          </div>
        </div>
      </section>

      <footer className="bg-[#152e27] text-center py-8 text-white/40 text-sm">
        <p>Pestres 1</p>
      </footer>
    </main>
  );
}
