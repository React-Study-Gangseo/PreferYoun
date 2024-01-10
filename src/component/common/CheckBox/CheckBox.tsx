import React from 'react'
import Checkbox from "@mui/material/Checkbox";
import RadioButtonChecked from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked';

const label = { inputProps: { 'aria-label': '장바구니 아이템 체크' } };
interface CheckBoxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}
export default function CheckBox({checked, onChange}:CheckBoxProps) {
  return (
    <Checkbox
                {...label}
                icon={<RadioButtonUnchecked />}
                checkedIcon={<RadioButtonChecked />}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
              />
  )
}
