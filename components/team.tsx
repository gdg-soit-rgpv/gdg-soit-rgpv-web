"use client"

import { motion } from "framer-motion"
import { memo, useMemo, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

type Member = { name: string; role: string; image: string }

const baseTeam: Member[] = [
  { name: "Alex Chen",  role: "Community Lead",       image: "/professional-asian-man-tech-leader.jpg" },
  { name: "Sarah Miller", role: "Events Coordinator",   image: "/professional-woman-smiling.png" },
  { name: "David Kim",   role: "Technical Lead",       image: "/professional-korean-man-developer.jpg" },
  { name: "Emily Rodriguez", role: "Content & Outreach", image: "/professional-latina-woman-marketing.jpg" },
]

const REPEATS = 3 // duplicate for seamless loop

// --- Simple Team Card ---
const TeamCard = memo(function TeamCard({ name, role, image }: Member) {
  return (
    <div className="group relative rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />
      </div>
      <h3 className="text-lg font-medium text-neutral-900">{name}</h3>
      <p className="text-sm text-neutral-500">{role}</p>
    </div>
  )
})

// --- Single-line Marquee (smooth + flicker-free) ---
function SingleLineMarquee({
  items,
  pxPerSecond = 40,
  gapPx = 32,
  onCardClick,
}: {
  items: Member[]
  pxPerSecond?: number
  gapPx?: number
  onCardClick: (m: Member) => void
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const animRef = useRef<number | null>(null)
  const startRef = useRef<number>(0)
  const halfWidthRef = useRef<number>(0)

  const trackItems = useMemo(() => [...items, ...items], [items])

  useEffect(() => {
    const wrapper = wrapperRef.current
    const track = trackRef.current
    if (!wrapper || !track) return

    const measure = () => {
      const children = Array.from(track.children) as HTMLElement[]
      let firstHalfWidth = 0
      const half = Math.floor(children.length / 2)
      for (let i = 0; i < half; i++) {
        firstHalfWidth += children[i].offsetWidth
        if (i < half - 1) firstHalfWidth += gapPx
      }
      halfWidthRef.current = firstHalfWidth
    }

    measure()
    const ro = new ResizeObserver(() => measure())
    ro.observe(track)
    ro.observe(wrapper)

    const tick = (t: number) => {
      if (!startRef.current) startRef.current = t
      const elapsed = (t - startRef.current) / 1000
      const delta = elapsed * pxPerSecond
      const half = halfWidthRef.current || 1
      const x = -half + ((delta % half) | 0)
      track.style.transform = `translate3d(${x}px, 0, 0)`
      animRef.current = requestAnimationFrame(tick)
    }

    animRef.current = requestAnimationFrame(tick)

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      ro.disconnect()
      startRef.current = 0
    }
  }, [gapPx, pxPerSecond])

  return (
    <div ref={wrapperRef} className="relative w-full overflow-hidden">
      <div
        ref={trackRef}
        className="flex flex-nowrap items-stretch will-change-transform"
        style={{ gap: `${gapPx}px`, backfaceVisibility: "hidden" }}
      >
        {trackItems.map((member, idx) => (
          <div
            key={`${member.name}-${idx}`}
            className="shrink-0 cursor-pointer"
            onClick={() => onCardClick(member)}
          >
            <TeamCard {...member} />
          </div>
        ))}
      </div>

      {/* Subtle fade edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      />
    </div>
  )
}

export default function Team() {
  const router = useRouter()
  const longTeam = useMemo(
    () => Array.from({ length: REPEATS }).flatMap(() => baseTeam),
    []
  )

  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 text-4xl font-light tracking-tight text-neutral-900 md:text-5xl">
            Meet the <span className="font-medium">Team</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-neutral-500">
            Passionate developers and organizers driving the GDG SOIT RGPV community forward.
          </p>
        </motion.div>

        <div className="relative rounded-[28px] border border-neutral-200 bg-white/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
          <SingleLineMarquee
            items={longTeam}
            pxPerSecond={40} // tweak speed
            gapPx={32}
            onCardClick={() => router.push("/team")}
          />
        </div>
      </div>
    </section>
  )
}
