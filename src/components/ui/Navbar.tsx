import { Moon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export default function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* left side */}
      collapseButton
      {/* right side */}
      <div className="flex items-center gap-4">
        <Link href={"/"}>Dashboard</Link>
        <Moon />
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/58094597?s=400&u=a41c33c3968bac28de0523e673864bf6204238c9&v=4" />
          <AvatarFallback>Ripon</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
