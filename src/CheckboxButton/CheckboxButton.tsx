import { Checkbox } from "@mantine/core";
import classes from "./CheckboxButton.module.css";

interface CheckboxButtonProps {
  label: string;
  value: string;
  checked?: boolean;
  setChecked?: (newVal: boolean) => void;
}

export const CheckboxButton: React.FC<CheckboxButtonProps> = ({
  label,
  value,
  checked,
  setChecked,
}) => {
  return (
    <Checkbox
      classNames={classes}
      label={label}
      value={value}
      checked={checked}
      description="This is a description"
      onChange={(event) => setChecked?.(event.currentTarget.checked)}
      wrapperProps={{
        onClick: () => setChecked?.(!checked),
      }}
    />
  );
};
