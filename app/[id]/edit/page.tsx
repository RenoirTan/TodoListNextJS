import EditForm from "@/app/ui/edit-form";
import EditFormSkeleton from "@/app/ui/skeletons/edit-form-skeleton";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {
  // Page (server) has suspense
  // EditForm (server) loads Todo
  // EditFormInner (client) handles form stuff
  // This is why you get sleep
  return (
    <Suspense fallback={<EditFormSkeleton />}>
      <EditForm todoId={params.id} />
    </Suspense>
  );
}