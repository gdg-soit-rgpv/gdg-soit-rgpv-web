"use client"

import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, useMemo } from "react"

// --- Types ---
type Member = {
  id: string
  name: string
  role: string
  image: string
  bio: string
  department: string
}

// --- Data ---
const team: Member[] = [
  // Tech Department
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
    id: "arjun-singh",
    name: "Arjun Singh",
    role: "AI/ML Enthusiast",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    bio: "Deep diving into neural networks and bringing AI workshops to campus.",
    department: "Tech",
  },

  // Event Management
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

  // Social Media
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    role: "Content & Outreach",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    bio: "Creates engaging content and manages community outreach programs.",
    department: "Social Media",
  },
  {
    id: "sophia-lee",
    name: "Sophia Lee",
    role: "Social Media Manager",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    bio: "Keeping the community connected through tweets, reels, and stories.",
    department: "Social Media",
  },

  // PR
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

  // Graphics
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

  // A/V
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

// --- Components ---

function TeamCard({ member, onClick }: { member: Member; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-neutral-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image Container */}
      {/* Mobile: aspect-[3/4] for better portrait fit in 2-col grid. Desktop: aspect-[4/5] */}
      <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-[4/5]">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Gradient Overlay - Darker on mobile for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 text-white translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex flex-col">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary-200 mb-0.5 sm:mb-1 line-clamp-1">
            {member.department}
          </span>
          <h3 className="text-sm sm:text-xl font-bold leading-tight line-clamp-1 sm:line-clamp-none">{member.name}</h3>
          <p className="text-[10px] sm:text-sm font-medium text-neutral-300 line-clamp-1 sm:line-clamp-none">{member.role}</p>
          
          {/* Bio - Hidden on mobile to keep cards compact, visible on desktop hover */}
          <p className="mt-3 hidden sm:block text-sm text-neutral-200 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function TeamPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("All")

  // Extract unique departments dynamically
  const departments = useMemo(() => {
    const deps = new Set(team.map((m) => m.department))
    return ["All", ...Array.from(deps).sort()]
  }, [])

  // Filter logic
  const filteredMembers = useMemo(() => {
    if (activeTab === "All") return team
    return team.filter((member) => member.department === activeTab)
  }, [activeTab])

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        <div className="pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-neutral-900">
                The Minds Behind GDG
              </h1>
              <p className="text-lg md:text-xl text-neutral-500">
                Meet the passionate developers, designers, and organizers driving our community forward.
              </p>
            </div>

            {/* Filter Tabs - Scrollable on mobile. Removed sticky behavior. */}
            <div className="mb-12 -mx-4 px-4 py-4 md:p-0">
              <div className="flex items-center md:justify-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setActiveTab(dept)}
                    className={`
                      px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
                      ${
                        activeTab === dept
                          ? "bg-black text-white shadow-lg scale-105"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                      }
                    `}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid Area */}
            <div className="min-h-[400px]">
              {/* Grid: 2 columns on mobile (gap-3), 3 on large, 4 on XL */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8">
                {filteredMembers.map((member) => (
                  <TeamCard
                    key={member.id}
                    member={member}
                    onClick={() => router.push(`/team/${member.id}`)}
                  />
                ))}
              </div>
              
              {/* Empty State (Safety fallback) */}
              {filteredMembers.length === 0 && (
                <div className="text-center py-20 text-neutral-400">
                  No members found in this department.
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  )
}