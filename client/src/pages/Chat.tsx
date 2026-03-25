import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Send,
  Bot,
  User,
  FileText,
  ChevronLeft,
  Lightbulb,
  CheckSquare,
  Zap,
  BookOpen,
  AlertCircle,
} from "lucide-react";
import { Link } from "wouter";
import tutorIcon from "@/assets/images/ai-tutor-icon.png";

type Message = {
  id: string;
  role: "user" | "ai";
  content: string;
  sourceChapter?: string;
  sourceText?: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "ai",
      content:
        "Hello! I am your AI Tutor for Class 10 Science. What would you like to learn today? You can ask me to explain a concept, summarize a chapter, or give you a quiz.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeMode, setActiveMode] = useState<"normal" | "simple">("normal");

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Mock AI response
    setTimeout(() => {
      let aiContent = "";
      let sourceText = "";
      let sourceChapter = "";

      if (inputValue.toLowerCase().includes("photosynthesis")) {
        sourceChapter = "Chapter 6: Life Processes";
        sourceText =
          "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water. Photosynthesis in plants generally involves the green pigment chlorophyll and generates oxygen as a byproduct.";

        if (activeMode === "simple") {
          aiContent =
            "Think of a plant as a tiny kitchen! 🍳 \n\nPlants make their own food using a process called **Photosynthesis**.\nThey use three ingredients:\n1. Sunlight (from the sun ☀️)\n2. Water (from the soil 💧)\n3. Carbon Dioxide (from the air 💨)\n\nThey mix these together using a special green chemical called Chlorophyll. And the best part? They breathe out Oxygen for us to breathe! 🌬️";
        } else {
          aiContent =
            "Photosynthesis is the fundamental biological process through which plants create their own food. \n\nThe equation is: \n`6CO2 + 6H2O + Light Energy → C6H12O6 + 6O2`\n\nIt occurs mainly in the leaves, specifically within cell structures called chloroplasts. These chloroplasts contain chlorophyll, which captures light energy. This energy is used to convert water and carbon dioxide into glucose (sugar), which the plant uses for energy and growth. Oxygen is released as a waste product.";
        }
      } else {
        aiContent =
          "Based on the textbook, I can help explain that concept. Could you provide a bit more detail on which specific part you're studying? We're currently looking at the Class 10 Science curriculum.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "ai",
          content: aiContent,
          sourceChapter: sourceChapter || undefined,
          sourceText: sourceText || undefined,
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const insertPrompt = (text: string) => {
    setInputValue(text);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden bg-background">
      {/* Sidebar - Context & Tools */}
      <div className="hidden md:flex w-80 flex-col border-r bg-muted/10">
        <div className="p-4 border-b">
          <Link
            href="/dashboard"
            className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Back to Dashboard
          </Link>
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 text-blue-700 p-2 rounded-lg">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-bold leading-none">Class 10 Science</h2>
              <p className="text-xs text-muted-foreground mt-1">
                State Board Curriculum
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="chapters" className="flex-1 flex flex-col">
          <TabsList className="w-full justify-start rounded-none border-b h-12 bg-transparent p-0">
            <TabsTrigger
              value="chapters"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary border-b-2 border-transparent px-4"
            >
              Chapters
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary border-b-2 border-transparent px-4"
            >
              Smart Tools
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="chapters"
            className="flex-1 p-0 m-0 overflow-y-auto"
          >
            <div className="p-2 space-y-1">
              {[
                "Chemical Reactions",
                "Acids, Bases and Salts",
                "Metals and Non-metals",
                "Carbon and its Compounds",
                "Periodic Classification",
                "Life Processes",
                "Control and Coordination",
              ].map((chapter, i) => (
                <button
                  key={i}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${i === 5 ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted text-muted-foreground"}`}
                >
                  {i + 1}. {chapter}
                </button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools" className="flex-1 p-4 m-0 space-y-4">
            <Card
              className="shadow-sm border-primary/20 bg-primary/5 cursor-pointer hover:bg-primary/10 transition-colors"
              onClick={() =>
                insertPrompt("Generate a summary of Chapter 6: Life Processes")
              }
            >
              <CardContent className="p-4 flex gap-3">
                <FileText className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Chapter Summary</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Get a quick overview of key concepts
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="shadow-sm border-amber-500/20 bg-amber-500/5 cursor-pointer hover:bg-amber-500/10 transition-colors"
              onClick={() =>
                insertPrompt("What are the key exam points for Life Processes?")
              }
            >
              <CardContent className="p-4 flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Exam Key Points</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Most frequently asked topics
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="shadow-sm border-secondary/20 bg-secondary/5 cursor-pointer hover:bg-secondary/10 transition-colors"
              onClick={() =>
                insertPrompt(
                  "Give me a 5-question multiple choice quiz on Photosynthesis",
                )
              }
            >
              <CardContent className="p-4 flex gap-3">
                <CheckSquare className="h-5 w-5 text-secondary shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Practice Quiz</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Test your knowledge with AI generated MCQs
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="h-14 border-b flex items-center justify-between px-4 bg-white shrink-0">
          <div className="flex items-center gap-2 md:hidden">
            <Link href="/dashboard" className="text-muted-foreground">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <span className="font-medium text-sm truncate max-w-[150px]">
              Class 10 Science
            </span>
          </div>
          <div className="hidden md:flex items-center text-sm font-medium text-muted-foreground">
            <Zap className="h-4 w-4 mr-2 text-amber-500" />
            Fast Response Mode (Low Data)
          </div>

          <div className="flex items-center gap-2 border rounded-full p-1 bg-muted/30">
            <button
              className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${activeMode === "normal" ? "bg-white shadow-sm border text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => setActiveMode("normal")}
            >
              Standard
            </button>
            <button
              className={`text-xs px-3 py-1 rounded-full font-medium transition-colors flex items-center gap-1 ${activeMode === "simple" ? "bg-amber-100 border border-amber-200 text-amber-800 shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => setActiveMode("simple")}
            >
              <Lightbulb className="h-3 w-3" />
              Explain Like I'm 10
            </button>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          <div className="max-w-3xl mx-auto space-y-6 pb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "ai" && (
                  <Avatar className="h-8 w-8 border bg-primary/10 shrink-0">
                    <AvatarImage src={tutorIcon} />
                    <AvatarFallback>
                      <Bot className="h-5 w-5 text-primary" />
                    </AvatarFallback>
                  </Avatar>
                )}

                <div
                  className={`flex flex-col max-w-[85%] ${message.role === "user" ? "items-end" : "items-start"}`}
                >
                  {message.role === "ai" && message.sourceChapter && (
                    <Badge
                      variant="outline"
                      className="mb-2 bg-muted/50 text-xs font-normal border-primary/20 text-primary"
                    >
                      Source: {message.sourceChapter}
                    </Badge>
                  )}

                  <div
                    className={`p-4 rounded-2xl ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-sm"
                        : "bg-muted/40 border border-muted shadow-sm rounded-tl-sm text-foreground"
                    }`}
                  >
                    <div className="whitespace-pre-wrap text-[15px] leading-relaxed break-words font-sans">
                      {message.content}
                    </div>
                  </div>

                  {message.sourceText && (
                    <div className="mt-2 bg-amber-50/50 border border-amber-200/50 rounded-lg p-3 text-sm text-amber-900 w-full">
                      <div className="font-semibold text-xs text-amber-700 uppercase tracking-wider mb-1 flex items-center">
                        <BookOpen className="h-3 w-3 mr-1" /> Original Textbook
                        Text
                      </div>
                      <p className="italic opacity-80 leading-snug text-xs">
                        "{message.sourceText}"
                      </p>
                    </div>
                  )}
                </div>

                {message.role === "user" && (
                  <Avatar className="h-8 w-8 shrink-0 bg-primary">
                    <AvatarFallback>
                      <User className="h-5 w-5 text-white" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-4 justify-start">
                <Avatar className="h-8 w-8 border bg-primary/10 shrink-0">
                  <AvatarImage src={tutorIcon} />
                  <AvatarFallback>
                    <Bot className="h-5 w-5 text-primary" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-muted/40 border border-muted shadow-sm rounded-2xl rounded-tl-sm p-4 flex items-center gap-1">
                  <div
                    className="w-2 h-2 rounded-full bg-primary/50 animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-primary/50 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-primary/50 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 bg-white border-t">
          <div className="max-w-3xl mx-auto">
            <form
              onSubmit={handleSendMessage}
              className="relative flex items-center"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask a question about the textbook..."
                className="pr-12 py-6 rounded-full border-muted-foreground/30 shadow-sm focus-visible:ring-primary focus-visible:ring-offset-0 text-base"
                data-testid="input-chat-message"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1.5 h-10 w-10 rounded-full"
                disabled={!inputValue.trim() || isTyping}
                data-testid="btn-send-message"
              >
                <Send className="h-4 w-4 ml-0.5" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
            <div className="flex gap-2 mt-2 px-2 overflow-x-auto no-scrollbar">
              <button
                onClick={() => insertPrompt("Explain Photosynthesis")}
                className="whitespace-nowrap text-xs text-muted-foreground bg-muted hover:bg-muted/80 px-3 py-1.5 rounded-full transition-colors"
              >
                Explain Photosynthesis
              </button>
              <button
                onClick={() => insertPrompt("What are Acids and Bases?")}
                className="whitespace-nowrap text-xs text-muted-foreground bg-muted hover:bg-muted/80 px-3 py-1.5 rounded-full transition-colors"
              >
                What are Acids and Bases?
              </button>
              <button
                onClick={() =>
                  insertPrompt("Help me revise for tomorrow's exam")
                }
                className="whitespace-nowrap text-xs text-muted-foreground bg-muted hover:bg-muted/80 px-3 py-1.5 rounded-full transition-colors"
              >
                Exam revision help
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
