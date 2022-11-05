import { useState } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ShareIcon from '@mui/icons-material/Share';
import Popover from '@mui/material/Popover';
import SharePopoverContent from './SharePopover';
import SearchPopoverContent from "./SearchPopover"
import './index.css'


const ShareWidget = () => {
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
                {!shoudldShowSearch ? <SharePopoverContent handleShowSearch={handleShowSearch} /> : <SearchPopoverContent />}
            </Paper>
        </Popover>
    </div >

}

export default ShareWidget

