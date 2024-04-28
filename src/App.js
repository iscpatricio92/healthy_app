import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RoutesComponent from "./routes";
import { AuthProvider } from "./contexts/authContext";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
function App() {
  return (
    <AuthProvider>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <RoutesComponent />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
