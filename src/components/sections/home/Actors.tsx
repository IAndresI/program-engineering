import { Separator } from "@/components/ui/separator";

import { madeForYouAlbums } from "@/lib/data";
import { motion } from "framer-motion";
import { ActorCard } from "@components/ActorCard";

export const Actors = () => {
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
            <h2 className="text-2xl font-semibold tracking-tight">Actors</h2>
          </div>
        </div>
        <Separator className="my-4" />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,150px))] place-items-center justify-between gap-5 pb-4">
          {[...madeForYouAlbums, ...madeForYouAlbums, ...madeForYouAlbums].map(
            (album) => (
              <ActorCard
                key={album.name}
                album={album}
                aspectRatio="square"
                width={100}
                height={100}
              />
            ),
          )}
        </div>
      </div>
    </motion.section>
  );
};
