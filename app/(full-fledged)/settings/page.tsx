import SettingsButton from "@/app/ui/settings-button";
import {
  changeName as changeNameUrl,
  changePassword as changePasswordUrl
} from "@/lib/urls";
import { LockClosedIcon, TagIcon } from "@heroicons/react/16/solid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings"
};

export default function Page() {
  return (
    <div className="flex flex-row justify-center mt-8">
      <div className="flex flex-col gap-y-8 w-full">
        <h1 className="text-center text-3xl font-bold">Settings</h1>
        <div className="flex flex-col md:flex-row mx-auto w-4/5 gap-x-12 gap-y-8">
          <SettingsButton
            icon={<div className="p-6 rounded-lg bg-gradient-to-tr from-vermillion to-lilac shadow-xl">
              <LockClosedIcon className="h-[4em] w-[4em]" />
            </div>}
            text="Change Password"
            href={changePasswordUrl()}
          />
          <SettingsButton
            icon={<div className="p-6 rounded-lg bg-gradient-to-tr from-mint-green to-cyan shadow-xl">
              <TagIcon className="h-[4em] w-[4em]" />
            </div>}
            text="Change Name"
            href={changeNameUrl()}
          />
        </div>
      </div>
    </div>
  );
}