import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import PublicIcon from '@mui/icons-material/Public';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SharedWithListItem = ({ name, access }) => {
    const [currentAccess, setCurrentAccess] = useState(access)
    const handleAccessChange = (event) => {
        setCurrentAccess(event.target.value)
    }
    return <ListItem alignItems="center" sx={{
        display: "flex", justifyContent: "space-between", alignItems: "center", ":hover": {
            background: "#F3F4F6",
            transition: "ease-in-out 0.1s",
            cursor: "pointer",
        }, ":active": {
            background: "#E8E8E8"
        }
    }}><Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar alt={`${name} image`} sx={{ width: 35, height: 35, textAlign: "center", marginRight: "16px" }} src="./avatar.jpg" />
            <Typography variant="body1">{name}</Typography>
        </Box>
        <FormControl variant="standard" sx={{ borderStyle: "none", marginX: "4px", color: "#6B7280" }} size="small" >
            <Select
                sx={{ color: "#6B7280", fontSize: "0.88rem" }}
                value={currentAccess}
                onChange={handleAccessChange}
                disableUnderline
            >
                <MenuItem sx={{ color: "#111827", fontSize: "0.88rem" }} value="full">Full access</MenuItem>
                <MenuItem sx={{ fontSize: "0.88rem" }} value="edit">Can edit</MenuItem>
                <MenuItem sx={{ fontSize: "0.88rem" }} value="view">Can view</MenuItem>
                <MenuItem sx={{ color: "#DC2626", fontSize: "0.88rem" }} value="none">No access</MenuItem>
            </Select>
        </FormControl>
    </ListItem>
}

const SharedWith = ({ data }) => {
    return data.length > 0 ? (
        <List>
            {data.map(datum => <SharedWithListItem {...datum} />)}
        </List>) : null
}

const SharePopover = ({ handleShowSearch, sharedWith }) => <>
    <Box sx={{ padding: "2px 12px", display: "flex", width: "100%", alignItems: "center" }}>
        <PublicIcon sx={{ fontSize: "2.5rem" }} color="action" />
        <Box sx={{ paddingX: "8px", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", }}>
            <p>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Share to web
                </Typography>
                <Typography sx={{ color: "#6B7280" }} variant="subtitle2">
                    Publish and share link with anyone
                </Typography>
            </p>
            <Switch />
        </Box>
    </Box>
    <Box sx={{ padding: "12px", display: "flex", border: "1px #D1D5DB", borderStyle: "solid none", borderRadius: "0px" }}>
        <Input size="small" sx={{ border: "solid 1px #D1D5DB", borderRadius: "6px 0px 0px 6px", padding: "4px 8px" }} placeholder="People, emails, groups" fullWidth disableUnderline onFocus={handleShowSearch} />
        <Button size="small" sx={{ borderRadius: "0px 6px 6px 0px", textTransform: "capitalize" }} disableElevation variant="contained">Invite</Button>
    </Box>
    <SharedWith data={sharedWith} />
</>

export default SharePopover