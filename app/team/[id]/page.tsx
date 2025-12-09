import Image from "next/image"
import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import Link from "next/link"
import { Github, Linkedin, Twitter, ArrowLeft, Mail } from "lucide-react"

// Complete team data matching the main TeamPage
const team = [
  // --- Tech ---
  {
    id: "pramanya-rajput",
    name: "Pramanya Rajput",
    role: "Community Lead",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop",
    bio: "Leading GDG SOIT RGPV with vision, creativity, and determination — inspiring the community through innovation, collaboration, and leadership.",
    email: "pramanya.rajput@gdgexample.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    department: "Lead",
  },  
  {
    id: "alex-chen",
    name: "Alex Chen",
    role: "Community Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    bio: "Passionate about building communities and empowering developers through open source. Alex has over 10 years of experience in tech leadership and community management, ensuring that every voice is heard.",
    email: "alex.chen@gdgexample.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    department: "Tech",
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    bio: "Expert in cloud technologies and modern development practices. David loves architecting scalable solutions, hacking on weekends, and teaching others about cloud infrastructure.",
    email: "david.kim@gdgexample.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: null,
    department: "Tech",
  },
  {
    id: "maria-garcia",
    name: "Maria Garcia",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    bio: "Building scalable web applications and mentoring students in React and Node.js. Maria is a wizard with frontend frameworks and loves optimizing performance.",
    email: "maria.garcia@gdgexample.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    department: "Tech",
  },
  {
    id: "arjun-singh",
    name: "Arjun Singh",
    role: "AI/ML Enthusiast",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    bio: "Deep diving into neural networks and bringing AI workshops to campus. Arjun is fascinated by the potential of Generative AI and often hosts study jams.",
    email: "arjun.singh@gdgexample.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: null,
    department: "Tech",
  },

  // --- Event Management ---
  {
    id: "sarah-miller",
    name: "Sarah Miller",
    role: "Events Coordinator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
    bio: "Organizes amazing events and workshops for the developer community. Sarah ensures every meetup runs smoothly, is inclusive for everyone, and detail-oriented to the core.",
    email: "sarah.miller@gdgexample.com",
    linkedin: "https://linkedin.com",
    github: null,
    twitter: "https://twitter.com",
    department: "Event Management",
  },
  {
    id: "lucas-wright",
    name: "Lucas Wright",
    role: "Logistics Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    bio: "Ensures every event runs smoothly from start to finish. Lucas is the man behind the scenes, managing venues, equipment, and schedules with precision.",
    email: "lucas.wright@gdgexample.com",
    linkedin: "https://linkedin.com",
    github: null,
    twitter: null,
    department: "Event Management",
  },

  // --- Social Media ---
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    role: "Content & Outreach",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    bio: "Creates engaging content and manages community outreach programs. Emily is a storyteller at heart who bridges the gap between tech and people.",
    email: "emily.rodriguez@gdgexample.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    department: "Social Media",
  },
  {
    id: "sophia-lee",
    name: "Sophia Lee",
    role: "Social Media Manager",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    bio: "Keeping the community connected through tweets, reels, and stories. Sophia knows exactly how to make a hackathon go viral on social platforms.",
    email: "sophia.lee@gdgexample.com",
    linkedin: "https://linkedin.com",
    github: null,
    twitter: "https://twitter.com",
    department: "Social Media",
  },

  // --- PR ---
  {
    id: "james-wilson",
    name: "James Wilson",
    role: "Developer Advocate",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    bio: "Advocates for best practices and mentors junior developers. James is always ready to pair program or help debug tricky issues.",
    email: "james.wilson@gdgexample.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    department: "PR",
  },
  {
    id: "nina-patel",
    name: "Nina Patel",
    role: "Sponsorship Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    bio: "Connecting with industry partners to support our initiatives and hackathons. Nina builds lasting relationships that fuel our community's growth.",
    email: "nina.patel@gdgexample.com",
    linkedin: "https://linkedin.com",
    github: null,
    twitter: "https://twitter.com",
    department: "PR",
  },

  // --- Graphics ---
  {
    id: "priya-patel-design",
    name: "Priya Patel",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop",
    bio: "Creates beautiful user experiences and visual designs for events. Priya combines aesthetics with functionality to create memorable designs.",
    email: "priya.patel@gdgexample.com",
    linkedin: "https://linkedin.com",
    github: null,
    twitter: "https://twitter.com",
    department: "Graphics",
  },
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=800&auto=format&fit=crop",
    bio: "Visualizing the brand identity of our chapter. A pixel perfectionist, Marcus ensures all our branding is consistent and striking.",
    email: "marcus.johnson@gdgexample.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: null,
    department: "Graphics",
  },

  // --- A/V ---
  {
    id: "noah-evans",
    name: "Noah Evans",
    role: "AV Coordinator",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=800&auto=format&fit=crop",
    bio: "Manages sound and visuals for GDG events, ensuring a professional experience. Noah is an audiophile who makes sure every speaker sounds crystal clear.",
    email: "noah.evans@gdgexample.com",
    linkedin: "https://linkedin.com",
    github: null,
    twitter: null,
    department: "A/V",
  },
  {
    id: "olivia-brown",
    name: "Olivia Brown",
    role: "Video Editor",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    bio: "Capturing and editing highlights from our hackathons and meetups. Olivia turns raw footage into compelling stories that showcase our community spirit.",
    email: "olivia.brown@gdgexample.com",
    linkedin: "https://linkedin.com",
    github: null,
    twitter: "https://twitter.com",
    department: "A/V",
  },
]

export default async function MemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const member = team.find((m) => m.id === id)

  if (!member) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-semibold mb-4 text-neutral-900">Member not found</h1>
        <Link href="/team" className="text-primary-600 hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Go back
        </Link>
      </main>
    )
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        <div className="pt-32 pb-20 px-6 md:px-8 max-w-5xl mx-auto">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/team"
              className="inline-flex items-center text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Team
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Image Column */}
            <div className="flex-shrink-0 w-full md:w-auto flex flex-col items-center md:items-start">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl bg-neutral-100">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Info Column */}
            <div className="flex-1 text-center md:text-left pt-2">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">{member.name}</h1>
              <div className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 font-medium text-sm mb-4">
                {member.role}
              </div>

              {/* Email Section */}
              {member.email && (
                <div className="flex items-center justify-center md:justify-start gap-2 mb-6 text-neutral-600 hover:text-primary-700 transition-colors">
                  <Mail className="w-5 h-5" />
                  <a href={`mailto:${member.email}`} className="underline hover:no-underline">
                    {member.email}
                  </a>
                </div>
              )}

              <p className="text-neutral-600 leading-relaxed text-lg mb-8 max-w-2xl mx-auto md:mx-0">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="border-t border-neutral-100 pt-8 mt-4">
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                  Connect
                </h3>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      className="p-3 rounded-full bg-neutral-50 text-neutral-600 hover:bg-[#0077b5] hover:text-white transition-all duration-300"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  )}
                  {member.github && (
                    <Link
                      href={member.github}
                      target="_blank"
                      className="p-3 rounded-full bg-neutral-50 text-neutral-600 hover:bg-[#333] hover:text-white transition-all duration-300"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  )}
                  {member.twitter && (
                    <Link
                      href={member.twitter}
                      target="_blank"
                      className="p-3 rounded-full bg-neutral-50 text-neutral-600 hover:bg-black hover:text-white transition-all duration-300"
                      aria-label="X (Twitter) Profile"
                    >
                      <Twitter className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  )
}