import { Skeleton, Spinner } from "@nextui-org/react";
import { chooseColor } from "@/lib/utils";

export default function EditFormSkeleton() {
  const color = chooseColor();

  return (
    <div className="flex flex-col items-center gap-y-8 w-full">
      <div className="flex flex-col gap-y-4 w-full">
        <Skeleton className="h-[2em] max-w-[6em] rounded-lg">
          <div className="h-[2em] max-w-[6em] rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="h-[3em] max-w-full rounded-lg">
          <div className="h-[3em] max-w-full rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
      <div className="flex flex-col gap-y-4 w-full">
        <Skeleton className="h-[2em] max-w-[9em] rounded-lg">
          <div className="h-[2em] max-w-[9em] rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="h-[5em] max-w-full rounded-lg">
          <div className="h-[5em] max-w-full rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
      <Spinner color={color} /> {/* Ignore error */}
    </div>
  );
}