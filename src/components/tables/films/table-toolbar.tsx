import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { TableViewOptions } from "../../ui/table/table-view-options";

import { TableFacetedFilter } from "../../ui/table/table-faceted-filter";
import { SvgActor } from "../../ui/svg/SvgActor";

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

interface TableToolbarProps<TData> {
  table: Table<TData>;
}

export function TableToolbar<TData>({ table }: TableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("genres") && (
          <TableFacetedFilter
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
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <TableViewOptions table={table} />
    </div>
  );
}
