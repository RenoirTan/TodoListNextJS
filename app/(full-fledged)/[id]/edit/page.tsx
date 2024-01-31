import EditForm from "@/app/ui/edit-form";
import EditFormSkeleton from "@/app/ui/skeletons/edit-form-skeleton";
import { auth } from "@/auth";
import { Metadata } from "next";
import { signIn } from "next-auth/react";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Edit Todo Item"
};

export default async function Page({ params }: { params: { id: string } }) {
  const session = await auth();
  if (!session) signIn();

  // Page (server) has suspense
  // EditForm (server) loads Todo
  // EditFormInner (client) handles form stuff
  // This is why you get sleep
  return (
    <div className="flex justify-center mt-8">
      <div className="flex flex-col w-4/5 md:max-w-screen-sm">
        <Suspense fallback={<EditFormSkeleton />}>
          <EditForm todoId={params.id} authorId={session?.user?.id || ""} />
        </Suspense>
      </div>
    </div>
  );
}