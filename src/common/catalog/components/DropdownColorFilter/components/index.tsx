import React from "react";
import classnames from "classnames";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ItemColorFilter from "./ItemColorFilter";

import { IColorDropdownFilterProps } from "../interfaces";

import style from "../styles/index.module.scss";

const DropdownColorFilter: React.FC<IColorDropdownFilterProps> = ({
  title,
  gradientColorTop,
  gradientColorMid,
  gradientColorBot,
  isOpen,
  handleOpen,
  dropdownFilterColor,
}) => {
  return (
    <div className={style["dropdown-color-filter"]}>
      <div
        className={style["dropdown-color-filter__title-list"]}
        onClick={handleOpen}
      >
        <div className={style["dropdown-color-filter__gradient-colors"]}>
          <span
            className={style["color-top"]}
            style={{ backgroundColor: gradientColorTop }}
          ></span>
          <span
            className={style["color-mid"]}
            style={{ backgroundColor: gradientColorMid }}
          ></span>
          <span
            className={style["color-bot"]}
            style={{ backgroundColor: gradientColorBot }}
          ></span>
        </div>
        <span className={style["dropdown-color-filter__name-title"]}>
          {title}
        </span>
        <ArrowDropDownIcon
          className={classnames(style["dropdown-color-filter__icon"], {
            [style["rotate-icon"]]: isOpen,
          })}
        />
      </div>
      {isOpen && (
        <div className={style["dropdown-color-filter__scrolling-block"]}>
          <ItemColorFilter filters={dropdownFilterColor} />
        </div>
      )}
    </div>
  );
};
export default DropdownColorFilter;
