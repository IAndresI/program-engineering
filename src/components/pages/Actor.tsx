import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { madeForYouAlbums } from "@/lib/data";
import { motion } from "framer-motion";
import { CustomBreadcrumbs } from "../CustomBreadcrumbs";
import { FilmCard } from "../FilmCard";

export const Actor = () => {
  return (
    <motion.section
      className="col-span-3 lg:col-span-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      key={"home"}
    >
      <div className="h-full px-4 py-6 lg:px-8">
        <CustomBreadcrumbs
          className="mb-4"
          crumbs={[
            { label: "Home", link: "/" },
            { label: "Actors", link: "/actors" },
            { label: "Keanu Reeves" },
          ]}
        />
        <div className="flex items-center justify-between">
          <div className="flex gap-8">
            <img
              src="https://via.placeholder.com/250x333"
              width={100}
              height={100}
              className={
                "h-[150px] min-w-[150px] overflow-hidden rounded-[100%] object-cover transition-all"
              }
            />

            <div className="flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <h1 className="text-4xl font-bold tracking-tight">
                    Keanu Reeves
                  </h1>
                </div>
                <div className="text-muted-foreground">2001-10-10</div>
                <p className="text-muted-foreground">
                  Keanu Charles Reeves is a Canadian[d] actor and musician. He
                  is the recipient of numerous accolade in a career on screen
                  spanning four decades. In 2020, The New York Times ranked him
                  as the fourth-greatest actor of the 21st century, and in 2022
                  Time magazine named him one of the 100 most influential people
                  in the world. Reeves is known for his leading roles in action
                  films, his amiable public image, and his philanthropic
                  efforts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Films</h2>
          <p className="text-sm text-muted-foreground">
            {madeForYouAlbums.length} films
          </p>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea>
            <div className="flex pb-4 space-x-4">
              {madeForYouAlbums.map((album) => (
                <FilmCard
                  key={album.name}
                  album={album}
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
