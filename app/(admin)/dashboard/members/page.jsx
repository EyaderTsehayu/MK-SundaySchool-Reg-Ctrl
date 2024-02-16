"use client";
import { useState, useEffect } from "react";
import MainCard from "@/components/cards/MainCard";
import Breadcrumb from "@/components/cards/Breadcrumb";
import Table from "@/components/table/Table";

const page = () => {
  const [members, setMembers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const columns = [
    {
      field: "memberId",
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
    },
  ];

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // case insensetive flag
    return members.filter(
      (item) =>
        regex.test(item.memberId) ||
        regex.test(item.fullName) ||
        regex.test(item.department) ||
        regex.test(item.status) ||
        regex.test(item.division)
    );
  };
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await fetch("/api/member");
      const data = await response.json();
      setMembers(data);
    };
    fetchMembers();
  }, []);

  return (
    <div>
      <Breadcrumb path={"Members"} brtitle={"Member's Information"} />

      <MainCard>
        <div className="flex w-full justify-between items-center mb-4">
          <div className="flex w-1/3 ">
            <input
              type="text"
              placeholder="Search here ..."
              value={searchText}
              onChange={handleSearchChange}
              className=" w-full hidden sm:block px-4 py-2 rounded-md  border border-stroke bg-gray  text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
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
        {searchText ? (
          <Table columns={columns} rows={searchedResults} />
        ) : (
          <Table columns={columns} rows={members} />
        )}
      </MainCard>
    </div>
  );
};

export default page;
