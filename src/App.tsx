import { MainPage } from "./pages";
import { createTheme, ThemeProvider } from "@mui/material";
import { StoreProvider } from "./shared/store-provider";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <StoreProvider>
        <MainPage />
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
