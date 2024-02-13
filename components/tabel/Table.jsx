import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

const Table = ({ columns, rows }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  //   console.log("selected rows are here", selectedRows);

  const handleRowSelection = (param) => {
    setSelectedRows(param);
  };
  return (
    <Box
      style={{ height: 520, width: "100%" }}
      sx={{
        "& .MuiCheckbox-root": {
          color: "#5e35b1",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowId={(row) => row.id}
        onRowSelectionModelChange={(param) => handleRowSelection(param)}
        GridToolbarExport
        sx={{ fontFamily: "Poppins", fontSize: "16px", color: "#5e35b1" }}
      />
    </Box>
  );
};

export default Table;
