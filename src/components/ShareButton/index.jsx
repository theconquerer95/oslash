import { useState } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ShareIcon from '@mui/icons-material/Share';
import Popover from '@mui/material/Popover';
import PublicIcon from '@mui/icons-material/Public';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './index.css'

const ShareButtonContent = ({ handleShowSearch }) => <>
    <Paper sx={{ padding: "2px 12px", display: "flex", width: "100%", alignItems: "center" }} elevation={0}>
        <PublicIcon sx={{ fontSize: "2.5rem" }} color="action" />
        <Paper sx={{ paddingX: "8px", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", }} elevation={0}>
            <p>
                <Typography sx={{ fontWeight: "bold" }}>
                    Share to web
                </Typography>
                <Typography>
                    Publish and share link with anyone
                </Typography>
            </p>
            <Switch />
        </Paper>
    </Paper>
    <Paper sx={{ padding: "16px", display: "flex", marginY: "12px", border: "1px #D1D5DB", borderStyle: "solid none", borderRadius: "0px" }} elevation={0}>
        <Input sx={{ border: "solid 1px #D1D5DB", borderRadius: "6px 0px 0px 6px", padding: "6px 12px" }} placeholder="People, emails, groups" fullWidth disableUnderline onFocus={handleShowSearch} />
        <Button sx={{ borderRadius: "0px 6px 6px 0px", textTransform: "capitalize" }} disableElevation variant="contained">Invite</Button>
    </Paper></>

const SearchContent = ({ }) => {
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

const ShareButton = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [shoudldShowSearch, setShouldShouldSearch] = useState(false)

    const handleShowSearch = () => {
        setShouldShouldSearch(true)
    }

    const handleHideSearch = () => {
        setShouldShouldSearch(false)
    }

    const handleOpenPopover = (event) => {
        handleHideSearch()
        setAnchorEl(event.currentTarget);
    };


    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    const isSharePopoverOpen = Boolean(anchorEl);
    const shareId = isSharePopoverOpen ? 'share-popover' : undefined;


    return <div>
        <Button sx={{ textTransform: "capitalize" }} aria-describedby={shareId} variant="contained" endIcon={<ShareIcon />} onClick={handleOpenPopover} disableElevation>
            Share
        </Button>
        <Popover
            id={shareId}
            open={isSharePopoverOpen}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        ><Paper elevation={0} sx={{ width: "500px" }}>
                {!shoudldShowSearch ? <ShareButtonContent handleShowSearch={handleShowSearch} /> : <SearchContent />}
            </Paper>
        </Popover>
    </div >

}

export default ShareButton

