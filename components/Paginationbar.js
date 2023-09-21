import React from "react";
import Pagination from "@mui/material/Pagination";

export default function Paginationbar({ onChange }) {
  return (
    <div className="flex justify-center mb-20">
      <Pagination count={10} size="large" color="primary" onChange={onChange} />
    </div>
  );
}
