"use client";
import { Box, Grid } from "@mui/material";
import {
  Students,
  FemaleStudents,
  MaleStudents,
  Teachers,
} from "@/components/widget/Widget";

import Chart from "@/components/chart/Chart";
import Featured from "@/components/featured/Featured";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [members, setMembers] = useState(null);
  const [data, setData] = useState(null);

  // const [department, setDepartment] = useState([]);
  // const [workcondition, setWorkcondition] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch("/api/member");
        const data = await response.json();

        if (response.ok) {
          setData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchDepartments();
  }, [members]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("/api/dashboard/cards");
        const data = await response.json();
        // console.log("data in dashboard widget", data);
        setMembers(data);
      } catch (error) {
        console.error("Error fetching member statistics:", error);
      }
    };
    fetchMembers();
  }, []);

  if (members === null) {
    // Loading state or you can show a loading spinner
    return (
      <div className="flex h-screen items-center justify-center bg-white/80">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <>
      {members && data && (
        <Box>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Students
                  count={members.totalMembers}
                  type="student"
                  className="card"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Teachers type="teacher" className="card" />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={4}>
                <Box>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6} lg={12}>
                      <MaleStudents
                        count={members.maleMembers}
                        type="module"
                        className="card"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={12}>
                      <FemaleStudents
                        count={members.femaleMembers}
                        type="module"
                        className="card"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={8}>
                <Chart data={data} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4}>
                <Featured data={data} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Dashboard;
