// src/middleware.ts
import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // Public paths that don't need auth
  const publicPaths = ['/admin/login'];
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));

  // Admin paths that need auth
  const isAdminPath = pathname.startsWith('/admin');

  // If not on admin path, allow all
  if (!isAdminPath) {
    return response;
  }

  // If on login page
  if (pathname === '/admin/login') {
    // If user is authenticated, redirect to dashboard
    if (user) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
    // Otherwise, allow access to login page
    return response;
  }

  // If on any other admin page (dashboard, homepage, etc.)
  if (isAdminPath && pathname !== '/admin/login') {
    // If user is not authenticated, redirect to login
    if (!user) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    // Otherwise, allow access
    return response;
  }

  return response;
}

export const config = {
  matcher: ['/admin/:path*'],
};



// import { createServerClient } from '@supabase/ssr';
// import { NextResponse, type NextRequest } from 'next/server';

// export async function middleware(request: NextRequest) {
//   let response = NextResponse.next({ request });

//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return request.cookies.getAll();
//         },
//         setAll(cookiesToSet) {
//           cookiesToSet.forEach(({ name, value }) =>
//             request.cookies.set(name, value)
//           );
//           response = NextResponse.next({ request });
//           cookiesToSet.forEach(({ name, value, options }) =>
//             response.cookies.set(name, value, options)
//           );
//         },
//       },
//     }
//   );

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
//   const isLoginPage = request.nextUrl.pathname === '/admin/login';

//   if (isAdminRoute && !isLoginPage && !user) {
//     return NextResponse.redirect(new URL('/admin/login', request.url));
//   }

//   if (isLoginPage && user) {
//     return NextResponse.redirect(new URL('/admin/dashboard', request.url));
//   }

//   return response;
// }

// export const config = {
//   matcher: ['/admin/:path*'],
// };