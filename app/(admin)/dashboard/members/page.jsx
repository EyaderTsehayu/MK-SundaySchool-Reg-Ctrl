"use client";
import { useState } from "react";
import { Typography } from "@mui/material";
import MainCard from "@/components/cards/MainCard";
import Breadcrumb from "@/components/cards/Breadcrumb";
import RegistrationStepper from "@/components/forms/registration/RegisterationForm";
import Table from "@/components/tabel/Table";
const page = () => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "firstName",
      headerName: "Department",
      width: 200,
    },
    {
      field: "lastName",
      headerName: "Devision",
      width: 200,
    },
    {
      field: "age",
      headerName: "Status",
      //  type: "number",
      width: 200,
    },
  ];

  let rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div>
      <Breadcrumb path={"Members"} brtitle={"Member's information"} />

      <MainCard>
        <div className="flex w-full justify-between items-center mb-4">
          <div className="flex w-1/3 ">
            <input
              type="text"
              placeholder="Search here ..."
              //  value={searchTerm}
              //  onChange={handleSearch}
              className=" w-full hidden sm:block px-4 py-2 rounded-md  border border-stroke bg-gray  text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="flex gap-4 flex-inline  items-center rounded-md  p-1.5 ">
            <button
              //  onClick={handleOpen}
              className="rounded-lg  bg-blue-700 items-end py-2 px-6 font-medium text-white  hover:bg-opacity-95"
              sx={{ fontFamily: "Popins" }}
            >
              Register
            </button>
          </div>
        </div>
        <Table
          columns={columns}
          rows={rows}
          // setSelectedRows={setSelectedRows}
        />
      </MainCard>
    </div>
  );
};

export default page;
