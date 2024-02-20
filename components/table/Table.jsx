import { Box } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { useRouter } from "next/navigation";

import { useState } from "react";

const Table = ({ columns, rows }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  //console.log("selected rows are here", rowSelectionModel);
  const router = useRouter();
  const handleRowClick = (param) => {
    const selectedRowId = param.row._id;
    // Navigate to the details page with the selected row's ID
    router.push(`members/details?id=${selectedRowId}`);
  };

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

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
        getRowId={(row) => row._id}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        slots={{
          toolbar: CustomToolbar,
        }}
        onRowClick={handleRowClick}
        sx={{ fontFamily: "Poppins", fontSize: "16px", color: "#5e35b1" }}
      />
    </Box>
  );
};

export default Table;
