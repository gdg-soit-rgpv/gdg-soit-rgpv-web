import Image from "next/image"
import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import Link from "next/link"
import { Github, Linkedin, Twitter, ArrowLeft } from "lucide-react"

// Updated dummy team data with new fields matching the schema
const team = [
  {
    id: "alex-chen",
    name: "Alex Chen",
    role: "Community Lead",
    image: "/professional-asian-man-tech-leader.jpg",
    bio: "Passionate about building communities and empowering developers. Alex has over 10 years of experience in tech leadership and community management.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    order: 1,
  },
  {
    id: "sarah-miller",
    name: "Sarah Miller",
    role: "Events Coordinator",
    image: "/professional-woman-smiling.png",
    bio: "Organizes amazing events and workshops for the developer community. Sarah ensures every meetup runs smoothly and is inclusive for everyone.",
    linkedin: "https://linkedin.com",
    github: null,
    twitter: "https://twitter.com",
    order: 2,
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "Technical Lead",
    image: "/professional-korean-man-developer.jpg",
    bio: "Expert in cloud technologies and modern development practices. David loves architecting scalable solutions and teaching others about cloud infrastructure.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: null,
    order: 3,
  },
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    role: "Content & Outreach",
    image: "/professional-latina-woman-marketing.jpg",
    bio: "Creates engaging content and manages community outreach programs. Emily is a storyteller at heart who bridges the gap between tech and people.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    order: 4,
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    role: "Developer Advocate",
    image: "/professional-man-software-engineer.jpg",
    bio: "Advocates for best practices and mentors junior developers. James is always ready to pair program or help debug tricky issues.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    order: 5,
  },
  {
    id: "priya-patel",
    name: "Priya Patel",
    role: "Design Lead",
    image: "/professional-indian-woman-designer.jpg",
    bio: "Creates beautiful user experiences and visual designs for events. Priya combines aesthetics with functionality to create memorable designs.",
    linkedin: "https://linkedin.com",
    github: null,
    twitter: "https://twitter.com",
    order: 6,
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
          {/* Back Link - visible on mobile/desktop for better UX */}
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
              <div className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 font-medium text-sm mb-6">
                {member.role}
              </div>
              
              <p className="text-neutral-600 leading-relaxed text-lg mb-8 max-w-2xl mx-auto md:mx-0">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="border-t border-neutral-100 pt-8 mt-4">
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Connect</h3>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  {member.linkedin && (
                    <Link 
                      href={member.linkedin} 
                      target="_blank" 
                      className="p-3 rounded-full bg-neutral-50 text-neutral-600 hover:bg-[#0077b5] hover:text-white transition-all duration-300 group"
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