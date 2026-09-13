import bannerImg from '../assets/banner-stack.png'

export default function Hero() {
  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Build Your Ideal{' '}
              <span className="text-brand-gradient">Development Stack</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#technologies"
                className="px-7 py-3.5 rounded-full text-white font-semibold bg-brand-gradient shadow text-sm"
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="px-7 py-3.5 rounded-full text-slate-700 font-semibold bg-white border border-slate-300 hover:bg-slate-50 text-sm"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img
              src={bannerImg}
              alt="DevStack Banner"
              className="w-full max-w-md lg:max-w-none object-contain drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
