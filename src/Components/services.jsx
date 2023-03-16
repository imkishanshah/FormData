// import React, { useState } from "react";
// import { Stack } from "@mui/system";
// import {
//   Box,
//   Typography,
//   FormControl,
//   RadioGroup,
//   Grid,
//   FormControlLabel,
//   Radio,
// } from "@mui/material";

// const Services = () => {
//   const [value, setValue] = useState();
//   const handleChange = (e) => {
//     console.log(e.target.value);
//     setValue(e.target.value);
//   };
//   return (
//     <Stack>
//       <Stack
//         sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
//       >
//         <Box>
//           <Typography mb={2} mt={4} variant="h5">
//             Our Services
//           </Typography>
//           <Typography my={2} variant="subtitle1">
//             Please select which service you are interested in.
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
//                         value="Development"
//                         control={<Radio />}
//                         label="Development"
//                       />
//                     </Box>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Box border={1} margin={2} padding={2}>
//                       <FormControlLabel
//                         value="Web Design"
//                         control={<Radio />}
//                         label="Web Design"
//                       />
//                     </Box>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Box border={1} margin={2} padding={2}>
//                       <FormControlLabel
//                         value="Marketing"
//                         control={<Radio />}
//                         label="Marketing"
//                       />
//                     </Box>
//                   </Grid>
//                   <Grid item xs={6}>
//                     <Box border={1} margin={2} padding={2}>
//                       <FormControlLabel
//                         value="50.000+"
//                         control={<Radio />}
//                         label="others"
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

// export default Services;

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

const Services = ({ onChange }) => {
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
                  value="$5.000 - $10.000"
                  control={<Radio />}
                  label="$5.000 - $10.000"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box border={1} p={1} m={2}>
                <FormControlLabel
                  value="$10.000 - $20.000"
                  control={<Radio />}
                  label="$10.000 - $20.000"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box border={1} p={1} m={2}>
                <FormControlLabel
                  value="$20.000 - $50.000"
                  control={<Radio />}
                  label="$20.000 - $50.000"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box border={1} p={1} m={2}>
                <FormControlLabel
                  value="$50.000 +"
                  control={<Radio />}
                  label="$50.000 +"
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

export default Services;
