const teamMembers = [
  {
    id: "01",
    name: "Adi",
    role: "Founder & Lead Strategist",
    image: "/team/adi.png",
  },
  {
    id: "02",
    name: "Shreyas",
    role: "Design & Branding",
    image: "/team/shreyas.png",
  },
  {
    id: "03",
    name: "Nayan",
    role: "Website Developer",
    image: "/team/nayan.png",
  },
  {
    id: "04",
    name: "Yadu",
    role: "Project Manager",
    image: "/team/yadu.png",
  },
];

export default function TeamMembers() {
  return (
    <section id="team" className="w-full py-14 md:py-24 bg-white text-black font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 w-full">
        
        {/* Header Section */}
        <div className="w-full text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black">
            Meet The Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {teamMembers.map((item) => (
            <div key={item.id} className="flex flex-col text-left group">
              {/* Image Container */}
              <div className="w-full aspect-square md:h-[380px] lg:h-[410px] rounded-3xl overflow-hidden mb-4 bg-gray-100 shadow-md border border-gray-100 group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight mb-1.5">
                {item.name}
              </h3>
              <p className="text-base md:text-lg text-gray-500 font-medium">
                {item.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
