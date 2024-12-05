import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SvgActor } from "../ui/svg/SvgActor";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DataTableViewOptions } from "./data-table-view-options";

export const statuses = [
  {
    value: "1",
    label: "Thriller",
    icon: SvgActor,
  },
  {
    value: "todo",
    label: "Todo",
    icon: SvgActor,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: SvgActor,
  },
  {
    value: "done",
    label: "Done",
    icon: SvgActor,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: SvgActor,
  },
];

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center flex-1 space-x-2">
        <Input
          placeholder="Search..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("genres") && (
          <DataTableFacetedFilter
            column={table.getColumn("genres")}
            title="Genres"
            options={statuses}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
