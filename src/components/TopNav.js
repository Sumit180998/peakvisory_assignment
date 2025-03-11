import React from "react";
import { AppBar, Toolbar, Box, Button, Select, MenuItem, FormControl, IconButton, Badge, Typography } from "@mui/material";
import { Search, Notifications, Settings, Person } from "@mui/icons-material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function TopBar() {
  return (
    
    <AppBar
      position="static"
      sx={{ Width: 1207, height: 70, left: "84px", background: "#FFFFFF", borderBottomRightRadius: 4, borderBottomLeftRadius: 4,border: "1px solid #D1D5DB",  display: "flex", justifyContent: "center",alignItems: "center",paddingX: 1,}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        
       
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Typography variant="body2" sx={{ color: "#111827", fontWeight: 500, fontSize: "11px" }}>Review</Typography>

     
          <FormControl sx={{ minWidth: 100 }} size="small">
            <Select defaultValue="Google" displayEmpty sx={{ background: "white", borderRadius: 1, fontSize: "11px" }}>
              <MenuItem value="Google">Google</MenuItem>
              <MenuItem value="Bing">Bing</MenuItem>
              <MenuItem value="Yahoo">Yahoo</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ background: "#E8F5E9", color: "#2E7D32", px: 1, py: 0.3, borderRadius: 1 }}>
            <Typography variant="caption" sx={{ fontWeight: 500, fontSize: "10px" }}>Quickbook's Data</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        
          <IconButton sx={{ width: 36, height: 36, borderRadius: 6, background: "#603AE51A", padding: "2px" }}>
            <Search sx={{ color: "#603AE5", fontSize: 18 }} />
          </IconButton>

          <Button variant="contained" sx={{ background: "#603AE51A", color: "#603AE5", textTransform: "none", borderRadius: 2, fontSize: "10px", padding: "5px 5px", fontWeight:500 }}>Export</Button>
          <Button variant="contained" sx={{ background: "#603AE51A", color: "#603AE5", textTransform: "none", borderRadius: 2, fontSize: "10px", padding: "5px 5px" }}>Add</Button>
          <Button variant="contained" sx={{ background: "#603AE51A", color: "#603AE5", textTransform: "none", borderRadius: 2, fontSize: "10px", padding: "5px 5px" }}>Connect 
                    <KeyboardArrowDownIcon sx={{ color: "#603AE5", fontSize: 15,  marginLeft:5}} />
                  </Button>

          <IconButton sx={{background: "#603AE51A",  textTransform: "none", borderRadius: 2,  padding: "5px 5px" }}>
              <Notifications sx={{ color: "#603AE5", fontSize: 18 }} />
          </IconButton>

          <IconButton sx={{background: "#603AE51A",  textTransform: "none", borderRadius: 2,  padding: "5px 5px" }}>
            <Settings sx={{ color: "#603AE5", fontSize: 18 }} />
          </IconButton>

          <IconButton sx={{ background: "#603AE51A",  textTransform: "none", borderRadius: 2,  padding: "5px 5px"  }}>
            <Person sx={{ color: "#603AE5", fontSize: 18 }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}


