"use client";

import {
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
import { index as indexUrl, login as loginUrl, todos as todosUrl } from "@/lib/urls";
import LogoutButton from "@/app/ui/logout-button";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 w-screen">
      <NavbarInner isBordered>
        <NavbarContent justify="start">
          <NavbarBrand>
            <Link href={indexUrl()}>
              <BrandMini />
            </Link>
          </NavbarBrand>

          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            className="md:hidden"
          />
        </NavbarContent>

        <NavbarContent className="hidden md:flex md:flex-grow md:flex-row justify-end gap-4" justify="end">
          <NavbarItem>
            <TodosItem />
          </NavbarItem>
          <NavbarItem>
            <LoginItem />
          </NavbarItem>
          <NavbarItem>
            <LogoutItem />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem>
            <TodosItem />
          </NavbarMenuItem>
          <NavbarMenuItem>
            <LoginItem />
          </NavbarMenuItem>
          <NavbarMenuItem>
            <LogoutItem />
          </NavbarMenuItem>
        </NavbarMenu>
      </NavbarInner>
    </div>
  );
}

function LoginItem() {
  return <Link href={loginUrl()}>Login</Link>;
}

function LogoutItem() {
  return <LogoutButton />
}

function TodosItem() {
  return <Link href={todosUrl({})}>Todos</Link>
}
