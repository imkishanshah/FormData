import {
  Typography,
  Box,
  TextField,
  InputLabel,
  InputAdornment,
  Grid,
} from "@mui/material";

import { Stack } from "@mui/system";

import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BusinessIcon from "@mui/icons-material/Business";

const MuiForm = ({ formik }) => {
  return (
    <Stack>
      <Stack>
        <Stack
          sx={{
            display: "flex",
            margin: "2",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography mb={3} mt={5} variant="h5">
              Contact details
            </Typography>
            <Typography my={3} variant="subtitle1">
              Please fill in information so we can get in touch
            </Typography>
            <Stack direction="column" spacing={1}>
              <Grid
                container
                my={2}
                columnSpacing={{ xs: 6 }}
                rowSpacing={{ xs: 3 }}
              >
                <Grid item xs={6}>
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Name
                  </InputLabel>
                  <TextField
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.touched.name)}
                    id="input-with-icon-adornment"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Stack sx={{ marginY: "4" }}>
                    <InputLabel htmlFor="input-with-icon-adornment">
                      Email
                    </InputLabel>
                  </Stack>
                  <TextField
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.email && Boolean(formik.touched.email)
                    }
                    id="input-with-icon-adornment"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <MailOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Phone
                  </InputLabel>
                  <TextField
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.phone && Boolean(formik.touched.phone)
                    }
                    id="input-with-icon-adornment"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PhoneAndroidIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Company
                  </InputLabel>
                  <TextField
                    name="company"
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.company && Boolean(formik.touched.company)
                    }
                    id="input-with-icon-adornment"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <BusinessIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MuiForm;
