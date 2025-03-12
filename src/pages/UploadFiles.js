import React, { useState } from "react";
import { Box, Button, Tabs, Tab, Typography, Paper, TextField, MenuItem, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function UploadFiles() {
  const [tabIndex, setTabIndex] = useState(1);
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedFile, setSelectedFile] = useState(null || 5);

  const handleTabChange = (_, newIndex) => setTabIndex(newIndex);
  const handleCopy = (text) => navigator.clipboard.writeText(text);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };


  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  const AddReceipt=()=>{
    console.log(selectedFile)
  }

  return (
    <Paper sx={{ p: 3, width: 500, mx: "auto", mt: 5, borderRadius: 3 }}>
      <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth" >
        <Tab label="EasyUpload" />
        <Tab label="Bills" />
        <Tab label="Receipts" />
        <Tab label="Bank" />
      </Tabs>

      <Box mt={3}>
        <Typography variant="body1"><b>Document Owner</b>: Accountant 01</Typography>

        <TextField select label="Client"
          value={selectedClient}
          onChange={(e) => setSelectedClient(e.target.value)}
          fullWidth
          sx={{ mt: 2 }}
        >
          <MenuItem value="">Select Client</MenuItem>
          <MenuItem value="Ram">Ram</MenuItem>
          <MenuItem value="Sumit kumar">Sumit kumar</MenuItem>
          <MenuItem value="krishna">krishna</MenuItem>
          <MenuItem value="Ram Rai">Ram Rai</MenuItem>
        </TextField>

        
        <Box
          mt={3}
          p={3}
          border="2px dashed #ccc"
          textAlign="center"
          sx={{ borderRadius: 2, cursor: "pointer", backgroundColor: "#f9f9f9" }}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="file-upload"
            accept=".jpg, .png, .pdf, .csv"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload">
            <CloudUploadIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography color="primary" sx={{ fontWeight: "bold" }}>Drag & Drop or Choose file to upload</Typography>
            <Typography variant="caption">JPG, PNG, PDF, CSV</Typography>
          </label>
        </Box>

       
        {selectedFile && (
          <Typography variant="body2" color="green" sx={{ mt: 1 }}>
            Uploaded: {selectedFile.name}
          </Typography>
        )}

        <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }} onClick={()=>AddReceipt()}>
          Add Receipt
        </Button>

       
        <Box mt={3}>
          <Typography variant="body2"><b>Send Over Email</b></Typography>

          <Typography variant="body2">
            <b>Single: </b>
            <Typography component="span" color="primary">abc.single@gmail.com</Typography>
            <IconButton onClick={() => handleCopy("abc.single@gmail.com")} size="small">
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Typography>

          <Typography variant="body2">
            <b>Multiple: </b>
            <Typography component="span" color="primary">abc.multiple@gmail.com</Typography>
            <IconButton onClick={() => handleCopy("abc.multiple@gmail.com")} size="small">
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}