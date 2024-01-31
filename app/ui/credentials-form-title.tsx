export default function CredentialsFormTitle({ title }: { title: string; }) {
  return (
    <div className="flex-1 rounded-lg bg-blue-violet/50 px-5 pt-8 pb-4 mt-2 mb-6">
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  );
}