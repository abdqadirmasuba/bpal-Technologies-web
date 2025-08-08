import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cloud, Smartphone, Code, Users, CheckCircle } from "lucide-react"
import softwareDev from "@/assets/software-development.jpg"
import cloudServices from "@/assets/cloud-services.jpg"
import mobileApps from "@/assets/mobile-apps.jpg"
import teamCollaboration from "@/assets/team-collaboration.jpg"

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs",
    image: softwareDev,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    image: mobileApps,
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and deployment solutions",
    image: cloudServices,
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Expert team ready to collaborate on your projects",
    image: teamCollaboration,
  },
]

const projects = [
  {
    title: "Bpal Cloud",
    description: "Comprehensive cloud infrastructure platform providing scalable hosting, storage, and deployment solutions for modern applications.",
    features: ["Scalable Infrastructure", "Real-time Analytics", "Security Features"],
    status: "Live",
  },
  {
    title: "Quality Point",
    description: "Advanced quality management system designed to streamline processes, track metrics, and ensure compliance across organizations.",
    features: ["Process Management", "Compliance Tracking", "Performance Analytics"],
    status: "Live",
  },
]

const stats = [
  { label: "Years in Business", value: "5+" },
  { label: "Projects Completed", value: "100+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Team Members", value: "15+" },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl animate-fade-in">
              Innovative Software Solutions for Modern Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground animate-fade-in">
              Since 2019, Bpal Technologies has been delivering cutting-edge software development, 
              mobile applications, and cloud services to help businesses thrive in the digital age.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in">
              <Button asChild size="lg">
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Our Impact</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Delivering excellence since 2019
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-muted-foreground">{stat.label}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-primary">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Comprehensive software solutions to power your business growth
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden hover:shadow-medium transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-accent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Showcasing our successful collaborations and innovative solutions
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title} className="bg-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{project.title}</CardTitle>
                    <Badge variant="secondary">{project.status}</Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Let's discuss how our expertise can help you achieve your goals. 
              Get in touch with our team today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}