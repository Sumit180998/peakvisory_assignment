import React, { useState } from "react";
import { Box, Drawer, List, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { logo, Question, menuItems } from "../Data/menuItems";

export default function Sidebar() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 80, 
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 80,
          height: "100vh", 
          boxSizing: "border-box",
          backgroundColor: "#603AE5",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 0.5,
          paddingBottom: 0.5,
        },
      }}
    >
   
      <Box sx={{ mt: 0.5, mb: 1 }}>
        <img src={logo} alt="Logo" width={45} height={45} />
      </Box>

    
      <List sx={{ width: "100%", flexGrow: 1, padding: 0 }}>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={item.text}
            selected={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: 60, 
              color: "#fff",
              backgroundColor: selectedIndex === index ? '#FFFFFF33 !important' : "transparent", 
              position: "relative",
              "&:hover": { backgroundColor: "#FFFFFF33" }, 
            }}
          >
          
            {selectedIndex === index && (
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  width: 4,
                  height: 60, 
                  backgroundColor: "#8181A5",
                }}
              />
            )}
            <ListItemIcon sx={{ minWidth: 0 }}>
              <img src={item.image} alt={item.text} width={18} height={18} /> 
            </ListItemIcon>
            <Typography variant="caption" sx={{ fontSize: 9, textAlign: "center" }}>
              {item.text}
            </Typography>
          </ListItemButton>
        ))}
      </List>

      
      <Box sx={{ width: "100%", textAlign: "center", mb: 0.5 }}>
        <ListItemButton
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: 50, 
            color: "#fff",
            "&:hover": { backgroundColor: "#FFFFFF33" },
          }}
        >
          <img src={Question} alt="Help Icon" width={18} height={18} />
          <Typography variant="caption" sx={{ fontSize: 9, textAlign: "center" }}>
            Help
          </Typography>
        </ListItemButton>
      </Box>
    </Drawer>
  );
}



