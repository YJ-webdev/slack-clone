import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

const isSignInPage = createRouteMatcher(["/auth"]);

export default convexAuthNextjsMiddleware((request, { convexAuth }) => {
  // Protect all routes except the auth page
  if (!isSignInPage(request) && !convexAuth.isAuthenticated()) {
    return nextjsMiddlewareRedirect(request, "/auth");
  }

  // Redirect authenticated users away from the auth page
  if (isSignInPage(request) && convexAuth.isAuthenticated()) {
    return nextjsMiddlewareRedirect(request, "/");
  }
});

export const config = {
  // The matcher will run middleware on all routes except static assets
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
