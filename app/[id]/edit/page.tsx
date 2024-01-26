import EditForm from "@/app/ui/edit-form";
import { getTodo } from "@/lib/actions";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <EditForm todoId={params.id} />
    </Suspense>
  );
}