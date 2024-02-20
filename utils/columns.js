export const columns = [
  {
    field: "memberId",
    headerName: "ID",
    width: 80,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 260,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.middleName || ""} ${
        params.row.lastName || ""
      }`,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 100,
  },
  {
    field: "department",
    headerName: "Department",
    width: 200,
  },
  {
    field: "division",
    headerName: "Devision",
    width: 200,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    renderCell: (params) => {
      let statusStyle;

      switch (params.row.status) {
        case "Active":
          statusStyle = {
            color: "white",
            backgroundColor: "#9BCF53",
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingTop: "4px",
            paddingBottom: "4px",
            borderRadius: "10px",
          };
          break;
        case "Stalled":
          statusStyle = {
            color: "white",
            backgroundColor: "#F4CE14",
            paddingLeft: "14px",
            paddingRight: "14px",
            paddingTop: "4px",
            paddingBottom: "4px",
            borderRadius: "10px",
          };
          break;
        case "Lost":
          statusStyle = {
            color: "white",
            backgroundColor: "#D80032",
            paddingLeft: "23px",
            paddingRight: "23px",
            paddingTop: "4px",
            paddingBottom: "4px",
            borderRadius: "10px",
          };
          break;
        default:
          statusStyle = {
            color: "white",
            backgroundColor: "gray",
            paddingLeft: "14px",
            paddingRight: "14px",
            paddingTop: "4px",
            paddingBottom: "4px",
            borderRadius: "10px",
          };
          break;
      }

      return <p style={statusStyle}>{params.row.status}</p>;
    },
  },
];
