import { AppBar, Stack, Tab, Tabs, Toolbar } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import ReplyIcon from "@mui/icons-material/Reply";
import { SyntheticEvent, useState } from "react";

export const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <AppsIcon />
          <ReplyIcon />
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <Tab label="Просмотр" />
            <Tab label="Управление" />
          </Tabs>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
