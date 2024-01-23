"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();

  return (
    <div className="bg-background dark:bg-[#1F1F1F] px-3 py-2 flex items-center justify-end w-full">
      <Button size="sm" onClick={() => router.push("/")}>
        Try Wotion For Free
      </Button>
    </div>
  );
};
