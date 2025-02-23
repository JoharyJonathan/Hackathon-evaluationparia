import { LayoutGrid } from 'lucide-react'
import ScrollArea from "../components/ui/Scrollarea"
import Button from "../components/ui/Button"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/10">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary" />
            <span className="font-semibold">GenerativeAgent</span>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-64px)]">
          <nav className="space-y-2 p-4">
            <Button variant="ghost" className="w-full justify-start">
              <LayoutGrid className="mr-2 h-4 w-4" />
              Tasks
            </Button>
          </nav>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-14 border-b px-4 flex items-center justify-between">
            <h1 className="text-sm font-medium">Voice conversation</h1>
          </header>
          {children}
        </div>
      </div>
    </div>
  )
}

