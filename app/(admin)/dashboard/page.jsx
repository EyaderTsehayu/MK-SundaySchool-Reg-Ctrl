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

const Dashboard = () => {
  return (
    <>
      <Box>Dashboard</Box>
      <Box>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Students type="student" className="card" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Teachers type="teacher" className="card" />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={6} lg={12}>
                    <MaleStudents type="module" className="card" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={12}>
                    <FemaleStudents type="module" className="card" />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={8}>
              <Chart />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Featured />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
