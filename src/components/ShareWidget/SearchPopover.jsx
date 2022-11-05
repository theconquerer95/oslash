import { useState } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SearchPopover = ({ }) => {
    const [access, setAccess] = useState("full")
    const handleAccessChange = (event) => {
        setAccess(event.target.value)
    }
    return <Paper elevation={0} sx={{ width: "100%" }}>
        <Paper sx={{ padding: "8px 16px", display: "flex", marginY: "0 12px", background: "#E5E7EB", width: "100%", alignItems: "center" }} elevation={0}>
            <Input size="small" sx={{ padding: "4px 12px", width: "60%", fontSize: "0.88rem" }} placeholder="Search emails, names or groups" disableUnderline />
            <FormControl variant="standard" sx={{ borderStyle: "none", marginX: "4px", color: "#6B7280" }} size="small" >
                <Select
                    sx={{ color: "#6B7280", fontSize: "0.88rem" }}
                    value={access}
                    onChange={handleAccessChange}
                    disableUnderline
                >
                    <MenuItem sx={{ color: "#111827", fontSize: "0.88rem" }} value="full">Full access</MenuItem>
                    <MenuItem sx={{ fontSize: "0.88rem" }} value="edit">Can edit</MenuItem>
                    <MenuItem sx={{ fontSize: "0.88rem" }} value="view">Can view</MenuItem>
                    <MenuItem sx={{ color: "#DC2626", fontSize: "0.88rem" }} value="none">No Access</MenuItem>
                </Select>
            </FormControl>
            <Button size="small" sx={{ color: "black", background: "white", textTransform: "capitalize", border: "solid 1px #D1D5DB" }} disableElevation variant="contained">Invite</Button>
        </Paper>
    </Paper >
}

export default SearchPopover