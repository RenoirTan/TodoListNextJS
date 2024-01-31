"use client";

import React from "react";

export default function CredentialsForm({
  children,
  formState,
  dispatch
}: {
  children?: React.ReactNode;
  formState?: { errors?: { [key: string]: string[] }, message?: string | null },
  dispatch?: (payload: FormData) => void
}) {
  return (
    <div className="flex flex-col place-content-center px-5 py-5 mx-10 mt-5 max-w-[480px] border border-gray/50 rounded-lg">
      {children}
    </div>
  );
}