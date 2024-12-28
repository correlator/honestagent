import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">HonestAgent</h1>
        <p className="text-xl md:text-2xl mb-8">Empowering businesses with autonomous agents for innovative workflows</p>
        <Button variant="secondary" size="lg">Learn More</Button>
      </div>
    </section>
  )
}

