import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Button } from "@components/ui/button";
import { Link } from "react-router-dom";
import { StarFilledIcon } from "@radix-ui/react-icons";

const reviews = [1, 2, 3, 4, 5, 6];

export const UserReviews = () => {
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
          {reviews.map((review, i, arr) => (
            <div>
              <div className="mb-3 flex justify-between text-xl font-semibold">
                Oppenheimer{" "}
                <div className="flex items-center gap-1 font-semibold">
                  <StarFilledIcon className="h-5 w-5 text-yellow-500" /> 9.5
                </div>
              </div>
              <div className="flex gap-5" key={review}>
                <div className="flex w-[150px] min-w-[150px] flex-col gap-3">
                  <Link
                    to="/film/1"
                    className="block overflow-hidden rounded-md"
                  >
                    <img
                      src="https://placehold.jp/250x333.png"
                      alt={"film"}
                      width={150}
                      height={200}
                      className={
                        "block aspect-[3/4] overflow-hidden object-cover transition-all hover:scale-105"
                      }
                    />
                  </Link>

                  <div className="grid grid-cols-2 gap-3">
                    <Button className="text-xs" variant="secondary">
                      Change
                    </Button>
                    <Button className="text-xs" variant="destructive">
                      Delete
                    </Button>
                  </div>
                </div>
                <p className="pr-5 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error eligendi explicabo, quisquam dolorem expedita eveniet
                  quam omnis corrupti quo, earum porro dolores totam. Magni
                  porro saepe necessitatibus nemo asperiores debitis? Dicta
                  corporis sit aut reiciendis iusto maiores magnam deleniti.
                  Vel, expedita a soluta eveniet aperiam dignissimos quas optio,
                  labore veniam et corrupti at? Velit voluptatem omnis ea
                  dolorum pariatur facere. Vitae at iusto aut incidunt explicabo
                  alias aliquid fuga quasi nam autem quos, culpa cumque quam
                  deleniti, ea rerum perspiciatis veniam! Accusamus perferendis,
                  architecto harum deserunt earum voluptates doloribus in.
                </p>
              </div>
              {i !== arr.length - 1 && <Separator className="mt-5" />}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
