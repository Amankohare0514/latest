import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import MenuIcon from '@mui/icons-material/Menu';
import MessageIcon from '@mui/icons-material/Message';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 mt-6">
      <div className="w-full max-w-7xl mx-auto px-4 flex items-center h-14">
        <Link className="mr-auto" href="#">
          <FlagIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <Link className="font-medium text-sm hover:text-gray-500 hover:dark:text-gray-600 hidden lg:inline-block" href="#">
            About
          </Link>
          <Link className="font-medium text-sm hover:text-gray-500 hover:dark:text-gray-600 hidden lg:inline-block" href="#">
            Skills
          </Link>
          <Link className="font-medium text-sm hover:text-gray-500 hover:dark:text-gray-600 hidden lg:inline-block" href="#">
            Contact
          </Link>
          <Link className="font-medium text-sm hover:text-gray-500 hover:dark:text-gray-600hidden lg:inline-block" href="#">
            Blog
          </Link>
          <Link className="font-medium text-sm hover:text-gray-500 hover:dark:text-gray-600 hidden lg:inline-block" href="#">
            Experience
          </Link>
        <MessageIcon/>
       <GitHubIcon/>
         <XIcon/>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ModeToggle />
          </ThemeProvider>
  
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <MenuIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="right">
                <DropdownMenuItem>
                  <Link className="font-medium text-sm hover:underline" href="#">
                    About
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="font-medium text-sm hover:underline" href="#">
                    Skills
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="font-medium text-sm hover:underline" href="#">
                    Contact
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="font-medium text-sm hover:underline" href="#">
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="font-medium text-sm hover:underline" href="#">
                    Experience
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}

function FlagIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}
