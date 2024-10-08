import { Separator } from "@/components/ui/separator";

import { FilmCard } from "../FilmCard";

import { madeForYouAlbums } from "@/lib/data";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ScrollBar } from "../ui/scroll-area";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ActorCard } from "../ActorCard";

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const URLSearchText = searchParams.get("query");
    if (URLSearchText) {
      setSearchText(URLSearchText);
    } else {
      setSearchText("");
    }
  }, [location.search]);

  return (
    <motion.section
      className="col-span-3 lg:col-span-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      key={"home"}
    >
      <div className="h-full px-4 py-6 lg:px-8">
        <div className="flex items-center justify-between mb-2">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Search{" "}
              {searchParams.get("query") && (
                <>
                  for:{" "}
                  <span className="font-normal">
                    {searchParams.get("query")}
                  </span>
                </>
              )}
            </h2>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            searchParams.set("query", searchText);
            setSearchParams(searchParams);
          }}
          className="flex w-full max-w-[500px] items-center gap-3 pb-4"
        >
          <Input
            type="search"
            placeholder="Enter text..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            autoFocus
          />
          <Button
            type="submit"
            className="flex items-center gap-2 px-2"
            variant="default"
          >
            <MagnifyingGlassIcon className="w-6 h-6" />
          </Button>
        </form>{" "}
        <Separator className="mb-4" />
        <div className="mt-6 space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Actors</h2>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea>
            <div className="flex pb-4 space-x-4">
              {madeForYouAlbums.map((album) => (
                <ActorCard
                  key={album.name}
                  album={album}
                  className="w-[100px]"
                  aspectRatio="square"
                  width={100}
                  height={100}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <div className="mt-6 space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Films</h2>
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
