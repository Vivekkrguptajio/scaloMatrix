import { FaShopify } from 'react-icons/fa'

export default function BrandStatement() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-28 lg:py-36 font-sans">

      {/* ── Decorative Arc Shapes ── */}
      {/* Top-right large arc */}
      <div
        className="absolute -top-[220px] -right-[180px] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full pointer-events-none"
        style={{
          border: '80px solid rgba(253, 88, 0, 0.07)',
        }}
      />
      {/* Bottom-left large arc */}
      <div
        className="absolute -bottom-[260px] -left-[200px] w-[550px] h-[550px] md:w-[750px] md:h-[750px] rounded-full pointer-events-none"
        style={{
          border: '90px solid rgba(253, 88, 0, 0.06)',
        }}
      />
      {/* Mid-right small accent */}
      <div
        className="hidden md:block absolute top-[55%] -right-[60px] w-[250px] h-[250px] rounded-full pointer-events-none"
        style={{
          border: '40px solid rgba(253, 88, 0, 0.04)',
        }}
      />
      {/* Subtle radial glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-[#FD5800]/[0.03] blur-[120px] pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[900px] mx-auto flex flex-col items-center text-center px-5 sm:px-8">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FD5800]/10 border border-[#FD5800]/25 text-[#FD5800] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full mb-8 md:mb-10">
          <FaShopify className="w-4 h-4" />
          <span>We Scale Shopify Brands</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[56px] font-black leading-[1.15] tracking-tight text-black mb-6 md:mb-8">
          A Shopify-focused{' '}
          <span className="text-[#FD5800]">conversion rate optimization</span>{' '}
          and brand-building Agency.
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-[680px] mb-8 md:mb-12">
          We Help D2C Brands On Shopify Scale From &#8377;0 To &#8377;1 Cr+ Through High-Converting Landing Pages, Custom Themes, And Data-Driven CRO Strategies.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="group relative inline-flex items-center gap-3 bg-[#FD5800] hover:bg-[#ff6a1a] text-white font-bold text-sm sm:text-base px-8 py-3.5 sm:px-10 sm:py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(253,88,0,0.35)] hover:scale-105"
        >
          <span>Let's Scale Your Store</span>
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        {/* Partner Badge */}
        <div className="flex items-center justify-center mt-12 md:mt-16">
          <div className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <FaShopify className="w-7 h-7 text-[#FD5800]" />
            <div className="flex flex-col leading-none">
              <span className="text-gray-400 text-[10px] font-medium tracking-wide">Shopify</span>
              <span className="text-black text-sm font-bold">Partner</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
