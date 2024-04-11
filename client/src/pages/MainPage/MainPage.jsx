import { Link } from "react-router-dom";
import "./MainPage.css";

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MainPage() {
  const [info, setInfo] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="title-container ">
          <h1 className="title is-1">Zvol operaci</h1>
        </div>

        <div className="boxes">
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Cat</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={info}
                label="Cat"
                onChange={handleChange}
              >
                <MenuItem value={10}>
                  <Link className="column" to={"/createcat"}>
                    <p>Cat create form</p>
                  </Link>
                </MenuItem>
                <MenuItem value={20}>
                  <Link className="column" to={"/cats"}>
                    <p>Cat list</p>
                  </Link>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Student</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={info}
                label="Student"
                onChange={handleChange}
              >
                <MenuItem value={10}>
                  <Link className="column" to={"/createstudent"}>
                    <p>Student create form</p>
                  </Link>
                </MenuItem>
                <MenuItem value={20}>
                  <Link className="column" to={"/students"}>
                    <p>Student list</p>
                  </Link>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Podnikatel</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={info}
                label="Podnikatel"
                onChange={handleChange}
              >
                <MenuItem value={10}>
                  <Link className="column" to={"/createpodnikatel"}>
                    <p>Podnikatel create form</p>
                  </Link>
                </MenuItem>
                <MenuItem value={20}>
                  <Link className="column" to={"/podnikatels"}>
                    <p>Podnikatel list</p>
                  </Link>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </>
  );
}
