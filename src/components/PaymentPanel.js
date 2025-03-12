import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
  FormControlLabel,
  Switch,
  TextField,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Select,
  MenuItem, Checkbox
} from "@mui/material";
import {
  ExpandMore,
  ArrowBackIosNew,
  ArrowForwardIos,
} from "@mui/icons-material";
import QuickBooksLogo from "../assets/quickbooks.png"; 

export default function PaymentPanel() {
 
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [paymentExpanded, setPaymentExpanded] = useState(true);
  const [formData, setFormData] = useState({
    billNumber: "",
    billDate: "",
    paidAmount: "",
    paidDate: "",
    dueDate: "",
    paymentMode: "",
    currency: "",
    bankTransactionRef: "",
    totalAmount: "",
    taxAmount: "",
    totalAmountGBP: "",
    taxAmountGBP: "",
    fxRate: "",
    description: "",
    lineItem: "single",
    paymentStatus: "paid"
  });
  const [currentPage, setCurrentPage] = useState(1); 
  const totalPages = 3
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };


  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", background: "#fff", padding:1,}}>
      
    
      <Paper sx={{ padding: 1.5, borderRadius: 2, background: "#FFFFFF", boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",}}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <img src={QuickBooksLogo} alt="QuickBooks" width={32} height={32} style={{ marginRight: 6 }} />
            <Box sx={{ display: "flex", flexDirection: "column",}}>
              <Typography variant="subtitle2" fontWeight="bold">QuickBook</Typography>
              <Typography variant="caption" color="gray" sx={{ fontSize: "10px" }}>16 June, 2024 </Typography>
              <Typography variant="caption" color="gray" sx={{ fontSize: "10px" }}>8:15 pM</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column",}}>
            <Typography variant="caption" fontWeight="bold" color="gray" sx={{ fontSize: "10px" }}>Publishing...</Typography>
            <Typography variant="caption" fontWeight="bold" color="gray" sx={{ fontSize: "10px" }}>Jimmy Jason</Typography>
          </Box>
        </Box>

      
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
        <FormControlLabel control={<Checkbox size="small" defaultChecked />} label={<Typography sx={{ fontSize: "11px" }}>Auto-sync</Typography>}/>
       <FormControlLabel control={<Checkbox size="small" defaultChecked />}label={<Typography sx={{ fontSize: "11px" }}>Save Config</Typography>}/>

        </Box>
      </Paper>
      <Box>

  <Box display="flex" justifyContent="space-between" paddingTop={2}>
    <Button variant="outlined" size="small" sx={{ fontSize: "10px" }}>Comment</Button>
    <Button variant="text" size="small" sx={{ fontSize: "10px" }}>Query</Button>
  </Box>

  <Box mt={1}>
    <Typography variant="body2" fontWeight="bold" color="gray" sx={{ fontSize: "11px" }}>Type Comment</Typography>
    <TextField fullWidth placeholder="Start Typing..." multiline rows={4} variant="standard" sx={{ fontSize: "10px" }}/>

  </Box>

  <Button fullWidth variant="contained" disabled sx={{ background: "#F3F4F6", color: "#9CA3AF", borderRadius: 2, mt: 1, fontSize: "10px" }}>
    Add Comment
  </Button>

  <Button fullWidth variant="contained" sx={{ background: "#603AE5", borderRadius: 2, mt: 2, fontSize: "10px" }}>
    View Line Items
  </Button>

  
</Box>

      <Divider sx={{ my: 1 }} />

      <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ background: "#F4F4F6", padding: "6px 12px", borderRadius: 1 }}>
        <IconButton size="small">
          <ArrowBackIosNew fontSize="small" />
        </IconButton>
        <Typography fontWeight="bold" sx={{ fontSize: "11px" }}>Payment Details</Typography>
        <IconButton size="small">
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Box>

      <Accordion expanded={paymentExpanded} onChange={() => setPaymentExpanded(!paymentExpanded)} sx={{ boxShadow: "none", mt: 1 }}>
        <AccordionSummary expandIcon={<ExpandMore sx={{ color: "#A78BFA" }} />} sx={{ background: "#F4F4F6", borderRadius: 1, px: 2 }}>
          <Typography fontWeight="bold" sx={{ fontSize: "11px" }}>Payment Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" fontWeight="bold" sx={{ fontSize: "10px" }}>Payment Status</Typography>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <FormControlLabel value="paid" control={<Radio color="primary" />} label={<Typography sx={{ fontSize: "10px" }}>Paid</Typography>} />
            <FormControlLabel value="unpaid" control={<Radio />} label={<Typography sx={{ fontSize: "10px" }}>Unpaid</Typography>} />
          </Box>

          {["Bill Number", "Bill Date", "Paid Amount", "Paid Date", "Due Date",].map((field) => (
            <Box key={field} mb={2}>
              <Typography variant="caption" color="gray" sx={{ fontSize: "10px" }}>{field}</Typography>
              <TextField fullWidth placeholder="Start Typing" variant="standard" sx={{ fontSize: "10px" }} />
            </Box>
          ))}

          <Box mb={2}>
            <Typography variant="caption" color="gray" sx={{ fontSize: "10px" }}>Payment Mode</Typography>
            <Select fullWidth variant="outlined" defaultValue="">
              <MenuItem value="">Select Payment Mode</MenuItem>
              <MenuItem value="Credit Card">Credit Card</MenuItem>
              <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
            </Select>
          </Box>

          <Box mb={2}>
            <Typography variant="caption" color="gray" sx={{ fontSize: "10px" }}>Currency</Typography>
            <Select fullWidth variant="outlined" defaultValue="">
              <MenuItem value="">Select Currency</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="GBP">GBP</MenuItem>
            </Select>
          </Box>
          {[ "Bank Transaction Ref", "Total Amount", "Tax Amount", "Total Amount (GBP)", "Tax Amount (GBP)", "FX Rate"].map((field) => (
            <Box key={field} mb={2}>
              <Typography variant="caption" color="gray" sx={{ fontSize: "10px" }}>{field}</Typography>
              <TextField fullWidth placeholder="Start Typing" variant="standard" sx={{ fontSize: "10px" }} />
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>

      <Divider sx={{ my: 1 }} />

      <Accordion expanded={descriptionExpanded} onChange={() => setDescriptionExpanded(!descriptionExpanded)} sx={{ boxShadow: "none" }}>
        <AccordionSummary expandIcon={<ExpandMore />} sx={{ background: "#F4F4F6", borderRadius: 1, px: 2 }}>
          <Typography fontWeight="bold" sx={{ fontSize: "11px" }}>Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <FormLabel sx={{ fontSize: "10px" }}>Line Item</FormLabel>
            <RadioGroup row defaultValue="single">
              <FormControlLabel value="single" control={<Radio color="primary" />} label={<Typography sx={{ fontSize: "10px" }}>Single</Typography>} />
              <FormControlLabel value="multiple" control={<Radio />} label={<Typography sx={{ fontSize: "10px" }}>Multiple</Typography>} />
            </RadioGroup>
          </FormControl>
          <TextField fullWidth placeholder="Enter Description" variant="outlined" multiline rows={2} sx={{ mt: 1, fontSize: "10px" }} />
        </AccordionDetails>
      </Accordion>
      <Box display="flex" alignItems="center" justifyContent="center" sx={{ my: 2 }}>
        <IconButton  onClick={handlePrevPage}>
          <ArrowBackIosNew fontSize="small" />
        </IconButton>
        {[...Array(totalPages)].map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: currentPage === index + 1 ? "#4F46E5" : "#D1D5DB",
              mx: 0.5
            }}
          />
        ))}
        <IconButton onClick={handleNextPage} disabled={currentPage === totalPages}>
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Box>
   
      <Box mt={2} textAlign="center">
        <Button fullWidth variant="contained" sx={{ background: "#E0E7FF", color: "#4F46E5", borderRadius: 2, fontSize: "11px", fontWeight: "bold", mb: 1 }}>
          Save
        </Button>
        <Button fullWidth variant="contained" sx={{ background: "#4F46E5", borderRadius: 2, fontSize: "11px", fontWeight: "bold" }}>
          Publish
        </Button>
      </Box>

    </Box>
  );
}

