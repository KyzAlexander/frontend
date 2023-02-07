import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Address from "./address";

import style from "../styles/index.module.scss";
import { useState } from "react";

const Delivery: React.FC = () => {
  const [checked, setChecked] = useState("");

  return (
    <div className={style["delivery"]}>
      <h1 className={style["delivery__title"]}>Доставка</h1>
      <FormControl>
        <RadioGroup row>
          <FormControlLabel
            value="delivery"
            onChange={() => setChecked("delivery")}
            sx={
              checked === "delivery"
                ? {
                    padding: "8px 42px 10px 10px",
                    marginLeft: "0",
                    backgroundColor: "#F5F5F5",
                  }
                : { padding: "8px 42px 10px 10px", marginLeft: "0" }
            }
            control={
              <Radio
                sx={{
                  color: "#373B49",
                  "&.Mui-checked": { color: "#373B49" },
                }}
              />
            }
            label="Доставка"
          />
          <FormControlLabel
            value="self-delivery"
            onChange={() => setChecked("self-delivery")}
            sx={
              checked === "self-delivery"
                ? { padding: "8px 42px 10px 10px", backgroundColor: "#F5F5F5" }
                : { padding: "8px 42px 10px 10px" }
            }
            control={
              <Radio
                sx={{ color: "#373B49", "&.Mui-checked": { color: "#373B49" } }}
              />
            }
            label="Самовывоз"
          />
        </RadioGroup>
      </FormControl>
      {checked === "delivery" ? <Address /> : null}
    </div>
  );
};
export default Delivery;
