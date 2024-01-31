import ChangePasswordForm from "@/app/ui/change-password-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Password"
};

export default async function Page() {
  return (
    <div className="w-screen flex justify-center">
      <ChangePasswordForm />
    </div>
  );
}