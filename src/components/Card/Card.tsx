import { cn } from "@/src/utils/cn";

import { useState } from "react"; // Import useState hook
import { InfoLine } from "../InfoLine/InfoLine";
import { IPerson } from "@/src/types/Swapi.types";

export const Card = ({
  className,
  children,
  item,
}: {
  className?: string;
  children: React.ReactNode;
  item: IPerson;
}) => {
  return (
    <div
      className={cn(
        "border-transparent duration-900 text-white group relative z-0 flex h-full min-h-[230px] w-full transform items-center rounded-2xl border bg-black p-4 transition-transform hover:z-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn("text-zinc-100 mt-4 font-bold tracking-wide", className)}>{children}</h4>;
};

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn("text-zinc-400 mt-8 text-sm leading-relaxed tracking-wide", className)}>{children}</p>;
};

export const CardExtraInfoContainer = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className="invisible absolute left-0 top-0 flex  h-[380px] w-full items-center justify-center transition-all duration-300 ease-in-out group-hover:visible">
      <div className="border-transparent text-white invisible relative flex h-[380px] w-full transform items-center rounded-2xl border bg-black p-4 transition-transform duration-300 group-hover:visible">
        <div className="duration-900 invisible relative w-full transition-all ease-in-out group-hover:visible">
          <div className="invisible flex w-full flex-col gap-4 group-hover:visible">{children}</div>
        </div>
      </div>
    </div>
  );
};
