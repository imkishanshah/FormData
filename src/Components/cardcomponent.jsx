import { Box } from "@mui/system";
import { Stack, Typography } from "@mui/material";

import React, { useState } from "react";
import MuiStepper from "./muiStepper";
import MuiButton from "./button";
import Radiobutton from "./radiobutton";
import MuiForm from "./muiForm";
import Services from "./services";
import Submit from "./submit";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
const basicSchema = yup.object().shape({
  name: yup.string().required("name is Required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("email is Required"),
  phone: yup.number().positive().integer().required("phone number is Required"),
  company: yup.string().required("company is Required"),
});

// const axios = axios.post("http://localhost:3002/Data");

const Cardcomponent = ({ onChange1, onChange2, value, component }) => {
  const [data, setData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
    },

    validationSchema: basicSchema,
    onSubmit: (values) => {
      console.log(values);
      createData(values);
      formik.resetForm();
    },
  });

  const createData = (values) => {
    setData((val) => [...val, values]);
  };

  const finalCreateData = async (value) => {
    const response = await axios.post("http://localhost:3002/Data", [value]);
    const updatedData = [...data, response.data];
    setFinalData(updatedData);
  };
  let content = <MuiForm formik={formik} />;
  if (component === 1) {
    content = <Services onChange={createData} />;
  }
  if (component === 2) {
    content = <Radiobutton onChange={createData} />;
  }
  if (component === 3) {
    content = <Submit data={data} onChange={finalCreateData} />;
  }
  const onHandleclick = () => {
    onChange1();
  };

  return (
    <Stack>
      <form onSubmit={formik.handleSubmit}>
        <Stack sx={{ textAlign: "center" }}>
          <Typography my={4} variant="h5">
            Get a project quote
          </Typography>
          <Typography variant="subtitle1">
            Please fill the form below to recieve quote for your project. Feel
            free to add as much detail as needed
          </Typography>
        </Stack>
        <Stack sx={{ display: "flex", alignItems: "center" }}>
          <Box
            my={5}
            sx={{
              border: 1,
              borderRadius: 7,
              padding: 5,
              width: 500,
              height: 500,
            }}
          >
            <MuiStepper value={value} />
            <Stack>{content}</Stack>
          </Box>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <MuiButton variant="outlined" onClick={onChange2}>
            Previous Step
          </MuiButton>
          <MuiButton variant="contained" onClick={onHandleclick}>
            Next step
          </MuiButton>
        </Stack>
      </form>
    </Stack>
  );
};

export default Cardcomponent;
