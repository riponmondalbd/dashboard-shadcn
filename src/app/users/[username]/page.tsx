import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";

export default function singleUserPage() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Ripon Mondal</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* container */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* left */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* user badges container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* information container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Information</h1>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={66} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>Ripon Mondal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>contact.riponmondal@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>
                <span>+880 123 456 7890</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Address:</span>
                <span>Saver, Dhaka</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 2025.01.01
            </p>
          </div>
          {/* card list container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        {/* right */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* user card container */}
          <div className="bg-primary-foreground p-4 rounded-lg">User Card</div>
          {/* chart container */}
          <div className="bg-primary-foreground p-4 rounded-lg">Card</div>
        </div>
      </div>
    </div>
  );
}
