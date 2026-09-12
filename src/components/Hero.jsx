import bannerImg from '../assets/banner-stack.png'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-white via-slate-50/50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Description & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 text-orange-700 text-xs font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>Assemble Modern Developer Stacks</span>
            </div>

            {/* Two-tone Heading: Plain text + Gradient text */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Build your ideal workflow with{' '}
              <span className="text-brand-gradient inline-block">
                DevStack Builder
              </span>
            </h1>

            {/* Meaningful Description Text */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Explore industry-proven web technologies, evaluate real-world framework ratings, and curate your personalized tech stack for your next breakthrough production application.
            </p>

            {/* CTA Buttons: Gradient + Outlined */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#technologies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold bg-brand-gradient shadow-md shadow-pink-500/15 hover:shadow-lg hover:shadow-pink-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wide cursor-pointer"
              >
                <span>Explore Technologies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full text-slate-700 font-semibold bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all text-sm tracking-wide cursor-pointer shadow-xs"
              >
                Learn More
              </a>
            </div>

            {/* Quick Metrics / Social Proof */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-bold text-slate-900">15+</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Top Tech Tools</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">4.8★</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Average Rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">100%</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Free & Open</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Banner Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-md lg:max-w-none w-full">
              {/* Soft decorative glow behind the image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-400/20 via-pink-400/20 to-purple-400/20 rounded-3xl blur-2xl -z-10 transform rotate-1"></div>
              
              <img
                src={bannerImg}
                alt="DevStack Frameworks & Technologies Illustration"
                className="w-full h-auto object-contain rounded-2xl drop-shadow-xl hover:scale-102 transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
