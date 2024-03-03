"use client";
import { useState, useEffect } from "react";
import MainCard from "@/components/cards/MainCard";
import Breadcrumb from "@/components/cards/Breadcrumb";
import Table from "@/components/table/Table";
import { columns } from "@/utils/columns";

const KidSamuel = () => {
  const [members, setMembers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);

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
      const response = await fetch("/api/member/Kid Samuel");
      const data = await response.json();
      setMembers(data);
    };
    fetchMembers();
  }, []);
  const handleEnroll = async () => {
    if (rowSelectionModel != null) {
      //console.log("selected rows from kid samuel", rowSelectionModel);
      try {
        const response = await fetch("/api/member/details/enroll", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ rowSelectionModel }),
        });

        if (response.ok) {
          console.log("Data updated successfully!");
        } else {
          console.error("Failed to update data.");
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };
  const receiveDataFromTable = (data) => {
    setRowSelectionModel(data);
    //  console.log("selected rows from kid samuel", rowSelectionModel);
  };
  return (
    <div>
      <Breadcrumb path={"Kid Samuel"} brtitle={"Kid Samuel Division"} />

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
              onClick={handleEnroll}
              className="rounded-lg  bg-blue-700 items-end py-3 px-6 font-medium text-white  hover:bg-opacity-85"
              sx={{ fontFamily: "Popins" }}
            >
              Enroll To Next Division
            </button>
          </div>
        </div>
        {searchText ? (
          <Table
            columns={columns}
            rows={searchedResults}
            sendDataToDevision={receiveDataFromTable}
          />
        ) : (
          <Table
            columns={columns}
            rows={members}
            sendDataToDevision={receiveDataFromTable}
          />
        )}
      </MainCard>
    </div>
  );
};

export default KidSamuel;
