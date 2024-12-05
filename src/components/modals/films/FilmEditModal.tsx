import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SvgDrama } from "../../ui/svg/genras/SvgDrama";
import { SvgComedy } from "../../ui/svg/genras/SvgComedy";
import { SvgFamily } from "../../ui/svg/genras/SvgFamily";
import { SvgHorror } from "../../ui/svg/genras/SvgHorror";
import { SvgFantasy } from "../../ui/svg/genras/SvgFantasy";
import { SvgThriller } from "../../ui/svg/genras/SvgThriller";
import { SvgAction } from "../../ui/svg/genras/SvgAction";
import { SvgAdventure } from "../../ui/svg/genras/SvgAdventure";
import { HomeIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { IFilm } from "@/types/IFilm";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/ui/multi-select";
import { DatePicker } from "@/components/ui/date-picker";

const genres = [
  {
    label: "Home",
    value: "1",
    icon: HomeIcon,
  },
  {
    label: "Comedy",
    value: "2",
    icon: SvgComedy,
  },
  {
    label: "Family friendly",
    value: "3",
    icon: SvgFamily,
  },
  {
    label: "Horror",
    value: "4",
    icon: SvgHorror,
  },
  {
    label: "Fantasy",
    value: "5",
    icon: SvgFantasy,
  },
  {
    label: "Thrillers",
    value: "6",
    icon: SvgThriller,
  },
  {
    label: "Action",
    value: "7",
    icon: SvgAction,
  },
  {
    label: "Melodramas",
    value: "8",
    icon: SvgDrama,
  },
  {
    label: "Adventures",
    value: "9",
    icon: SvgAdventure,
  },
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Film name must be at least 2 characters.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }),
  image: z
    .string()
    .regex(/^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim, {
      message: "Enter valid image url",
    }),
  genres: z
    .array(z.string())
    .min(1)
    .nonempty("Please select at least one genre."),
  release_date: z.date({
    message: "Enter film releas date",
  }),
  actors: z.array(z.number()),
  trailer_link: z
    .string()
    .min(1, { message: "Enter valid trailer url" })
    .optional(),
});

export const FilmEditModal = ({ film }: { film: IFilm }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  console.log(form.getValues());

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full justify-start" variant="ghost">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85svh] overflow-auto sm:max-w-[850px]">
        <DialogHeader>
          <DialogTitle>Edit film</DialogTitle>
          <DialogDescription>{film.name}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4"
          >
            <div className="grid h-fit gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Film name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter name..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Film description</FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[150px]"
                        placeholder="Enter description..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Film preview</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter image url..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="trailer_link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Film trailer</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter trailer url..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid h-fit gap-4">
              <FormField
                control={form.control}
                name="genres"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Genres</FormLabel>
                    <FormControl>
                      <MultiSelect
                        options={genres}
                        onValueChange={field.onChange}
                        defaultValue={field.value?.map((el) => String(el))}
                        placeholder="Select genres"
                        maxCount={4}
                        modalPopover
                        className="min-h-9"
                      />
                    </FormControl>
                    {/* <FormDescription>Choose all film genres.</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="release_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Release date</FormLabel>
                    <FormControl>
                      <DatePicker
                        buttonClassName="flex w-full justify-start min-h-6"
                        date={field.value}
                        setDate={field.onChange}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogTrigger asChild>
              <Button
                variant="secondary"
                className="mr-auto w-full max-w-[200px]"
                type="button"
              >
                Close
              </Button>
            </DialogTrigger>
            <Button className="ml-auto w-full max-w-[200px]" type="submit">
              Save changes
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
