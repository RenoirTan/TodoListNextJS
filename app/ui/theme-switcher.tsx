"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) return null;

  return (
    <div className="flex flex-row items-center">
      <Switch
        defaultSelected={theme == "dark"}
        onValueChange={(isSelected) => setTheme(isSelected ? "dark" : "light")}
        color="secondary"
        thumbIcon={({ isSelected, className }) => {
          return (
            <div className="h-[1em] w-[1em] flex flex-row items-center">{
              isSelected ? (
                <MoonIcon className={className} />
              ) : (
                <SunIcon className={className} />
              )
            }</div>
          );
        }}
      />
    </div>
  )
}