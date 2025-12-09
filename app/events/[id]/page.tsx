import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import { Calendar, MapPin, ArrowLeft, Clock, Share2, Ticket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Unified data source with images and full details
const events = [
  
  {
    id: "devfest-2024",
    title: "DevFest 2024",
    date: "December 15, 2024",
    location: "SOIT Campus",
    description: "The biggest developer festival of the year featuring talks, workshops, and networking.",
    tag: "Flagship Event",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    details: "DevFest 2024 brings developers, designers, and tech enthusiasts together to explore cutting-edge technologies, participate in hands-on sessions, and network with like-minded professionals. Expect keynote speakers, live coding, and a celebration of community innovation! Tracks include Web, Cloud, AI, and Mobile.",
    time: "09:00 AM - 06:00 PM",
  },
  {
    id: "flutter-forward",
    title: "Flutter Forward",
    date: "January 20, 2025",
    location: "Tech Hub Auditorium",
    description: "Explore the latest in Flutter development with hands-on sessions and expert insights.",
    tag: "Workshop",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop",
    details: "Flutter Forward dives deep into the modern cross-platform development ecosystem. Learn how to build beautiful apps faster and explore what's new in Flutter 4.0 with Google's developer experts. We will cover Dart 3, Material 3 design, and backend integration with Firebase.",
    time: "10:00 AM - 02:00 PM",
  },
  {
    id: "cloud-study-jam",
    title: "Cloud Study Jam",
    date: "February 8, 2025",
    location: "Innovation Lab",
    description: "Deep dive into Google Cloud technologies with guided learning paths and certifications.",
    tag: "Study Jam",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    details: "Our Cloud Study Jam gives you practical experience with Google Cloud through guided labs and real-world challenges. Perfect for developers eager to upskill and earn badges and certifications. Lunch and swag provided for those who complete the quest!",
    time: "11:00 AM - 04:00 PM",
  },
  {
    id: "web-dev-bootcamp",
    title: "Web Development Bootcamp",
    date: "March 5, 2025",
    location: "Online",
    description: "Master modern web development with React, Next.js, and TypeScript.",
    tag: "Bootcamp",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop",
    details: "Join this immersive online bootcamp to master the full stack — from frontend frameworks like React and Next.js to backend APIs. Build projects, gain mentorship, and level up your web dev skills. This is a 4-week cohort-based program.",
    time: "06:00 PM - 08:00 PM (Weekly)",
  },
  {
    id: "ai-ml-meetup",
    title: "AI & ML Meetup",
    date: "March 22, 2025",
    location: "Innovation Center",
    description: "Discover the latest trends in AI, ML, and explore practical applications.",
    tag: "Meetup",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    details: "An open meetup where developers, data scientists, and AI enthusiasts discuss trends, breakthroughs, and practical implementations of AI and ML across industries. Special guest speaker from Google Brain.",
    time: "02:00 PM - 05:00 PM",
  },
  {
    id: "android-workshop",
    title: "Android Workshop",
    date: "April 10, 2025",
    location: "SOIT Lab",
    description: "Build scalable Android applications with Kotlin and modern architecture patterns.",
    tag: "Workshop",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=800&auto=format&fit=crop",
    details: "A complete hands-on session covering modern Android development using Kotlin, Jetpack Compose, and MVVM architecture. Build, test, and deploy your first app with experts from GDG SOIT RGPV. Bring your laptop with Android Studio installed.",
    time: "10:00 AM - 03:00 PM",
  },
]

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const event = events.find((e) => e.id === id)

  if (!event) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-white text-neutral-900">
        <h1 className="text-3xl font-bold mb-4">Event not found</h1>
        <Link href="/events" className="text-primary-600 hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Go back
        </Link>
      </main>
    )
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white text-neutral-900">
        {/* Navigation Bar Placeholder (if global nav exists) or just spacing */}
        <div className="pt-24 md:pt-32 px-6 md:px-8 max-w-7xl mx-auto">
            
            {/* Back Link */}
            <Link
                href="/events"
                className="inline-flex items-center text-neutral-500 hover:text-black transition-colors mb-8 group"
            >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Events
            </Link>

            {/* Hero Section */}
            <div className="relative w-full h-[40vh] md:h-[60vh] rounded-[2rem] overflow-hidden shadow-2xl mb-12">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase bg-white/20 backdrop-blur-md border border-white/30 rounded-full">
                        {event.tag}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{event.title}</h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm md:text-base font-medium text-neutral-200">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5" />
                            <span>{event.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-24">
                
                {/* Left Column: Description */}
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">About the Event</h2>
                        <p className="text-lg text-neutral-600 leading-relaxed whitespace-pre-line">
                            {event.details}
                        </p>
                    </div>
                    
                    {/* Mock Agenda or Highlights could go here */}
                    <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
                        <h3 className="font-semibold mb-2">What to expect</h3>
                        <ul className="list-disc list-inside text-neutral-600 space-y-1">
                            <li>Expert-led sessions</li>
                            <li>Hands-on coding workshops</li>
                            <li>Networking opportunities</li>
                            <li>Swag and refreshments</li>
                        </ul>
                    </div>
                </div>

                {/* Right Column: Sidebar */}
                <div className="space-y-6">
                    {/* Registration Card */}
                    <div className="p-6 rounded-3xl border border-neutral-200 shadow-lg bg-white sticky top-24">
                        <h3 className="text-xl font-bold mb-6">Event Details</h3>
                        
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-neutral-100 rounded-lg">
                                    <Clock className="w-5 h-5 text-neutral-600" />
                                </div>
                                <div>
                                    <div className="font-medium">Time</div>
                                    <div className="text-sm text-neutral-500">{event.time}</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-neutral-100 rounded-lg">
                                    <MapPin className="w-5 h-5 text-neutral-600" />
                                </div>
                                <div>
                                    <div className="font-medium">Location</div>
                                    <div className="text-sm text-neutral-500">{event.location}</div>
                                </div>
                            </div>
                        </div>

                        <button className="w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group">
                            <Ticket className="w-5 h-5" />
                            Register Now
                        </button>
                        
                        <div className="mt-4 text-center">
                             <button className="text-sm text-neutral-500 hover:text-black flex items-center justify-center gap-2 w-full py-2">
                                <Share2 className="w-4 h-4" /> Share Event
                             </button>
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