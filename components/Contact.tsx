import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <Input type="text" placeholder="Your Name" className="bg-white text-black" />
          <Input type="email" placeholder="Your Email" className="bg-white text-black" />
          <Textarea placeholder="Your Message" className="bg-white text-black" />
          <Button type="submit" variant="secondary" className="w-full">Send Message</Button>
        </form>
      </div>
    </section>
  )
}

