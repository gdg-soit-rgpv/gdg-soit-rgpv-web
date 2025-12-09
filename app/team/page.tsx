"use client"

import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"

const team = [
  {
    id: "pramanya-rajput",
    name: "Pramanya Rajput",
    role: "Community Lead",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop",
    bio: "Leading GDG SOIT RGPV with vision, creativity, and determination — inspiring the community through innovation, collaboration, and leadership.",
    department: "Lead",
  },
  {
    id: "alex-chen",
    name: "Alex Chen",
    role: "Community Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    bio: "Passionate about building communities and empowering developers through open source.",
    department: "Tech",
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    bio: "Expert in cloud technologies and modern development practices. Love to hack on weekends.",
    department: "Tech",
  },
  {
    id: "maria-garcia",
    name: "Maria Garcia",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    bio: "Building scalable web applications and mentoring students in React and Node.js.",
    department: "Tech",
  },
  {
    id: "sarah-miller",
    name: "Sarah Miller",
    role: "Events Coordinator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
    bio: "Organizes amazing events and workshops. Detail-oriented and loves a good checklist.",
    department: "Event Management",
  },
  {
    id: "lucas-wright",
    name: "Lucas Wright",
    role: "Logistics Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    bio: "Ensures every event runs smoothly from start to finish. The man behind the scenes.",
    department: "Event Management",
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    role: "Developer Advocate",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    bio: "Advocates for best practices and mentors junior developers.",
    department: "PR",
  },
  {
    id: "nina-patel",
    name: "Nina Patel",
    role: "Sponsorship Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    bio: "Connecting with industry partners to support our initiatives and hackathons.",
    department: "PR",
  },
  {
    id: "priya-patel-design",
    name: "Priya Patel",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop",
    bio: "Creates beautiful user experiences and visual designs for events.",
    department: "Graphics",
  },
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=800&auto=format&fit=crop",
    bio: "Visualizing the brand identity of our chapter. Pixel perfectionist.",
    department: "Graphics",
  },
  {
    id: "noah-evans",
    name: "Noah Evans",
    role: "AV Coordinator",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=800&auto=format&fit=crop",
    bio: "Manages sound and visuals for GDG events, ensuring a professional experience.",
    department: "A/V",
  },
  {
    id: "olivia-brown",
    name: "Olivia Brown",
    role: "Video Editor",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    bio: "Capturing and editing highlights from our hackathons and meetups.",
    department: "A/V",
  },
]

const SocialLinks = () => (
  <div className="flex items-center gap-3 mt-3 text-neutral-300 group-hover:text-white transition-colors">
    <a href="#" aria-label="LinkedIn"><FaLinkedin className="hover:text-[#0A66C2]" /></a>
    <a href="#" aria-label="GitHub"><FaGithub className="hover:text-black" /></a>
    <a href="#" aria-label="Twitter"><FaTwitter className="hover:text-[#1DA1F2]" /></a>
    <a href="#" aria-label="Instagram"><FaInstagram className="hover:text-[#E1306C]" /></a>
  </div>
)

function TeamCard({ member, onClick }: { member: any; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-neutral-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="
            object-cover 
            transition-transform duration-700 
            grayscale-0                   /* Default: full color on mobile */
            md:grayscale                  /* Desktop: grayscale by default */
            md:group-hover:grayscale-0    /* Desktop hover: color */
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute inset-0 
            bg-gradient-to-t from-black/90 via-black/40 to-transparent 
            opacity-80 
            md:opacity-0 md:group-hover:opacity-100 
            transition-opacity duration-300
          "
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-lg font-bold leading-tight">{member.name}</h3>
        <p className="text-sm font-medium text-neutral-300">{member.role}</p>
        <SocialLinks />
      </div>
    </div>
  )
}

export default function TeamPage() {
  const router = useRouter()
  const departments = ["Tech", "Event Management", "PR", "Graphics", "A/V"]
  const groupedMembers = departments.map((dept) => ({
    name: dept,
    members: team.filter((m) => m.department === dept),
  }))
  const mainLead = team.find((m) => m.department === "Lead")

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">The Minds Behind GDG</h1>
            <p className="text-lg text-neutral-500">Meet the leaders and innovators of GDG SOIT RGPV</p>
          </div>

          {/* 🌟 Slightly Larger Pramanya Card */}
          {mainLead && (
            <div className="mb-20 grid place-items-center">
              <div className="w-[85%] sm:w-[50%] lg:w-[45%]">
                <TeamCard member={mainLead} onClick={() => router.push(`/team/${mainLead.id}`)} />
              </div>
            </div>
          )}

          {/* Teams */}
          {groupedMembers.map((dept) => (
            <div key={dept.name} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-neutral-900">{dept.name} Team</h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                {dept.members.map((member) => (
                  <TeamCard
                    key={member.id}
                    member={member}
                    onClick={() => router.push(`/team/${member.id}`)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  )
}
