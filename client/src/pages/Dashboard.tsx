import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Book, Upload, Plus, FileText, BarChart, ChevronRight, Search, PlayCircle } from "lucide-react";
import { Link } from "wouter";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const recentBooks = [
    { id: 1, title: "Class 10 Science", board: "State Board", progress: 65, color: "bg-blue-100 text-blue-700" },
    { id: 2, title: "Class 10 Mathematics", board: "State Board", progress: 32, color: "bg-green-100 text-green-700" },
    { id: 3, title: "Social Studies History", board: "State Board", progress: 8, color: "bg-orange-100 text-orange-700" },
  ];

  return (
    <div className="flex-1 bg-muted/30 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome back, Student!</h1>
            <p className="text-muted-foreground mt-1">Pick up where you left off or explore new subjects.</p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search textbooks..." 
                className="pl-9 bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search-books"
              />
            </div>
            <Button className="shrink-0" data-testid="button-upload-book">
              <Upload className="h-4 w-4 mr-2" />
              Upload PDF
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-primary flex items-center">
                <Book className="mr-2 h-5 w-5" /> Active Books
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">3</div>
              <p className="text-sm text-muted-foreground mt-1">Currently studying</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-secondary flex items-center">
                <FileText className="mr-2 h-5 w-5" /> Questions Asked
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">42</div>
              <p className="text-sm text-muted-foreground mt-1">AI Tutor interactions</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-amber-600 flex items-center">
                <BarChart className="mr-2 h-5 w-5" /> Quizzes Taken
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">12</div>
              <p className="text-sm text-muted-foreground mt-1">Practice sessions</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-6 flex items-center">
          My Textbooks
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentBooks.map((book) => (
            <Card key={book.id} className="overflow-hidden group hover:shadow-md transition-shadow">
              <div className={`h-24 ${book.color} flex items-center justify-center`}>
                <Book className="h-10 w-10 opacity-70" />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg line-clamp-1">{book.title}</CardTitle>
                <CardDescription>{book.board}</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span>Progress</span>
                  <span>{book.progress}%</span>
                </div>
                <Progress value={book.progress} className="h-2" />
              </CardContent>
              <CardFooter className="pt-0 flex gap-2">
                <Link href={`/chat`} className="flex-1">
                  <Button className="w-full" variant="default" data-testid={`btn-continue-${book.id}`}>
                    <PlayCircle className="h-4 w-4 mr-2" /> Ask AI
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
          
          <Card className="border-dashed flex flex-col items-center justify-center p-6 text-center text-muted-foreground hover:bg-accent/50 transition-colors cursor-pointer" data-testid="card-add-new-book">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <Plus className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">Add New Textbook</h3>
            <p className="text-sm mt-2">Upload a PDF from your device to start learning</p>
          </Card>
        </div>
      </div>
    </div>
  );
}