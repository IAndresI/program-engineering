import { columns } from "@/components/tables/films/columns";
import { FilmsTable } from "@/components/tables/films/films-table";
import { Separator } from "@/components/ui/separator";
import { IFilm } from "@/types/IFilm";
import { motion } from "framer-motion";

const tempFilms: IFilm[] = [
  {
    id: 1,
    name: "Oppenghamer",
    rating: 9.5,
    description: "sd",
    image: "https://placehold.jp/250x333.png",
    genres: [
      { id: 1, name: "Thriller", image: "https://placehold.jp/250x333.png" },
      { id: 2, name: "Historical", image: "https://placehold.jp/250x333.png" },
      { id: 3, name: "Horror", image: "https://placehold.jp/250x333.png" },
    ],
    release_date: "2023-10-10",
    created_at: "2024-05-05",
    actors: [
      {
        id: 1,
        name: "Keanu reavse",
        image: "https://placehold.jp/250x333.png",
        description: "sdfasda",
        birthday: "1986-05-05",
      },
    ],
    trailer_link: "https://placehold.jp/250x333.png",
  },
];

export const AdminFilms = () => {
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
            <h2 className="text-2xl font-semibold tracking-tight">Films</h2>
          </div>
        </div>
        <Separator className="my-4" />

        <FilmsTable columns={columns} data={tempFilms} />
      </div>
    </motion.section>
  );
};
