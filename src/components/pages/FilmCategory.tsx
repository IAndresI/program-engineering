import { Separator } from "@/components/ui/separator";

import { FilmCard } from "../FilmCard";

import { listenNowAlbums } from "@/lib/data";
import { motion } from "framer-motion";

export const FilmCategory = () => {
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
            <h2 className="text-2xl font-semibold tracking-tight">Triller</h2>
          </div>
        </div>
        <Separator className="my-4" />

        <div className="grid grid-cols-4 gap-4 pb-4 place-items-center xl:grid-cols-5">
          {[
            ...listenNowAlbums,
            ...listenNowAlbums,
            ...listenNowAlbums,
            ...listenNowAlbums,
            ...listenNowAlbums,
            ...listenNowAlbums,
            ...listenNowAlbums,
          ].map((album, i) => (
            <FilmCard
              key={`${i}_${album.name}`}
              album={album}
              className="w-[180px] 2xl:w-[200px]"
              aspectRatio="portrait"
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
