import { formCreateTodo } from "@/lib/actions";
import { getTodo } from "@/lib/data";
import { useFormState } from "react-dom";
import CreateForm from "@/app/ui/create-form";

export default async function Page() {
  return <CreateForm />;
}