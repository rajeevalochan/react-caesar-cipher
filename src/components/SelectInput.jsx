import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const SelectInput = ({ value, onChange, menuItem = [] }) => {
  return (
    <Select value={value} onChange={onChange}>
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {menuItem.map(menu => (
        <MenuItem value={menu} key={menu}>
          {menu}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectInput;
