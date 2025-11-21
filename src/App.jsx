import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Spline Mario Cover */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Spline 3D Cover */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Soft gradient and vignette overlays (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_180px_rgba(0,0,0,0.6)]" />

        {/* Poster Content */}
        <div className="relative z-10 h-full flex items-center justify-center p-6">
          <div className="max-w-5xl w-full">
            <div className="backdrop-blur-sm/0">
              <div className="text-center">
                <p className="uppercase tracking-[0.35em] text-red-300/80 text-xs sm:text-sm mb-3">Arcade Poster</p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                  <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-red-400 bg-clip-text text-transparent">Retro Runner</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-white/85">
                  Scratch Edition • Mario-inspired vibes • One epic dash through nostalgia
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs sm:text-sm">Pixel Art</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs sm:text-sm">Chiptune Beats</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs sm:text-sm">Speed & Skill</span>
                </div>
              </div>

              {/* Poster Footer Info */}
              <div className="mt-14 mx-auto w-full max-w-3xl rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <div className="text-white/80 text-sm">Presented by</div>
                    <div className="text-white font-semibold text-lg">Retro Labs</div>
                  </div>
                  <div className="h-10 w-px bg-white/10 hidden sm:block" />
                  <div className="text-center">
                    <div className="text-white/80 text-sm">Playtest</div>
                    <div className="text-white font-semibold text-lg">This Weekend</div>
                  </div>
                  <div className="h-10 w-px bg-white/10 hidden sm:block" />
                  <div className="text-center sm:text-right">
                    <div className="text-white/80 text-sm">Platform</div>
                    <div className="text-white font-semibold text-lg">Scratch</div>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-center text-xs text-white/60">Tip: Save this screen as an image to use it as your poster</p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="py-6 text-center text-white/50 text-sm">
        Built for your Retro Runner poster
      </footer>
    </div>
  );
}

export default App;
