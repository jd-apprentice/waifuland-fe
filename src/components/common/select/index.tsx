import { Select, Box } from "@chakra-ui/react";
import { Tag } from "../../../models/types";

interface SelectProps {
  options: Tag[] | undefined;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBox = ({ options, onChange }: SelectProps) => {
  return (
    <Box mb={1}>
      <Select onChange={onChange} defaultValue={1}>
        {options &&
          options.map((option) => (
            <option value={option.tag_id}>{option.name}</option>
          ))}
      </Select>
    </Box>
  );
};

export default SelectBox;
