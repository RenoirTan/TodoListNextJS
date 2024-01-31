"use client";

import {
  Button,
  Navbar as NavbarInner,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@nextui-org/react";
import BrandMini from "./brand-mini";
import Link from "next/link";
import {
  index as indexUrl,
  login as loginUrl,
  register as registerUrl,
  settings as settingsUrl,
  todos as todosUrl
} from "@/lib/urls";
import LogoutButton from "@/app/ui/logout-button";
import { useState } from "react";
import { ArrowRightEndOnRectangleIcon, ClipboardDocumentIcon, Cog6ToothIcon } from "@heroicons/react/16/solid";

export default function Navbar({ loggedIn }: { loggedIn?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <NavbarInner
      className="w-full z-30"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href={indexUrl()} className="flex flex-row items-center gap-x-2">
            <BrandMini />
            <h2 className="font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-violet to-vermillion">Todos</h2>
          </Link>
        </NavbarBrand>

        {loggedIn || <NavbarItem className="block md:hidden me-2">
          <RegisterItem />
        </NavbarItem>}

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          className="md:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden md:flex md:flex-grow md:flex-row justify-end gap-4" justify="end">
        {loggedIn ? (<>
          <NavbarItem>
            <TodosItem />
          </NavbarItem>
          <NavbarItem>
            <SettingsItem />
          </NavbarItem>
          <NavbarItem>
            <LogoutItem />
          </NavbarItem>
        </>) : (<>
          <NavbarItem>
            <LoginItem />
          </NavbarItem>
        </>)}
      </NavbarContent>

      {loggedIn || <NavbarItem className="hidden md:block">
        <RegisterItem />
      </NavbarItem>}

      <NavbarMenu>
        {loggedIn ? (<>
          <NavbarMenuItem>
            <TodosItem closeMenu={closeMenu} />
          </NavbarMenuItem>
          <NavbarMenuItem>
            <SettingsItem closeMenu={closeMenu} />
          </NavbarMenuItem>
          <NavbarMenuItem>
            <LogoutItem  />
          </NavbarMenuItem>
        </>) : (<>
          <NavbarMenuItem>
            <LoginItem closeMenu={closeMenu} />
          </NavbarMenuItem>
        </>)}
      </NavbarMenu>
    </NavbarInner>
  );
}

function LoginItem({ closeMenu }: { closeMenu?: () => void }) {
  return (
    <Link href={loginUrl()} onClick={closeMenu} className="flex flex-row items-center gap-x-5 md:gap-x-1.5">
      <ArrowRightEndOnRectangleIcon className="h-[1em] w-[1em]" />
      <p>Login</p>
    </Link>
  );
}

function LogoutItem() {
  return <LogoutButton />
}

function RegisterItem({ closeMenu }: { closeMenu?: () => void }) {
  return (
    <Link href={registerUrl()} onClick={closeMenu}>
      <Button className="rounded-full bg-gradient-to-tr from-blue-violet to-cyan">
        <p className="font-semibold">Register</p>
      </Button>
    </Link>
  );
}

function TodosItem({ closeMenu }: { closeMenu?: () => void }) {
  return (
    <Link href={todosUrl({})} onClick={closeMenu} className="flex flex-row items-center gap-x-5 md:gap-x-1.5">
      <ClipboardDocumentIcon className="h-[1em] w-[1em]" />
      <p>Todos</p>
    </Link>
  );
}

function SettingsItem({ closeMenu }: { closeMenu?: () => void }) {
  return (
    <Link href={settingsUrl()} onClick={closeMenu} className="flex flex-row items-center gap-x-5 md:gap-x-1.5">
      <Cog6ToothIcon className="h-[1em] w-[1em]" />
      <p>Settings</p>
    </Link>
  );
}