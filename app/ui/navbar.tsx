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

export default function Navbar({ loggedIn }: { loggedIn?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavbarInner className="w-full z-30" isBordered>
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href={indexUrl()}>
            <BrandMini />
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
            <LogoutItem />
          </NavbarItem>
          <NavbarItem>
            <SettingsItem />
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
            <TodosItem />
          </NavbarMenuItem>
          <NavbarMenuItem>
            <LogoutItem />
          </NavbarMenuItem>
          <NavbarMenuItem>
            <SettingsItem />
          </NavbarMenuItem>
        </>) : (<>
          <NavbarMenuItem>
            <LoginItem />
          </NavbarMenuItem>
        </>)}
      </NavbarMenu>
    </NavbarInner>
  );
}

function LoginItem() {
  return <Link href={loginUrl()}>Login</Link>;
}

function LogoutItem() {
  return <LogoutButton />
}

function RegisterItem() {
  return (
    <Link href={registerUrl()}>
      <Button className="rounded-full bg-gradient-to-tr from-blue-violet to-cyan">
        <p className="font-semibold">Register</p>
      </Button>
    </Link>
  );
}

function TodosItem() {
  return <Link href={todosUrl({})}>Todos</Link>
}

function SettingsItem() {
  return <Link href={settingsUrl()}>Settings</Link>
}