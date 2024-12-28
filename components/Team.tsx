import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import LogoCarousel from "./LogoCarousel"

const team = [
  {
    name: "Daniel Walmsley",
    role: "Co-Founder",
    image: "/placeholder.svg",
    bio: "Daniel is a visionary leader with a unique blend of technical expertise and creative flair. As the former head of AI at Automatic and CTO of NationBuilder, he brings a wealth of experience in cutting-edge technology. Daniel's background in standup and improvisational comedy adds a fresh, dynamic approach to problem-solving and team leadership."
  },
  {
    name: "Scott Hoch",
    role: "Co-Founder",
    image: "/placeholder.svg",
    bio: "Scott is a data science pioneer with a track record of driving innovation in AI and analytics. His experience as the former head of Data at Deep6AI and ConversationAI, coupled with his entrepreneurial success as the founder of BlackBox Consulting, positions him as a key strategist in leveraging data for business growth and technological advancement."
  }
]

export default function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Avatar className="w-32 h-32 mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <p className="text-sm leading-relaxed max-w-md">{member.bio}</p>
            </div>
          ))}
        </div>
        <LogoCarousel />
      </div>
    </section>
  )
}

