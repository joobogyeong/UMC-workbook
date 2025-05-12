import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './../pages/HomePage';
import NotFoundPage from './../pages/NotFoundPage';
import LoginPage from './../pages/LoginPage';
import HomeLayout from './../Layouts/HomeLayout';
import SignupPage from './../pages/SignupPage';
import LpDetailPage from './../pages/LpDetailPage';
import { AuthProvider } from './context/Authcontext';
import ProtectedLayout from './../Layouts/ProtectedLayout';
import MyPage from './../pages/Mypage';
import GoogleLoginRedirectPage from './../pages/GoogleLoginRedirectPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "v1/auth/google/callback", element: <GoogleLoginRedirectPage /> },
      { path: "lps/:lpid", element: <LpDetailPage />},
    ],
  },
];

// protectedRoutes: 인증이 필요한 라우트
const protectedRoutes: RouteObject[] = [
  {
    path: "/",
    element: <ProtectedLayout />, // 로그인 검사
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <HomeLayout />, // 레이아웃 적용
        children: [
          {
            path: "my",
            element: <MyPage />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter([...publicRoutes, ...protectedRoutes]);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      {import.meta.env.DEV &&  <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}

export default App
