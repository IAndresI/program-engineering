import { cn } from "@/utils/helpers";

import { Album } from "@/lib/data";
import { Link } from "react-router-dom";

interface ActorCardProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function ActorCard({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: ActorCardProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <Link to="/actors/1" className="block overflow-hidden rounded-[50%]">
        <img
          src="https://placehold.co/250x333"
          alt={album.name}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
          )}
        />
      </Link>

      <div className="flex h-max justify-between text-sm">
        <div className="space-y-1">
          <Link to="/actors/1" className="transition hover:text-primary/50">
            <h3 className="font-medium leading-none">{album.name}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
