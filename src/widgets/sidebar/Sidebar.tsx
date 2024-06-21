import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Toolbar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useState } from "react";

export const Sidebar = () => {
  const items = [
    "По проекту",
    "Объекты",
    "РД",
    "МТО",
    "СМР",
    "График",
    "МиМ",
    "Рабочик",
    "Капвложения",
    "Бюджет",
    "Финансирование",
    "Панорамы",
    "Камеры",
    "Поручения",
    "Контрагенты",
  ];
  const [select, setSelect] = useState("123");
  return (
    <Drawer
      open={true}
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 250,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Select value={select} onChange={(e) => setSelect(e.target.value)}>
        <MenuItem value="123">Название проекта</MenuItem>
      </Select>
      <Box sx={{ overflow: "auto" }}>
        <List>
          {items.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
