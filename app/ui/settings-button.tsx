import React from "react";
import Link from "next/link";

export default function SettingsButton({
  icon,
  text,
  href
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center gap-y-3">
        {icon}
        <p className="text-center">{text}</p>
      </div>
    </Link>
  );
}