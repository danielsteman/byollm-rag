import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  ...(stylesheet ? [{ rel: "stylesheet", href: stylesheet }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="bg-white dark:bg-gray-900">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
