import { Header } from "../widgets/header";
import { Sidebar } from "../widgets/sidebar/Sidebar.tsx";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { MainTable } from "../widgets/table";

export const MainPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <MainTable />
      </Box>
    </Box>
  );
};
