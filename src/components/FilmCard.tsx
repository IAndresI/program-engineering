import { StarFilledIcon } from "@radix-ui/react-icons";

import { cn } from "@/utils/helpers";

import { Album } from "@/lib/data";
import { Link } from "react-router-dom";

interface FilmCardProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function FilmCard({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: FilmCardProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <Link to="/film/1" className="block overflow-hidden rounded-md">
        <img
          src="https://placehold.jp/250x333.png"
          alt={album.name}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait"
              ? "aspect-[3/4] max-h-[333px]"
              : "aspect-square",
          )}
        />
      </Link>

      <div className="flex justify-between text-sm h-max">
        <div className="space-y-1">
          <Link to="/film/1" className="transition hover:text-primary/50">
            <h3 className="font-medium leading-none line-clamp-1">
              {album.name}
            </h3>
          </Link>

          <p className="text-xs text-muted-foreground">
            2024,{" "}
            <Link
              to="/films/genres/1"
              className="transition hover:text-primary"
            >
              comedy
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-1 h-fit">
          <StarFilledIcon className="text-yellow-500" /> 4.5
        </div>
      </div>
    </div>
  );
}
