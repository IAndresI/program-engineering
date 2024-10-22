import { Separator } from "@/components/ui/separator";

import { FilmCard } from "@components/FilmCard";

import { listenNowAlbums } from "@/lib/data";
import { motion } from "framer-motion";
import { Button } from "@components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

export const UserFavorites = () => {
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
              Your favorite movies
            </h2>
          </div>
        </div>
        <Separator className="my-4" />

        <div className="grid grid-cols-4 gap-4 pb-4 place-items-center xl:grid-cols-5">
          {listenNowAlbums.map((album, i) => (
            <div className="relative" key={`${i}_${album.name}`}>
              <Button
                className="absolute z-10 w-10 h-10 p-0 right-2 top-2"
                variant="outline"
              >
                <BookmarkFilledIcon className="w-5 h-5" />
              </Button>
              <FilmCard
                key={`${i}_${album.name}`}
                album={album}
                className="w-[180px] 2xl:w-[200px]"
                aspectRatio="portrait"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
