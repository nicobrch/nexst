import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeString(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function constructPath(index: number, pathSegments: string[]) {
  return "/" + pathSegments.slice(0, index + 1).join("/");
}
