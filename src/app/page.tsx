import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button variant={"destructive"} size={"xl"}>
        <CirclePlus />
        Click Me
      </Button>
    </div>
  );
}
