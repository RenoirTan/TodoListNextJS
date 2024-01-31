import CreateForm from "@/app/ui/create-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Todo Item"
};

export default async function Page() {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex flex-col w-4/5 md:max-w-screen-sm">
        <CreateForm />
      </div>
    </div>
  );
}