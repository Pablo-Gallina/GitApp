import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <NativeRouter>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </NativeRouter>
  );
}
