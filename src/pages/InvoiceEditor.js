import React, { useState } from "react";
import {Drawer, Box, Paper, Tabs, Tab, List, ListItemButton, ListItemText, Button, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import PaymentPanel from "../components/PaymentPanel";
import { bills } from "../Data/bills";
import TopBar from "../components/TopNav";
import Invoiceimage from "../assets/Invoiceimage.png"


const InvoiceEditor = () => {
   const [tabIndex, setTabIndex] = useState(1);
    const [selectedBill, setSelectedBill] = useState(bills[0]);
  return (
    <Box display="flex" height="100vh">
    
      <Drawer variant="permanent" sx={{ width: 80, flexShrink: 0 }}>
        <Sidebar />
      </Drawer>

  
      <Box sx={{ flexGrow: 1,  }}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", padding: 1 }}>
      <TopBar/>
   
      <Paper sx={{ display: "flex", flexDirection: "column" ,flexGrow: 1, borderRadius: 2, padding: 1, marginTop:1 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop:2, marginBottom:2 }}>
        <Button
          variant="contained"
          sx={{
            background: "#603AE5",
            borderRadius: 2,
            textTransform: "none",
            fontSize: "10px", 
            px: 2,
            py: 0.5, 
            boxShadow: "none",
            "&:hover": { background: "#4C2EBF" }
          }}
        >
          Add to Expenses
        </Button>
      </Box>

      <Paper
  sx={{
    display: "flex",
    flexGrow: 1,
    borderRadius: 2,
    padding: 1,
    boxShadow: "none", 
    border: "none", 
  }}
>

        <Paper sx={{ width: 300, padding: 1, borderRadius: 2, mr: 2 }}>
          <Tabs value={tabIndex} onChange={(_, newValue) => setTabIndex(newValue)} variant="fullWidth">
            <Tab label="Documents" />
            <Tab label="Bills" />
            <Tab label="Receipts" />
          </Tabs>

          <List sx={{ mt: 1 }}>
            {bills.map((bill) => (
              <ListItemButton
                key={bill.id}
                selected={selectedBill.id === bill.id}
                onClick={() => setSelectedBill(bill)}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  "&.Mui-selected": { backgroundColor: "#E0E7FF", color: "#4338CA" },
                }}
              >

                <img src={bill.image} alt={bill.name} width="30" style={{ marginRight: 8, borderRadius: 4 }} />
                
                <ListItemText
                  primary={<Typography variant="body2" sx={{ fontSize: "10px" }}>{bill.name}</Typography>}
                  secondary={
                    <Typography variant="caption" color="textSecondary">
                      {bill.date} - {bill.price}
                    </Typography>
                  }
                />
              </ListItemButton>
            ))}
          </List>
        </Paper>
        <Paper
         sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 2,
          padding: 1,
          border: "1px dashed #000",
        }}
        >
          <img src={Invoiceimage} alt="Invoice Preview" style={{  boxShadow: "2px 4px 8px rgba(0,0,0,0.1)" }} />
        </Paper>
      </Paper>
      </Paper>
    </Box>

      </Box>
      <Paper sx={{ width: 305, }}>
        <PaymentPanel />
      </Paper>
    </Box>
  );
};

export default InvoiceEditor;

