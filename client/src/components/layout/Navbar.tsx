import { Link, useLocation } from "wouter";
import { BookOpen, Bot, LayoutDashboard, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <Bot className="h-6 w-6" />
          <span className="hidden sm:inline-block">EduTutor</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className={`transition-colors hover:text-foreground ${location === '/' ? 'text-foreground' : ''}`}>
              Home
            </Link>
            <Link href="/dashboard" className={`flex items-center gap-2 transition-colors hover:text-foreground ${location === '/dashboard' ? 'text-foreground' : ''}`}>
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link href="/chat" className={`flex items-center gap-2 transition-colors hover:text-foreground ${location === '/chat' ? 'text-foreground' : ''}`}>
              <BookOpen className="h-4 w-4" />
              Study
            </Link>
            <Link href="/admin" className={`flex items-center gap-2 transition-colors hover:text-foreground ${location === '/admin' ? 'text-foreground' : ''}`}>
              <Settings className="h-4 w-4" />
              Teacher
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            {location !== '/dashboard' && (
              <Link href="/dashboard">
                <Button className="rounded-full px-6" data-testid="button-start-learning">
                  Start Learning
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
