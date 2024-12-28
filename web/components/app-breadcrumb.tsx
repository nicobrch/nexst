"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { capitalizeString, constructPath } from "@/lib/utils";

export function AppBreadcrumb() {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        {pathSegments.map((segment, index) => {
          if (index === 0) {
            return null; // Skip the first segment (dashboard)
          }
          return (
            <div key={index} className="flex items-center space-x-2">
              <BreadcrumbSeparator />
              <BreadcrumbItem key={index}>
                <BreadcrumbLink asChild>
                  <Link href={constructPath(index, pathSegments)}>
                    {capitalizeString(segment)}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
