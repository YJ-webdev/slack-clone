"use client";

import { TooltipContent } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface HintProps {
  label: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "end" | "center";
}

export const Hint = ({ label, children, side, align }: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          className="bg-black rounded-sm p-1 text-white border border-white/5 z-30"
        >
          <p className="font-medium text-xs mx-1">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
