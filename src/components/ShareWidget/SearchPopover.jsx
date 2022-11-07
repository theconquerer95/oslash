import { useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';

const ShareWith = ({ data, selectShareItem }) => <>
    {data?.people?.length > 0 && (<List>
        <Typography variant='body1' sx={{ marginLeft: "16px", marginBottom: "8px" }} >Select a person</Typography>
        {data.people.map(person => <ListItem alignItems="center" sx={{
            display: "flex", ":hover": {
                background: "#F3F4F6",
                transition: "ease-in-out 0.1s",
                cursor: "pointer",
            }, ":active": {
                background: "#E8E8E8"
            }
        }} onClick={() => selectShareItem(person.email, person.name, person)}>
            <Avatar alt={`${person.name} image`} sx={{ width: 35, height: 35, textAlign: "center", marginRight: "16px" }} src="./avatar.jpg" />
            <Typography variant="body1">{person.name}</Typography>
        </ListItem>)}
    </List>)}

    {data?.groups?.length > 0 && (<List>
        <Typography variant='body1' sx={{ marginLeft: "16px", marginBottom: "8px" }} >Select a group</Typography>
        {data.groups.map(group => <ListItem alignItems="center" sx={{
            display: "flex", ":hover": {
                background: "#F3F4F6",
                transition: "ease-in-out 0.1s",
                cursor: "pointer",
            }, ":active": {
                background: "#E8E8E8"
            }
        }} onClick={() => selectShareItem(group.code, group.name, group)}>
            <Avatar variant="rounded" alt={`${group.name} image`} sx={{ width: 35, height: 35, textAlign: "center", marginRight: "16px" }} src="./" />
            <Typography variant="body1">{group.name}</Typography>
        </ListItem>)}
    </List>)}
</>


const SearchPopover = ({ data, closeSearch, shareWith }) => {
    const [chipData, setChipData] = useState([]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };
    const [access, setAccess] = useState("full")

    const handleAccessChange = (event) => {
        setAccess(event.target.value)
    }
    const selectShareItem = (key, label, item) => {
        setChipData([...chipData, { key, label, item }])
    }

    const inviteAll = () => {
        shareWith(chipData.map(({ item }) => ({ ...item, access })))
        closeSearch()
    }

    return <Box sx={{ width: "100%" }}>
        <Box sx={{ padding: "8px 0px", display: "flex", marginY: "0px 12px", background: "#E5E7EB", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", flexWrap: "wrap", width: "75%" }}>
                <Box sx={{ display: 'flex', flexWrap: "nowrap", overflowX: "scroll", marginX: "4px" }}>{chipData.map((data) => (
                    <ListItem sx={{ width: "auto", padding: "3px", }} key={data.key}>
                        <Chip
                            size="small"
                            sx={{ borderRadius: "4px" }}
                            label={data.label}
                            onDelete={handleDelete(data)}
                        />
                    </ListItem>
                )
                )}</Box>
                <Input size="small" sx={{ padding: "4px 8px", fontSize: "0.88rem", flexGrow: "1" }} placeholder="Search emails, names or groups" disableUnderline />
            </Box>
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
                    <MenuItem sx={{ color: "#DC2626", fontSize: "0.88rem" }} value="none">No access</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <ShareWith data={data} selectShareItem={selectShareItem} />
        <Box sx={{ background: "#E5E7EB", padding: "8px", display: "flex", justifyContent: "space-between" }}>
            <Typography variant="subtitle2" color="#818181"><HelpCenterOutlinedIcon fontSize="small" sx={{ marginRight: "2px" }} />learn about sharing</Typography>
            <span>
                <Button size="small" sx={{
                    background: "#FFF",
                    color: "#000",
                    textTransform: "capitalize", marginRight: "4px", ":hover": {
                        background: "#F3F4F6",
                        transition: "ease-in-out 0.1s",
                        cursor: "pointer",
                    }, ":active": {
                        background: "#E8E8E8"
                    }
                }} disableElevation variant="contained" onClick={closeSearch}>Cancel</Button>
                <Button size="small" sx={{ textTransform: "capitalize" }} disableElevation variant="contained" onClick={inviteAll}>Invite</Button>
            </span>
        </Box>
    </Box>
}

export default SearchPopover