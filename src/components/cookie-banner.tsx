import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookies-accepted")
    if (!hasAcceptedCookies) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true")
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookies-accepted", "false")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border p-4 shadow-strong">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-card-foreground">
            This website uses cookies to enhance your browsing experience and provide personalized content. 
            By continuing to use this site, you consent to our use of cookies.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={rejectCookies}
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={acceptCookies}
          >
            Accept
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={rejectCookies}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>
    </div>
  )
}