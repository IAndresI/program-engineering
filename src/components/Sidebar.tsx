import { Button } from "@/components/ui/button";

import { cn } from "@/utils/helpers";

const genres = [
  { label: "Комедии", link: "/", icon: "" },
  { label: "Мультфильмы", link: "/", icon: "" },
  { label: "Ужасы", link: "/", icon: "" },
  { label: "Фантастика", link: "/", icon: "" },
  { label: "Триллеры", link: "/", icon: "" },
  { label: "Боевики", link: "/", icon: "" },
  { label: "Мелодрамы", link: "/", icon: "" },
  { label: "Детективы", link: "/", icon: "" },
];

const library = [
  { label: "Новинки", link: "/", icon: "" },
  { label: "Избранное", link: "/", icon: "" },
  { label: "Актёры", link: "/", icon: "" },
  { label: "Ваши отзывы", link: "/", icon: "" },
];

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <aside className={cn("pb-12", className)}>
      <div className="py-4 space-y-4">
        <div className="px-3 py-2">
          <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">
            Фильмы
          </h2>
          <div className="space-y-1">
            {genres.map((genre) => (
              <Button
                key={genre.label}
                variant="ghost"
                className="justify-start w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 mr-2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                {genre.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">
            Бибилиотека
          </h2>
          <div className="space-y-1">
            {library.map((lib) => (
              <Button
                key={lib.label}
                variant="ghost"
                className="justify-start w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 mr-2"
                >
                  <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                  <circle cx="17" cy="7" r="5" />
                </svg>
                {lib.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
