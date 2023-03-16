// import React from "react";
// import { useState } from "react";
// import MuiStepper from "./muiStepper";
// import { Box } from "@mui/system";
// import MuiButton from "./button";
// import {
//   FormControl,
//   FormLabel,
//   FormControlLabel,
//   RadioGroup,
//   Radio,
//   Stack,
//   Typography,
//   Grid,
// } from "@mui/material";

// const Radiobutton = () => {
//   const [value, setValue] = useState();
//   const handleChange = (e) => {
//     setValue(e.target.value);
//     console.log(e.target.value);
//   };

//   return (
//     <Stack>
//       <Stack
//         sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
//       >
//         <Box>
//           <Typography mb={2} mt={4} variant="h5">
//             What’s your project budget?
//           </Typography>
//           <Typography my={2} variant="subtitle1">
//             Please select the project budget range you have in mind.
//           </Typography>
//           <Stack>
//             <FormControl
//               sx={{
//                 display: "flex",
//                 flexDirection: "row",
//                 justifyContent: "space-around",
//               }}
//             >
//               <RadioGroup
//                 aria-labelledby="demo-radio-buttons-group-label"
//                 name="radio-buttons-group"
//                 onChange={handleChange}
//                 value={value}
//               >
//                 <Grid container my={4}>
//                   <Grid item xs={6}>
//                     <Box border={1} margin={2} padding={2}>
//                       <FormControlLabel
//                         value="5.000-10.000"
//                         control={<Radio />}
//                         label="5.000-10.000"
//                       />
//                     </Box>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Box border={1} margin={2} padding={2}>
//                       <FormControlLabel
//                         value="10.000-20.000"
//                         control={<Radio />}
//                         label="10.000-20.000"
//                       />
//                     </Box>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Box border={1} margin={2} padding={2}>
//                       <FormControlLabel
//                         value="20.000-50.000"
//                         control={<Radio />}
//                         label="20.000-50.000"
//                       />
//                     </Box>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Box border={1} margin={2} padding={2}>
//                       <FormControlLabel
//                         value="50.000+"
//                         control={<Radio />}
//                         label="50.000+"
//                       />
//                     </Box>
//                   </Grid>
//                 </Grid>
//               </RadioGroup>
//             </FormControl>
//           </Stack>
//         </Box>
//         <Stack sx={{ display: "flex", justifyContent: "center" }}></Stack>
//       </Stack>
//     </Stack>
//   );
// };

// export default Radiobutton;

import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Radiobutton = ({ onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    // formik.setFieldValue(event.target.value);
    setValue(event.target.value);
    onChange(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Box>
      {/* <form onSubmit={handleSubmit}> */}
      <Box my={3}>
        <Typography variant="h5">What's your project budget?</Typography>
        <Typography variant="subtitle2">
          Please select the project budget range you have in mind.
        </Typography>
      </Box>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={
            // formik.values
            value
          }
          onChange={
            handleChange
            // (event) => {
            // formik.setFieldValue(event.target.value);
            // }
          }
        >
          <Grid container>
            <Grid item xs={6}>
              <Box border={1} p={1} m={2}>
                <FormControlLabel
                  value="Development"
                  control={<Radio />}
                  label="Development"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box border={1} p={1} m={2}>
                <FormControlLabel
                  value="Web design"
                  control={<Radio />}
                  label="Web design"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box border={1} p={1} m={2}>
                <FormControlLabel
                  value="Marketing"
                  control={<Radio />}
                  label="Marketing"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box border={1} p={1} m={2}>
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </Box>
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
      {/* <button type="submit">submit</button> */}
      {/* </form> */}
    </Box>
  );
};

export default Radiobutton;
