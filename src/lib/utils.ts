import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatGuestName(value?: string) {
  if (!value) {
    return "Bapak/Ibu/Saudara/i";
  }

  return decodeURIComponent(value.replace(/\+/g, " ")).trim() || "Bapak/Ibu/Saudara/i";
}

export function assetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}${path}`;
}
