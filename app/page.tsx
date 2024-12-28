import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Team from '@/components/Team'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <div id="services"><Services /></div>
      <div id="about"><About /></div>
      <div id="team"><Team /></div>
      <div id="contact"><Contact /></div>
    </main>
  )
}

