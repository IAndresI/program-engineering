import { SlashIcon } from "@radix-ui/react-icons";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

interface ICustomBreadcrumbsProps
  extends React.ComponentPropsWithoutRef<"nav"> {
  crumbs: {
    label: string;
    link?: string;
  }[];
}

export const CustomBreadcrumbs = ({
  crumbs,
  ...props
}: ICustomBreadcrumbsProps) => {
  return (
    <Breadcrumb {...props}>
      <BreadcrumbList>
        {crumbs.map((crumb) =>
          crumb.link ? (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={crumb.link}>{crumb.label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
            </>
          ) : (
            <BreadcrumbItem>
              <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
            </BreadcrumbItem>
          ),
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
