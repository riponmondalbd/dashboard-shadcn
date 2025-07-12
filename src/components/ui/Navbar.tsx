import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Moon, Settings, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* left side */}
      collapseButton
      {/* right side */}
      <div className="flex items-center gap-4">
        <Link href={"/"}>Dashboard</Link>
        <Moon />

        <DropdownMenu>
          <DropdownMenuTrigger>
            {" "}
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/58094597?s=400&u=a41c33c3968bac28de0523e673864bf6204238c9&v=4" />
              <AvatarFallback>Ripon</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10} align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
