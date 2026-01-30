import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { svg } from "./svgs";

export default function AvatarGroupExample() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex gap-2">
        <div>{svg.svg4}</div>
        <div>{svg.svg4}</div>
        <div>{svg.svg4}</div>
        <div>{svg.svg4}</div>
        <div>{svg.svg4}</div>
      </div>
      <p className="text-white text-sm">Trusted by 1000+ students</p>

      <AvatarGroup className="grayscale">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  );
}
