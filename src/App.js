import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadFiles from "./pages/UploadFiles";
import Home from "./pages/Home";
import InvoiceEditor from "./pages/InvoiceEditor";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/upload" element={<UploadFiles />} />
        <Route path="/invoiceEditor" element={<InvoiceEditor />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}








