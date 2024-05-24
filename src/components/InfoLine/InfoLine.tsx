import { cn } from "@/src/utils/cn";

export function InfoLine({
  title,
  information,
  className,
}: {
  title: string;
  information: string;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full  items-center gap-[20px]", className)}>
      <span>{title}</span>
      <span>{information}</span>
    </div>
  );
}
