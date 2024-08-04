import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        some head
        <br />
        <Link to="/">Home</Link>&nbsp;&nbsp;
        <Link to="/terms" className="border p-1 border-green-300">
          이용약관
        </Link>
        &nbsp;&nbsp;
        <Link to="/terms-v2" className="border p-1 border-green-300">
          이용약관(v2-공식방법)
        </Link>
        &nbsp;&nbsp;
        <Link to="/terms-v3" className="border p-1 border-green-300">
          이용약관(v3-with-api)
        </Link>
      </div>
      <br />
      <hr />
      <br />
      <Outlet />
      <br />
      <hr />
      <footer>some footer</footer>
      <hr />
      <TanStackRouterDevtools />
    </>
  ),
});
