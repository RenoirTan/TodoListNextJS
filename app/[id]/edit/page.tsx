import EditForm from "@/app/ui/edit-form";
import { getTodo } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const todo = await getTodo(params.id);
  if (!todo) {
    notFound();
  }
  
  return <EditForm todo={todo} />
}