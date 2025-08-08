import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react"
import softwareDev from "@/assets/software-development.jpg"
import cloudServices from "@/assets/cloud-services.jpg"
import mobileApps from "@/assets/mobile-apps.jpg"

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business requirements.",
    image: softwareDev,
    features: [
      "Web Application Development",
      "Desktop Application Development", 
      "API Development & Integration",
      "Legacy System Modernization",
      "Maintenance & Support"
    ],
    technologies: ["React", "Node.js", "Python", "Java", ".NET", "PHP"]
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    image: mobileApps,
    features: [
      "Native iOS & Android Apps",
      "Cross-platform Development",
      "UI/UX Design",
      "App Store Optimization",
      "Mobile App Maintenance"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"]
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Comprehensive cloud infrastructure and deployment solutions.",
    image: cloudServices,
    features: [
      "Cloud Migration",
      "Infrastructure Setup",
      "DevOps & CI/CD",
      "Scalability Planning",
      "Cloud Security"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Database design, optimization, and management services.",
    features: [
      "Database Design",
      "Performance Optimization",
      "Data Migration",
      "Backup & Recovery",
      "Analytics & Reporting"
    ],
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Security Consulting",
      "Compliance Management",
      "Incident Response"
    ],
    technologies: ["Security Frameworks", "Encryption", "Monitoring Tools"]
  },
  {
    icon: Zap,
    title: "System Integration",
    description: "Seamless integration of various systems and platforms.",
    features: [
      "API Integration",
      "Third-party Integrations",
      "Data Synchronization",
      "Workflow Automation",
      "Legacy System Integration"
    ],
    technologies: ["REST APIs", "GraphQL", "Webhooks", "Message Queues"]
  }
]

const process = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We analyze your requirements and define project scope."
  },
  {
    step: "02", 
    title: "Planning & Design",
    description: "Create detailed project plans and system architecture."
  },
  {
    step: "03",
    title: "Development",
    description: "Build your solution using industry best practices."
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    description: "Rigorous testing to ensure quality and performance."
  },
  {
    step: "05",
    title: "Deployment & Launch",
    description: "Deploy your solution and ensure smooth operation."
  },
  {
    step: "06",
    title: "Support & Maintenance",
    description: "Ongoing support and continuous improvement."
  }
]

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Comprehensive software solutions tailored to your business needs. 
              From concept to deployment, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-accent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What We Offer
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Expert solutions across the full spectrum of software development
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <Card key={service.title} className="overflow-hidden">
                <div className={`lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Additional Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Specialized solutions to complement your core development needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(3).map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-accent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A proven methodology that ensures project success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item) => (
              <Card key={item.step}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{item.step}</span>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Let's discuss your project requirements and create a solution that drives your business forward.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}