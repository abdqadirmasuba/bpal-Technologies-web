import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <div className="mx-auto max-w-md">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
            <h2 className="text-3xl font-bold tracking-tight mt-4">Page Not Found</h2>
            <p className="text-lg text-muted-foreground mt-4">
              Oops! The page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
          
          <div className="mt-12 text-sm text-muted-foreground">
            <p>Need help? <Link to="/contact" className="text-primary hover:underline">Contact our support team</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}