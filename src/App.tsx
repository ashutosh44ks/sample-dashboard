import { createBrowserRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "./components/theme-provider";
import Layout from "./components/layout";
import Dashboard from "./pages/Dashboard";
import OrderList from "./pages/OrderList";
import { FavoritesProvider } from "./hooks/FavoritesProvider";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard/default",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/ecommerce/orders",
        element: <OrderList />,
      },
    ],
    errorElement: <Error />,
  },
]);
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <FavoritesProvider>
        <RouterProvider router={router} />;
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;
