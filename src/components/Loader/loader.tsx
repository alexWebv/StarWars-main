import { cn } from "@/src/utils/cn";
import { LoaderPinwheel } from "lucide-react";

export function LoaderComponent({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-full w-full", className)}>
      <LoaderPinwheel className=" infinite absolute left-1/2 top-1/2  animate-spin " />
    </div>
  );
}
