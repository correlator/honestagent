import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "1. Assessment",
    description: "We assess your business workflows to identify opportunities for agentic AI and provide a roadmap for becoming 'Agent Ready'."
  },
  {
    title: "2. Migration",
    description: "We offer guidance and support in deploying AI infrastructure, from startups to large technology organizations."
  },
  {
    title: "3. Implementation",
    description: "We build your company's agents and train your team to run and evolve them, ensuring your organization thrives independently."
  }
]

export default function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

