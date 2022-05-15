import { Link, NavLink, Outlet } from "@remix-run/react";
import { FullFakebooksLogo } from "~/components";

export default function AppRoute() {
  return (
    <div className="relative flex h-full rounded-lg bg-white text-slate-600">
      <div className="border-r border-slate-100 bg-slate-50">
        <div className="p-4">
          <Link to=".">
            <FullFakebooksLogo size="sm" position="left" />
          </Link>
          <div className="mt-8 flex flex-col font-medium text-slate-800">
            <NavItem to="dashboard">Dashboard</NavItem>
            <NavItem to="accounts">Accounts</NavItem>
            <NavItem to="sales">Sales</NavItem>
            <NavItem to="expenses">Expenses</NavItem>
            <NavItem to="reports">Reports</NavItem>
            <a
              href="https://github.com/StevenCalverley/fakebook-remix"
              className="my-1 py-1 px-2 pr-16 text-[length:14px]"
            >
              GitHub ↗️
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      prefetch="intent"
      className={({ isActive }) =>
        `my-1 py-1 px-2 pr-16 text-[length:14px] ${
          isActive ? "rounded-md bg-slate-200" : ""
        }`
      }
    >
      {children}
    </NavLink>
  );
}
