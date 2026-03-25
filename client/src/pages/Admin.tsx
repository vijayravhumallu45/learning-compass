import { Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Upload, FileText, Users, Activity, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Admin() {
  return (
    <div className="flex-1 bg-muted/30 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Teacher Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage content and monitor student progress
            </p>
          </div>
          <Button className="shrink-0">
            <Upload className="h-4 w-4 mr-2" />
            Upload Official Textbook
          </Button>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-6 border-b rounded-none w-full justify-start h-auto p-0 bg-transparent">
            <TabsTrigger
              value="overview"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="content"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
            >
              Content Library
            </TabsTrigger>
            <TabsTrigger
              value="students"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
            >
              Student Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                    <Users className="mr-2 h-4 w-4" /> Total Students
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">1,248</div>
                  <p className="text-xs text-emerald-600 mt-1 flex items-center">
                    +12% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                    <FileText className="mr-2 h-4 w-4" /> Textbooks Processed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">45</div>
                  <p className="text-xs text-emerald-600 mt-1 flex items-center">
                    All State Board books added
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                    <Activity className="mr-2 h-4 w-4" /> Queries Answered
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">45.2k</div>
                  <p className="text-xs text-emerald-600 mt-1 flex items-center">
                    Using RAG & Context Pruning
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                    <Zap className="mr-2 h-4 w-4 text-amber-500" /> Avg Response
                    Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">1.2s</div>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center">
                    Optimized for slow networks
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>System Performance</CardTitle>
                  <CardDescription>
                    Vector Database & Embedding Status
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="font-medium">
                        Context Pruning Efficiency
                      </span>
                      <span className="text-muted-foreground">94%</span>
                    </div>
                    <Progress
                      value={94}
                      className="h-2 bg-muted"
                      indicatorClassName="bg-emerald-500"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      API costs reduced by sending minimal context to LLM.
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="font-medium">Vector DB Storage</span>
                      <span className="text-muted-foreground">42%</span>
                    </div>
                    <Progress
                      value={42}
                      className="h-2 bg-muted"
                      indicatorClassName="bg-primary"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      1.2GB used / 5GB allocated
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Recent Uploads (Processing Queue)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-primary opacity-80" />
                        <div>
                          <p className="font-medium text-sm">
                            Class 9 Mathematics
                          </p>
                          <p className="text-xs text-muted-foreground">
                            State Board English Medium
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-emerald-600 text-sm font-medium">
                        <CheckCircle2 className="h-4 w-4 mr-1" />
                        Ready
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
                      <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-muted-foreground opacity-80" />
                        <div>
                          <p className="font-medium text-sm">
                            Class 8 Social Science
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Extracting Text & Chunking...
                          </p>
                        </div>
                      </div>
                      <div className="w-24">
                        <Progress value={65} className="h-2" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Official Textbooks</CardTitle>
                <CardDescription>
                  Manage the knowledge base available to students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Book Title</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Chunks (Vector DB)</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        State Board Science
                      </TableCell>
                      <TableCell>Class 10</TableCell>
                      <TableCell>Science</TableCell>
                      <TableCell>1,245</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          Active
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Manage
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        State Board Mathematics
                      </TableCell>
                      <TableCell>Class 10</TableCell>
                      <TableCell>Math</TableCell>
                      <TableCell>2,108</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          Active
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Manage
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        State Board History
                      </TableCell>
                      <TableCell>Class 9</TableCell>
                      <TableCell>Social Studies</TableCell>
                      <TableCell>980</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          Active
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Manage
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students">
            <Card>
              <CardHeader>
                <CardTitle>Analytics coming soon</CardTitle>
                <CardDescription>
                  Detailed student engagement metrics will be available here.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
