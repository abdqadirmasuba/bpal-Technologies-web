import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Target, Eye, Users, Award } from "lucide-react"
import teamCollaboration from "@/assets/team-collaboration.jpg"

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "We stay at the forefront of technology to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients and partners to achieve shared success.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in every project we undertake.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We believe in open communication and honest partnerships.",
  },
]

const timeline = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Bpal Technologies Limited was established with a vision to provide innovative software solutions.",
  },
  {
    year: "2020",
    title: "First Major Project",
    description: "Successfully delivered our first enterprise-level software solution.",
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew our team of skilled developers and expanded our service offerings.",
  },
  {
    year: "2022",
    title: "Cloud Services Launch",
    description: "Launched Bpal Cloud, our comprehensive cloud infrastructure platform.",
  },
  {
    year: "2023",
    title: "Quality Point Release",
    description: "Released Quality Point, our advanced quality management system.",
  },
  {
    year: "2024",
    title: "Continued Growth",
    description: "Continuing to innovate and serve clients across various industries.",
  },
]

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center">
              <div className="lg:pr-8">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  About Bpal Technologies
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Founded in 2019, Bpal Technologies Limited has been at the forefront of 
                  software innovation, providing comprehensive solutions that empower businesses 
                  to thrive in the digital landscape.
                </p>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  Our team of skilled professionals is dedicated to delivering excellence 
                  in every project, from system designs and mobile applications to cloud 
                  services and beyond.
                </p>
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/contact">
                      Work With Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <img
                  src={teamCollaboration}
                  alt="Bpal Technologies Team"
                  className="w-full rounded-lg shadow-medium"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-accent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To provide innovative, reliable, and scalable software solutions that 
                    empower businesses to achieve their goals and stay competitive in an 
                    ever-evolving digital world.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-6 w-6 text-primary" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To be the leading technology partner in Uganda and beyond, known for 
                    our commitment to excellence, innovation, and client success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-accent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Journey</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A timeline of our growth and achievements
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="relative flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="flex items-center gap-4">
                      <Badge variant="secondary">{item.year}</Badge>
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Work Together?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Let's discuss how we can help bring your vision to life.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}