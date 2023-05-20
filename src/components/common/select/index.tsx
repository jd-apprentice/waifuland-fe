import { Select, Box } from '@chakra-ui/react'
import { Tag } from '../../../models/types'

interface SelectProps {
    options: Tag[] | undefined
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectBox = ({ options, onChange }: SelectProps) => {
    return (
        <Box mt={3} mb={1}>
            <Select onChange={onChange} defaultValue={1}>
                {options &&
                    options.map((option, index) => (
                        <option key={index} value={option.tag_id}>
                            {option.name}
                        </option>
                    ))}
            </Select>
        </Box>
    )
}

export default SelectBox
