import React from "react";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonChecked from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUnchecked from "@mui/icons-material/RadioButtonUnchecked";

interface CheckBoxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id: string;
}
export default function CheckBox({ checked, onChange, id }: CheckBoxProps) {
  return (
    <>
      <Checkbox
        icon={<RadioButtonUnchecked />}
        checkedIcon={<RadioButtonChecked />}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        name={id}
      />
      <label className="a11y-hidden" htmlFor={id}>
        {`체크박스-${id}`}
      </label>
    </>
  );
}
