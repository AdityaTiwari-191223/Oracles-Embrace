import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Moon, Sun, Star, Sparkles, Menu, ScrollText, SnowflakeIcon as Crystal, Compass } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950 via-slate-950 to-slate-950 text-slate-50">
      {/* Mystical Particle Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-20 animate-twinkle"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-purple-800/30 bg-slate-950/50 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Moon className="h-8 w-8 text-purple-400 group-hover:opacity-0 transition-opacity" />
              <Sun className="h-8 w-8 text-amber-400 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-serif text-xl bg-gradient-to-r from-purple-400 via-amber-300 to-purple-400 bg-clip-text text-transparent">
              Oracle's Embrace
            </span>
          </Link>
          <nav className="hidden md:flex gap-8">
            {[
              { name: "Mysteries", href: "#mysteries", icon: Crystal },
              { name: "Journey", href: "#journey", icon: Compass },
              { name: "Prophecies", href: "#testimonials", icon: ScrollText },
              { name: "Destiny", href: "#subscribe", icon: Star },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-all hover:scale-110 flex items-center gap-2"
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex gap-4">
            <Button variant="ghost" className="text-purple-400 hover:text-amber-400 hover:bg-purple-950/50">
              Enter Portal
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-amber-500 hover:from-purple-600 hover:to-amber-600 text-white">
              Begin Journey
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-purple-400">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-slate-950/95 border-purple-800/30 backdrop-blur-xl">
              <nav className="flex flex-col gap-4 mt-8">
                {[
                  { name: "Mysteries", href: "#mysteries", icon: Crystal },
                  { name: "Journey", href: "#journey", icon: Compass },
                  { name: "Prophecies", href: "#testimonials", icon: ScrollText },
                  { name: "Destiny", href: "#subscribe", icon: Star },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="pt-16 relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/mystical-bg.svg')] bg-cover bg-center opacity-20 animate-float"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/50 to-slate-950"></div>
          </div>
          <div className="container relative z-10 text-center space-y-8 py-20">
            <div className="relative inline-block">
              <Sparkles className="absolute -left-8 -top-8 h-6 w-6 text-amber-400 animate-pulse" />
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl">
                <span className="bg-gradient-to-r from-purple-400 via-amber-300 to-purple-400 bg-clip-text text-transparent">
                  Unveil the Mystical Within
                </span>
              </h1>
              <Sparkles className="absolute -right-8 -bottom-8 h-6 w-6 text-amber-400 animate-pulse delay-300" />
            </div>
            <p className="text-xl md:text-2xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
              Embark on a sacred journey through curated mystical treasures, ancient wisdom, and transformative
              energies.
            </p>
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-amber-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              <Button size="lg" className="relative bg-slate-950 text-lg px-8 py-6 group-hover:bg-slate-900/90">
                <span className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                  Discover Your Destiny
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Mystery Boxes Section */}
        <section id="mysteries" className="py-20 relative">
          <div className="absolute inset-0 bg-[url('/sacred-geometry.svg')] opacity-5"></div>
          <div className="container relative">
            <div className="text-center space-y-4 mb-16">
              <div className="flex items-center justify-center gap-2">
                <Crystal className="h-6 w-6 text-amber-400" />
                <h2 className="font-serif text-3xl md:text-5xl bg-gradient-to-r from-purple-400 via-amber-300 to-purple-400 bg-clip-text text-transparent">
                  Sacred Mysteries
                </h2>
              </div>
              <p className="text-purple-200 text-lg max-w-2xl mx-auto">
                Each box is a gateway to ancient wisdom and mystical revelations
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Crystal Prophecy",
                  description: "Ancient crystals imbued with prophetic energies",
                  image: "/placeholder.svg?height=400&width=300",
                },
                {
                  title: "Ethereal Guidance",
                  description: "Sacred tools for divine communication",
                  image: "/placeholder.svg?height=400&width=300",
                },
                {
                  title: "Mystic Artifacts",
                  description: "Powerful relics from forgotten realms",
                  image: "/placeholder.svg?height=400&width=300",
                },
              ].map((item) => (
                <div key={item.title} className="group relative rounded-lg overflow-hidden">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-amber-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <Card className="relative bg-slate-950/80 border-purple-800/30 h-full transform group-hover:scale-[0.99] transition duration-300">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-purple-950/50 to-transparent"></div>
                    </div>
                    <CardHeader>
                      <CardTitle className="font-serif bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-purple-200">{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-purple-900/10"></div>
          <div className="container relative">
            <div className="text-center space-y-4 mb-16">
              <div className="flex items-center justify-center gap-2">
                <ScrollText className="h-6 w-6 text-amber-400" />
                <h2 className="font-serif text-3xl md:text-5xl bg-gradient-to-r from-purple-400 via-amber-300 to-purple-400 bg-clip-text text-transparent">
                  Sacred Testimonials
                </h2>
              </div>
            </div>
            <Carousel className="max-w-xl mx-auto">
              <CarouselContent>
                {[1, 2, 3].map((index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-slate-950/50 border-purple-800/30 backdrop-blur-sm">
                      <CardContent className="pt-6">
                        <div className="space-y-4 text-center">
                          <div className="flex justify-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                            ))}
                          </div>
                          <p className="text-purple-200 italic">
                            "The Oracle's Embrace has awakened ancient wisdom within me. Each box feels like a sacred
                            gift from the universe itself."
                          </p>
                          <div>
                            <p className="font-serif bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                              Mystic Seeker
                            </p>
                            <p className="text-sm text-purple-300">Verified Soul</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-purple-400 hover:text-amber-400" />
              <CarouselNext className="text-purple-400 hover:text-amber-400" />
            </Carousel>
          </div>
        </section>

        {/* Subscription Section */}
        <section id="subscribe" className="py-20 relative">
          <div className="absolute inset-0 bg-[url('/sacred-geometry.svg')] opacity-5 animate-spin-slow"></div>
          <div className="container relative">
            <div className="text-center space-y-4 mb-16">
              <div className="flex items-center justify-center gap-2">
                <Moon className="h-6 w-6 text-amber-400" />
                <h2 className="font-serif text-3xl md:text-5xl bg-gradient-to-r from-purple-400 via-amber-300 to-purple-400 bg-clip-text text-transparent">
                  Choose Your Path
                </h2>
              </div>
              <p className="text-purple-200 text-lg max-w-2xl mx-auto">
                Select your mystical journey and begin receiving sacred treasures
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Mystic Initiate",
                  price: "$49",
                  description: "Begin your spiritual journey",
                  features: ["Monthly Mystery Box", "Digital Grimoire", "Community Access"],
                },
                {
                  name: "Oracle Adept",
                  price: "$139",
                  description: "Deepen your mystical practice",
                  features: ["Quarterly Sacred Box", "Exclusive Artifacts", "Personal Reading"],
                },
                {
                  name: "High Priestess",
                  price: "$499",
                  description: "Master the ancient arts",
                  features: ["Seasonal Ritual Boxes", "Sacred Ceremonies", "Private Mentorship"],
                },
              ].map((plan) => (
                <div key={plan.name} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-amber-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <Card className="relative bg-slate-950/80 border-purple-800/30 h-full transform group-hover:scale-[0.99] transition duration-300">
                    <CardHeader>
                      <CardTitle className="font-serif bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                        {plan.name}
                      </CardTitle>
                      <CardDescription className="text-purple-200">{plan.description}</CardDescription>
                      <p className="text-4xl font-bold text-slate-50">{plan.price}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-purple-200">
                            <Sparkles className="h-4 w-4 text-amber-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="relative mt-6 group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-amber-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <Button className="relative w-full bg-slate-950 group-hover:bg-slate-900/90">
                          <span className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                            Begin Your Journey
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-800/30 bg-slate-950/80 backdrop-blur-xl">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-serif text-amber-400">Sacred Path</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-purple-200 hover:text-amber-400 transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-200 hover:text-amber-400 transition-colors">
                    Ancient Wisdom
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-200 hover:text-amber-400 transition-colors">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-amber-400">Guidance</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-purple-200 hover:text-amber-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-200 hover:text-amber-400 transition-colors">
                    Contact Oracle
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-200 hover:text-amber-400 transition-colors">
                    Shipping
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-amber-400">Sacred Terms</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-purple-200 hover:text-amber-400 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-200 hover:text-amber-400 transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-200 hover:text-amber-400 transition-colors">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-amber-400">Ethereal Realm</h3>
              <div className="flex gap-4">
                {[Crystal, Compass, ScrollText].map((Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="text-purple-200 hover:text-amber-400 transition-colors transform hover:scale-110"
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-purple-800/30 text-center">
            <p className="text-purple-200">© {new Date().getFullYear()} Oracle's Embrace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

