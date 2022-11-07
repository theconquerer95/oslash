import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Access = ({ access, handleAccessChange }) => {
    return <FormControl variant="standard" sx={{ borderStyle: "none", marginX: "4px", color: "#6B7280" }} size="small" >
        <Select
            sx={{ color: "#6B7280", fontSize: "0.88rem" }}
            value={access}
            onChange={handleAccessChange}
            disableUnderline
        >
            <MenuItem sx={{ color: "#111827", fontSize: "0.88rem" }} value="full">Full access</MenuItem>
            <MenuItem sx={{ fontSize: "0.88rem" }} value="edit">Can edit</MenuItem>
            <MenuItem sx={{ fontSize: "0.88rem" }} value="view">Can view</MenuItem>
            <MenuItem sx={{ color: "#DC2626", fontSize: "0.88rem" }} value="none">No access</MenuItem>
        </Select>
    </FormControl>
}

export default Access