import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { motion } from "framer-motion";
import { CustomBreadcrumbs } from "@components/CustomBreadcrumbs";
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  PlayIcon,
  StarFilledIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ActorCard } from "@components/ActorCard";
import { Button } from "@components/ui/button";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getFilm } from "@/lib/queries/film";
import { SvgSpinner } from "@/components/ui/svg/SvgSpinner";
import { Badge } from "@/components/ui/badge";
import { createReview, editReview, getAllReviews } from "@/lib/queries/review";
import { useUser } from "@clerk/clerk-react";
import { IAllReviews } from "@/types/IReview";
import {
  addUserFavorites,
  getUserFavorites,
  removeUserFavorites,
} from "@/lib/queries/user";

export const Film = () => {
  const { id } = useParams();
  const { user } = useUser();
  const queryClient = useQueryClient();

  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [userReview, setUserReview] = useState<IAllReviews>();

  const [isInFavorite, setIsInFavorite] = useState(false);

  const { isLoading: isFilmLoading, data: film } = useQuery({
    queryKey: ["film", id],
    queryFn: () => getFilm(+id!),
    enabled: !!id,
  });

  const { isLoading: isReviewsLoading, data: reviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getAllReviews(),
  });
  const { isLoading: isUserFavoritesLoading, data: userFavorites } = useQuery({
    queryKey: ["favorites", user?.id],
    queryFn: () => getUserFavorites(user!.id),
    enabled: !!user?.id,
  });

  const { mutate: addUserFavoritesMutate, isPending: isAddingInfavorite } =
    useMutation({
      mutationFn: addUserFavorites,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["favorites"] });
      },
    });

  const { mutate: removeUserFavoritesMutate, isPending: isRemovingfavorite } =
    useMutation({
      mutationFn: removeUserFavorites,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["favorites"] });
      },
    });

  const { mutate: createReviewMutate, isPending: isCreatingReview } =
    useMutation({
      mutationFn: createReview,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["reviews"] });
      },
    });

  const { mutate: editReviewMutate, isPending: isEditingReview } = useMutation({
    mutationFn: editReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });

  useEffect(() => {
    if (userFavorites) {
      const userFavorite = userFavorites.find(
        (favFilm) => favFilm.id === film?.id,
      );

      if (userFavorite) {
        setIsInFavorite(true);
      } else {
        setIsInFavorite(false);
      }
    }
  }, [userFavorites, film]);

  useEffect(() => {
    if (reviews && user) {
      const userReview = reviews.find(
        (review) => review.movie === film?.id && user.id === review.user,
      );
      if (userReview) {
        setUserReview(userReview);
        setReviewRating(userReview.rating);
        setReviewText(userReview.text);
      } else {
        setUserReview(undefined);
      }
    }
  }, [reviews, film, user]);

  const onReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userReview) {
      editReviewMutate({
        id: userReview.id,
        text: reviewText,
        rating: reviewRating,
        movie: userReview.movie,
        user: userReview.user,
      });
    } else {
      if (user && film) {
        createReviewMutate({
          user: user.id,
          movie: film.id,
          text: reviewText,
          rating: reviewRating,
        });
      }
    }
  };

  const handleRating = (rate: number) => {
    setReviewRating(rate);
  };

  const filmReviews = reviews?.filter((review) => review.movie === film?.id);

  return (
    <motion.section
      className="col-span-3 lg:col-span-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      key={"home"}
    >
      {isFilmLoading && <SvgSpinner className="mx-auto h-10 w-10" />}
      {film && user ? (
        <div className="h-full px-4 py-6 lg:px-8">
          <CustomBreadcrumbs
            className="mb-4"
            crumbs={[{ label: "Home", link: "/" }, { label: "Oppenheimer" }]}
          />
          <div className="flex items-center justify-between">
            <div className="flex gap-8">
              <img
                src={film.image}
                width={250}
                height={330}
                className={
                  "aspect-[3/4] h-auto w-auto max-w-[330px] overflow-hidden rounded-md object-cover transition-all"
                }
              />

              <div className="flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <h1 className="text-4xl font-bold tracking-tight">
                      {film.name}
                    </h1>
                  </div>
                  <div className="text-muted-foreground">
                    {new Date(film.release_date).getFullYear()} |{" "}
                    {film.genres.map((genre) => (
                      <Badge key={genre.id}>{genre.name}</Badge>
                    ))}
                  </div>
                  <p className="text-muted-foreground">{film.description}</p>
                </div>
                <div className="flex gap-5">
                  <div className="flex items-center gap-1 text-5xl font-semibold">
                    <StarFilledIcon className="h-10 w-10 text-yellow-500" />{" "}
                    {film.rating}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="text-md flex h-full w-full max-w-[250px] gap-2"
                        variant="outline"
                      >
                        <PlayIcon className="h-5 w-5" />
                        Trailer
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="flex h-full max-h-[85svh] max-w-[85vw] flex-col">
                      <DialogHeader>
                        <DialogTitle className="text-center text-3xl">
                          {film.name}
                        </DialogTitle>
                      </DialogHeader>
                      <iframe
                        className="h-full w-full"
                        src={film.trailer_link}
                        frameBorder="0"
                        allow="clipboard-write; autoplay"
                        allowFullScreen
                      />
                    </DialogContent>
                  </Dialog>
                  <Button
                    onClick={() =>
                      isInFavorite
                        ? removeUserFavoritesMutate({
                            userId: user.id,
                            filmId: film.id,
                          })
                        : addUserFavoritesMutate({
                            userId: user.id,
                            filmId: film.id,
                          })
                    }
                    disabled={
                      isUserFavoritesLoading ||
                      isAddingInfavorite ||
                      isRemovingfavorite
                    }
                    className="h-full w-12 p-0 px-5"
                    variant="outline"
                  >
                    {isInFavorite ? (
                      <BookmarkFilledIcon className={`h-6 w-6`} />
                    ) : (
                      <BookmarkIcon className={`h-6 w-6`} />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="mb-4 space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">Actors</h2>
          </div>
          <div className="relative">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {film.actors.map((actor) => (
                  <ActorCard
                    key={actor.name}
                    actor={actor}
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
          <Separator className="my-4" />
          <div className="mb-4 space-y-1">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight">
              Reviews
            </h2>
            {isReviewsLoading && <SvgSpinner className="mx-auto h-10 w-10" />}

            <div className="grid grid-cols-[1fr,360px]">
              {filmReviews && filmReviews?.length > 0 ? (
                <div className="grid h-fit border-r">
                  {filmReviews.map((review, i, arr) => (
                    <div className="grid gap-3" key={review.id}>
                      <div className="flex items-center justify-between">
                        {/* <div className="flex items-center gap-3">
                          <img
                            src={review.user.avatar}
                            alt={review.user.name}
                            width={40}
                            height={40}
                            className={
                              "block overflow-hidden rounded-[50%] object-cover"
                            }
                          />
                          <div className="font-medium">{review.user.name}</div>
                        </div> */}
                        <div className="flex items-center gap-1 pr-5 font-semibold">
                          <StarFilledIcon className="h-4 w-4 text-yellow-500" />{" "}
                          {review.rating}
                        </div>
                      </div>
                      <p className="pr-5 text-sm text-muted-foreground">
                        {review.text}
                      </p>
                      <Separator
                        className={i !== arr.length - 1 ? "my-4" : "mt-4"}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                "No reviews"
              )}
              <div className="px-5">
                <h4 className="mb-4 text-xl font-medium">
                  {userReview ? "Your review" : "Leave your review"}
                </h4>
                <form onSubmit={onReviewSubmit} className="grid gap-4">
                  <div className="flex">
                    <Rating
                      emptyIcon={<StarIcon className="inline-block h-8 w-8" />}
                      fillIcon={
                        <StarFilledIcon className="inline-block h-8 w-8" />
                      }
                      iconsCount={10}
                      transition
                      initialValue={reviewRating}
                      allowFraction
                      onClick={handleRating}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="review">Description</Label>
                    <Textarea
                      className="h-[200px] max-h-[500px]"
                      id="review"
                      placeholder="Please enter your review text."
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                    />
                  </div>
                  <Button
                    disabled={isCreatingReview || isEditingReview}
                    type="submit"
                    variant="default"
                  >
                    {userReview ? "Edit review" : "Submit"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "No Info"
      )}
    </motion.section>
  );
};
