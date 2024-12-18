import { Separator } from "@/components/ui/separator";

import { motion } from "framer-motion";
import { ActorCard } from "@components/ActorCard";
import { useQuery } from "@tanstack/react-query";
import { getActors } from "@/lib/queries/actors";
import { ActorSkeleton } from "@/components/skeletons/ActorSkeleton";

export const Actors = () => {
  const { isLoading, data, isSuccess } = useQuery({
    queryKey: ["actors"],
    queryFn: getActors,
  });

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
          {isLoading &&
            new Array(14)
              .fill(1)
              .map((_, i) => (
                <ActorSkeleton
                  className="h-[150px] w-[150px]"
                  key={`skeleton_actor_${i}`}
                />
              ))}
          {data &&
            data.length > 0 &&
            data.map((actor) => (
              <ActorCard
                key={actor.name}
                actor={actor}
                aspectRatio="square"
                width={100}
                height={100}
              />
            ))}
          {isSuccess && data && data.length === 0 && "No Info"}
        </div>
      </div>
    </motion.section>
  );
};
