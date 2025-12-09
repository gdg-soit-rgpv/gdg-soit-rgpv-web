"use client"

import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import Image from "next/image"
import { useRouter } from "next/navigation"

const team = [
  {
    id: "alex-chen",
    name: "Alex Chen",
    role: "Community Lead",
    image: "/professional-asian-man-tech-leader.jpg",
    bio: "Passionate about building communities and empowering developers.",
  },
  {
    id: "sarah-miller",
    name: "Sarah Miller",
    role: "Events Coordinator",
    image: "/professional-woman-smiling.png",
    bio: "Organizes amazing events and workshops for the developer community.",
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "Technical Lead",
    image: "/professional-korean-man-developer.jpg",
    bio: "Expert in cloud technologies and modern development practices.",
  },
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    role: "Content & Outreach",
    image: "/professional-latina-woman-marketing.jpg",
    bio: "Creates engaging content and manages community outreach programs.",
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    role: "Developer Advocate",
    image: "/professional-man-software-engineer.jpg",
    bio: "Advocates for best practices and mentors junior developers.",
  },
  {
    id: "priya-patel",
    name: "Priya Patel",
    role: "Design Lead",
    image: "/professional-indian-woman-designer.jpg",
    bio: "Creates beautiful user experiences and visual designs for events.",
  },
]

type Member = typeof team[number]

function TeamCard({ member, onClick }: { member: Member; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col overflow-hidden"
    >
      {/* Image container with aspect ratio for better fitting */}
      <div className="relative w-full aspect-[3/2] overflow-hidden bg-neutral-100">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          // Adjusted sizes for better performance based on grid breakpoints
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold text-neutral-900">{member.name}</h3>
        <span className="mt-1 inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600">
          {member.role}
        </span>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 line-clamp-3">
          {member.bio}
        </p>
        <div className="mt-4 text-xs font-medium text-primary-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          View profile →
        </div>
      </div>
    </div>
  )
}


export default function TeamPage() {
  const router = useRouter()

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        <div className="pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet the Team</h1>
              <p className="text-xl text-neutral-600">
                The passionate developers and organizers driving the GDG SOIT RGPV community forward.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  onClick={() => router.push(`/team/${member.id}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  )
}