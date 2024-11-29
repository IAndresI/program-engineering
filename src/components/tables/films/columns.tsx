import { ColumnDef } from "@tanstack/react-table";
import { TableColumnHeader } from "./table-column-header";
import { TableRowActions } from "./table-row-actions";
import { IFilm } from "@/types/IFilm";
import { IGenre } from "@/types/IGenre";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<IFilm>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <TableColumnHeader column={column} title="ID" />,
    cell: ({ row }) => <div>{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: ({ column }) => <TableColumnHeader column={column} title="Image" />,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <img className="w-10 h-10 rounded" src={row.getValue("image")} />
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <TableColumnHeader column={column} title="Name" />,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <TableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <p className="max-w-[500px] truncate font-medium">
            {row.getValue("description")}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "genres",
    header: ({ column }) => (
      <TableColumnHeader column={column} title="Genres" />
    ),
    cell: ({ row }) => {
      const genres = row.getValue("genres") as IGenre[];

      return (
        <div className="flex max-w-[300px] flex-wrap items-center gap-1">
          {genres.map((genre) => (
            <Badge>{genre.name}</Badge>
          ))}
        </div>
      );
    },
    filterFn: (row, __, value) => {
      return value.some((genre: number) =>
        row.original.genres.find((el) => +el.id === +genre),
      );
    },
  },
  {
    accessorKey: "release_date",
    header: ({ column }) => (
      <TableColumnHeader column={column} title="Release date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">{row.getValue("release_date")}</div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "rating",
    header: ({ column }) => (
      <TableColumnHeader column={column} title="Rating" />
    ),
    cell: ({ row }) => {
      return <div className="flex items-center">{row.getValue("rating")}</div>;
    },
    enableSorting: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <TableRowActions row={row} />,
  },
];
