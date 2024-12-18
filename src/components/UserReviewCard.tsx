import { IAllReviews } from "@/types/IReview";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getFilm } from "@/lib/queries/film";
import { deleteReview } from "@/lib/queries/review";
import { ReviewModal } from "./modals/reviews/ReviewModal";

interface IUserReviewCardProps {
  review: IAllReviews;
}

export const UserReviewCard = ({ review }: IUserReviewCardProps) => {
  const queryClient = useQueryClient();

  const { data: film } = useQuery({
    queryKey: ["film", review.movie],
    queryFn: () => getFilm(review.movie),
  });
  const { mutate: deleteReviewMutate, isPending: isDeletingReview } =
    useMutation({
      mutationFn: deleteReview,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["reviews"] });
      },
    });

  return (
    <div>
      <div className="mb-3 flex justify-between text-xl font-semibold">
        {film?.name}
        <div className="flex items-center gap-1 font-semibold">
          <StarFilledIcon className="h-5 w-5 text-yellow-500" />
          {review.rating}
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex w-[150px] min-w-[150px] flex-col gap-3">
          <Link
            to={`/film/${film?.id}`}
            className="block overflow-hidden rounded-md"
          >
            <img
              src={film?.image}
              alt={"film"}
              width={150}
              height={200}
              className={
                "block aspect-[3/4] overflow-hidden object-cover transition-all hover:scale-105"
              }
            />
          </Link>

          <div className="grid grid-cols-2 gap-3">
            <ReviewModal review={review}>
              <Button
                disabled={isDeletingReview}
                className="text-xs"
                variant="secondary"
              >
                Change
              </Button>
            </ReviewModal>

            <Button
              disabled={isDeletingReview}
              onClick={() => deleteReviewMutate(review.id)}
              className="text-xs"
              variant="destructive"
            >
              Delete
            </Button>
          </div>
        </div>
        <p className="pr-5 text-sm text-muted-foreground">{review.text}</p>
      </div>
    </div>
  );
};
