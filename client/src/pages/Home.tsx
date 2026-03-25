import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { BookOpen, WifiOff, Lightbulb, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/images/hero-students.png";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary/5 pt-16 md:pt-24 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Empowering Rural Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                AI-Powered Learning for <span className="text-primary">Every Student</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Education Tutor for Remote India helps students learn from state-board textbooks using smart AI, even with slow internet and limited resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/dashboard">
                  <Button size="lg" className="rounded-full text-lg px-8 h-14" data-testid="hero-start-btn">
                    Start Learning Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/chat">
                  <Button size="lg" variant="outline" className="rounded-full text-lg px-8 h-14 bg-white" data-testid="hero-demo-btn">
                    Try AI Tutor Demo
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center gap-6 pt-6 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>Free for students</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>State Board Aligned</span>
                </div>
              </div>
            </div>
            
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-2xl opacity-20 animate-in fade-in duration-1000"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 bg-white">
                <img 
                  src={heroImage} 
                  alt="Rural students learning with AI on a tablet" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Designed for Remote Learning</h2>
            <p className="text-lg text-muted-foreground">
              Our platform is specifically optimized to overcome the challenges faced by students in rural areas, making quality education accessible to all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<BookOpen className="h-8 w-8 text-primary" />}
              title="Ask Textbooks"
              description="Upload official state-board PDFs and ask questions directly. Our AI finds the exact section."
            />
            <FeatureCard 
              icon={<WifiOff className="h-8 w-8 text-secondary" />}
              title="Works on Slow Internet"
              description="Context pruning technology ensures minimal data usage and extremely fast response times."
            />
            <FeatureCard 
              icon={<Lightbulb className="h-8 w-8 text-amber-500" />}
              title="Simple Explanations"
              description="'Explain Like I'm 10' mode breaks down complex concepts into easy-to-understand stories."
            />
            <FeatureCard 
              icon={<Zap className="h-8 w-8 text-primary" />}
              title="Smart Tools"
              description="Instantly generate chapter summaries, key exam points, and practice quizzes."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to transform how you learn?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join thousands of students across India who are using AI to master their subjects.
          </p>
          <Link href="/dashboard">
            <Button size="lg" variant="secondary" className="rounded-full text-lg px-10 h-14" data-testid="cta-start-btn">
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-none shadow-lg bg-white/50 hover:-translate-y-1 transition-transform duration-300">
      <CardContent className="pt-8 px-6 pb-8">
        <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}