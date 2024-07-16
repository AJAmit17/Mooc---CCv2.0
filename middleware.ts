import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";
 

const intlMiddleware = createMiddleware({
  locales: ["en", "de", "kn-IN"],
 
  defaultLocale: "en",
});
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  beforeAuth: (req) => {
    // Execute next-intl middleware before Clerk's auth middleware
    return intlMiddleware(req);
  },
 
  // Ensure that locale specific sign-in pages are public
  publicRoutes: ["/en", "/de", "/kn-IN"],
}); 

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
 