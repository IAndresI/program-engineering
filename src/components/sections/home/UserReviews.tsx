import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { useUser } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import { UserReviewSkeleton } from "@/components/skeletons/UserReviewSkeleton";
import { getAllReviews } from "@/lib/queries/review";
import { UserReviewCard } from "@/components/UserReviewCard";

export const UserReviews = () => {
  const { user } = useUser();

  const { isLoading, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getAllReviews(),
  });

  const userReviews = data?.filter((review) => review.user === user?.id);

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
              Your Reviews
            </h2>
          </div>
        </div>
        <Separator className="my-4" />

        <div className="grid gap-5 pb-4">
          {isLoading
            ? new Array(5)
                .fill(1)
                .map((_, i, arr) => (
                  <UserReviewSkeleton
                    bottomSeparator={i !== arr.length - 1}
                    key={`skeleton_${i}`}
                  />
                ))
            : userReviews?.map((review, i, arr) => (
                <>
                  <UserReviewCard key={review.id} review={review} />
                  {i !== arr.length - 1 && <Separator className="mt-5" />}
                </>
              ))}
        </div>
      </div>
    </motion.section>
  );
};
