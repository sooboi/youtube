import "./App.css";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";
import Header from "./components/Header";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Header />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
