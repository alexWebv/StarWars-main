import { cn } from "@/src/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Card, CardTitle, CardExtraInfoContainer } from "../../components/Card/Card";
import { IPerson } from "@/src/types/Swapi.types";
import { InfoLine } from "@/src/components/InfoLine/InfoLine";

export const HoverCleverGrids = ({ items, className }: { items: IPerson[]; className?: string }) => {
  // State to keep track of the currently hovered item index
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    // Container div for the grid layout
    <div className={cn("grid w-full grid-cols-1 justify-center  md:grid-cols-2 lg:grid-cols-5", className)}>
      {/* Iterate over the items array and render each item */}
      {items.map((item, idx) => (
        <Link
          href={`/dashboard/${item?.id}`} // Link to the dashboard page for the item
          key={item?.id}
          className="group relative flex h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)} // Set hoveredIndex on mouse enter
          onMouseLeave={() => setHoveredIndex(null)} // Reset hoveredIndex on mouse leave
        >
          <AnimatePresence>
            {/* Conditionally render the hover background animation */}
            {hoveredIndex === idx && (
              <motion.span
                className="dark:bg-slate-800/[0.8] z-15 bg-purple-grad absolute inset-0 block h-[400px] w-full rounded-3xl"
                layoutId="hoverBackground"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.15,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.15,
                    delay: 0.2,
                  },
                }}
              />
            )}
          </AnimatePresence>

          {/* Render the Card component for the item */}
          <Card item={item}>
            <CardTitle>{item.name}</CardTitle> {/* Render the card title */}
            <CardExtraInfoContainer>
              <CardTitle>{item?.name}</CardTitle> {/* Render the card title again */}
              <InfoLine title={"Height:"} information={item?.height} /> {/* Render item details */}
              <InfoLine title={"Mass:"} information={item?.mass} />
              <InfoLine title={"Skin color:"} information={item?.skin_color} />
              <InfoLine title={"Eye color:"} information={item?.eye_color} />
              <InfoLine title={"Birth year:"} information={item?.birth_year} />
              <InfoLine title={"Gender:"} information={item?.gender} />
              <span className="text-xl text-[#4f71d9] text-[600]">Click to know more</span> {/* Call to action */}
            </CardExtraInfoContainer>
          </Card>
        </Link>
      ))}
    </div>
  );
};
