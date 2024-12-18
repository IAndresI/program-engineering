import { StarFilledIcon } from "@radix-ui/react-icons";

import { cn } from "@/utils/helpers";

import { Link } from "react-router-dom";
import { IFilm } from "@/types/IFilm";

interface FilmCardProps extends React.HTMLAttributes<HTMLDivElement> {
  film: IFilm;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function FilmCard({
  film,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: FilmCardProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <Link
        to={`/film/${film.id}`}
        className="block overflow-hidden rounded-md"
      >
        <img
          src={film.image}
          alt={film.name}
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

      <div className="flex h-max justify-between text-sm">
        <div className="space-y-1">
          <Link to="/film/1" className="transition hover:text-primary/50">
            <h3 className="line-clamp-1 font-medium leading-none">
              {film.name}
            </h3>
          </Link>

          <p className="text-xs text-muted-foreground">
            {new Date(film.release_date).getFullYear()},{" "}
            <ul className="inline">
              {film.genres.map((genre, i, arr) => (
                <Link
                  to={`/films/genres/${genre.id}`}
                  className="transition hover:text-primary"
                >
                  {genre.name} {i !== arr.length - 1 && ", "}
                </Link>
              ))}
            </ul>
          </p>
        </div>
        <div className="flex h-fit items-center gap-1">
          <StarFilledIcon className="text-yellow-500" /> {film.rating}
        </div>
      </div>
    </div>
  );
}
