import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { madeForYouAlbums } from "@/lib/data";
import { motion } from "framer-motion";
import { CustomBreadcrumbs } from "@components/CustomBreadcrumbs";
import {
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
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const reviews = [
  {
    user: "Andre Spez",
    rating: 9.2,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque debitis, quasi quidem sunt mollitia ipsam quo natus nostrum commodi ea, quas ipsa placeat omnis ad eos cum! Exercitationem, assumenda sapiente. Nam officia esse, libero, quasi aliquam labore magni est ipsa facere expedita dolore tempora nesciunt dolor necessitatibus? Molestiae, eaque quam? Omnis dignissimos eaque quis quam nostrum illo fugiat in maiores.",
  },
  {
    user: "Andre Spez1",
    rating: 8.2,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque debitis, quasi quidem sunt mollitia ipsam quo natus nostrum commodi ea, quas ipsa placeat omnis ad eos cum! Exercitationem, assumenda sapiente. Nam officia esse, libero, quasi aliquam labore magni est ipsa facere expedita dolore tempora nesciunt dolor necessitatibus? Molestiae, eaque quam? Omnis dignissimos eaque quis quam nostrum illo fugiat in maiores.",
  },
  {
    user: "Andre Spez2",
    rating: 7.2,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque debitis, quasi quidem sunt mollitia ipsam quo natus nostrum commodi ea, quas ipsa placeat omnis ad eos cum! Exercitationem, assumenda sapiente. Nam officia esse, libero, quasi aliquam labore magni est ipsa facere expedita dolore tempora nesciunt dolor necessitatibus? Molestiae, eaque quam? Omnis dignissimos eaque quis quam nostrum illo fugiat in maiores.",
  },
  {
    user: "Andre Spez3",
    rating: 6.2,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque debitis, quasi quidem sunt mollitia ipsam quo natus nostrum commodi ea, quas ipsa placeat omnis ad eos cum! Exercitationem, assumenda sapiente. Nam officia esse, libero, quasi aliquam labore magni est ipsa facere expedita dolore tempora nesciunt dolor necessitatibus? Molestiae, eaque quam? Omnis dignissimos eaque quis quam nostrum illo fugiat in maiores.",
  },
  {
    user: "Andre Spez4",
    rating: 5.2,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque debitis, quasi quidem sunt mollitia ipsam quo natus nostrum commodi ea, quas ipsa placeat omnis ad eos cum! Exercitationem, assumenda sapiente. Nam officia esse, libero, quasi aliquam labore magni est ipsa facere expedita dolore tempora nesciunt dolor necessitatibus? Molestiae, eaque quam? Omnis dignissimos eaque quis quam nostrum illo fugiat in maiores.",
  },
];

export const Film = () => {
  const [, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);

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
          crumbs={[{ label: "Home", link: "/" }, { label: "Oppenheimer" }]}
        />
        <div className="flex items-center justify-between">
          <div className="flex gap-8">
            <img
              src="https://placehold.jp/250x333.png"
              width={250}
              height={330}
              className={
                "aspect-[3/4] h-auto w-auto min-w-[330px] overflow-hidden rounded-md object-cover transition-all"
              }
            />

            <div className="flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <h1 className="text-4xl font-bold tracking-tight">
                    Oppenheimer
                  </h1>
                </div>
                <div className="text-muted-foreground">
                  2001 | Thriller | Biography | Drama
                </div>
                <p className="text-muted-foreground">
                  During World War II, Lt. Gen. Leslie Groves Jr. appoints
                  physicist J. Robert Oppenheimer to work on the top-secret
                  Manhattan Project. Oppenheimer and a team of scientists spend
                  years developing and designing the atomic bomb. Their work
                  comes to fruition on July 16, 1945, as they witness the
                  world's first nuclear explosion, forever changing the course
                  of history.
                </p>
              </div>
              <div className="flex gap-5">
                <div className="flex items-center gap-1 text-5xl font-semibold">
                  <StarFilledIcon className="w-10 h-10 text-yellow-500" /> 9.5
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="text-md flex h-full w-full max-w-[250px] gap-2"
                      variant="outline"
                    >
                      <PlayIcon className="w-5 h-5" />
                      Trailer
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="flex h-full max-h-[85svh] max-w-[85vw] flex-col">
                    <DialogHeader>
                      <DialogTitle className="text-3xl text-center">
                        Oppenheimer
                      </DialogTitle>
                    </DialogHeader>

                    <iframe
                      className="w-full h-full"
                      src="https://rutube.ru/play/embed/dc9a910e6cdffad772e0b69da2a98160"
                      frameBorder="0"
                      allow="clipboard-write; autoplay"
                      allowFullScreen
                    />
                  </DialogContent>
                </Dialog>
                <Button className="w-12 h-full p-0" variant="outline">
                  <BookmarkIcon className="w-6 h-6" />
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
        <Separator className="my-4" />
        <div className="mb-4 space-y-1">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">
            Reviews
          </h2>
          <div className="grid grid-cols-[1fr,360px]">
            <div className="grid border-r h-fit">
              {reviews.map((review, i, arr) => (
                <div className="grid gap-3" key={review.user}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://placehold.jp/50x50"
                        alt={review.user}
                        width={40}
                        height={40}
                        className={
                          "block overflow-hidden rounded-[50%] object-cover"
                        }
                      />
                      <div className="font-medium">{review.user}</div>
                    </div>
                    <div className="flex items-center gap-1 pr-5 font-semibold">
                      <StarFilledIcon className="w-4 h-4 text-yellow-500" /> 9.5
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
            <div className="px-5">
              <h4 className="mb-4 text-xl font-medium">Leave your review</h4>
              <form className="grid gap-4">
                <div className="flex">
                  <Rating
                    emptyIcon={<StarIcon className="inline-block w-8 h-8" />}
                    fillIcon={
                      <StarFilledIcon className="inline-block w-8 h-8" />
                    }
                    iconsCount={10}
                    transition
                    allowFraction
                    onClick={handleRating}
                    onPointerEnter={onPointerEnter}
                    onPointerLeave={onPointerLeave}
                    onPointerMove={onPointerMove}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="review">Description</Label>
                  <Textarea
                    className="h-[200px] max-h-[500px]"
                    id="review"
                    placeholder="Please enter your review text."
                  />
                </div>
                <Button variant="default">Send review</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
