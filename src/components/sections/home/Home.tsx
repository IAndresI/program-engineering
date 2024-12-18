import { FilmCard } from "@/components/FilmCard";
import { FilmSkeleton } from "@/components/skeletons/FilmSkeleton";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { getFilms } from "@/lib/queries/film";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

export const Home = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["films"],
    queryFn: () => getFilms(),
  });

  const bestFilms = data?.sort((a, b) => a.rating - b.rating).slice(0, 6);
  const newFilms = data
    ?.sort(
      (a, b) =>
        Number(new Date(a.release_date)) - Number(new Date(b.release_date)),
    )
    .slice(0, 6);

  return (
    <motion.section
      className="col-span-3 lg:col-span-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      key={"home"}
    >
      <div className="h-full px-4 py-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Best Films
            </h2>
            <p className="text-sm text-muted-foreground">
              Best Films in the world
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {isLoading
                ? new Array(5)
                    .fill(1)
                    .map((_, i) => (
                      <FilmSkeleton
                        className="h-[333px] w-[250px]"
                        key={`skeleton_${i}`}
                      />
                    ))
                : bestFilms?.map((film) => (
                    <FilmCard
                      key={film.name}
                      film={film}
                      className="w-[250px]"
                      aspectRatio="portrait"
                      width={250}
                      height={330}
                    />
                  ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <div className="mt-6 space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            New Releases
          </h2>
          <p className="text-sm text-muted-foreground">
            New big releases, from allover the world!
          </p>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {isLoading
                ? new Array(5)
                    .fill(1)
                    .map((_, i) => (
                      <FilmSkeleton
                        className="h-[150px] w-[150px]"
                        key={`skeleton_${i}`}
                      />
                    ))
                : newFilms?.map((film) => (
                    <FilmCard
                      key={film.name}
                      film={film}
                      className="w-[150px]"
                      aspectRatio="square"
                      width={150}
                      height={150}
                    />
                  ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};
