import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Welcome to Invoice Management
      </Typography>
      <Typography variant="body1" color="gray" mb={3}>
        Manage your invoices, payments, and receipts efficiently.
      </Typography>

      {/* Navigation Buttons */}
      <Button
        variant="contained"
        sx={{ background: "#4F46E5", borderRadius: 2, px: 4, mb: 2 }}
        onClick={() => navigate("/invoiceEditor")}
      >
        Go to Invoice Editor
      </Button>

      <Button
        variant="outlined"
        sx={{ borderColor: "#4F46E5", color: "#4F46E5", borderRadius: 2, px: 4 }}
        onClick={() => navigate("/upload")}
      >
        Go to EasyUpload
      </Button>
    </Box>
  );
}

