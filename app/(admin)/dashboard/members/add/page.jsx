"use client";
import { Typography } from "@mui/material";
import MainCard from "@/components/cards/MainCard";
import Breadcrumb from "@/components/cards/Breadcrumb";
import RegistrationStepper from "@/components/forms/registration/RegisterationForm";
import { toast } from "react-toastify";
import * as XLSX from "xlsx";
const page = () => {
  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = async (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      const da = JSON.stringify(parsedData);
      console.log("data stringified", da);
      try {
        const response = await fetch("/api/member/new/import", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers if needed
          },
          body: JSON.stringify(parsedData),
        });

        if (response.ok) {
          const responseData = await response.text();
          // Handle the response data from the server if needed
          toast.success(responseData);
          //console.log("Data sent successfully!", responseData);
        } else {
          // Handle error cases
          toast.error("Failed to send data");

          //          console.error();
        }
      } catch (error) {
        console.error("Error sending data:", error);
      }
    };
  };
  return (
    <div>
      <Breadcrumb path={"Register"} brtitle={"Member's Registration"} />
      <MainCard>
        <div className="flex w-full justify-between items-center mb-4">
          <div className="flex">
            <Typography
              variant="h5"
              color={"#0033cc"}
              sx={{ fontFamily: "Poppins" }}
            >
              Registration Form
            </Typography>
          </div>
          <div className=" px-3 rounded-lg ">
            <div className="flex flex-row gap-3">
              <label
                htmlFor="file-upload"
                className="flex flex-row gap-3 rounded-lg border border-primary bg-blue-700 px-6 py-2 text-center font-medium text-white transition hover:bg-opacity-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
                </svg>
                Import
              </label>
              <input
                id="file-upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileUpload}
                accept=".xlsx , .xls"
              />
            </div>
          </div>
        </div>
        <RegistrationStepper />
      </MainCard>
    </div>
  );
};

export default page;
