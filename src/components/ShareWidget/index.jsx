import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ShareIcon from '@mui/icons-material/Share';
import Popover from '@mui/material/Popover';
import SharePopoverContent from './SharePopover';
import SearchPopoverContent from "./SearchPopover"
import './index.css'


const ShareWidget = ({ data }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [sharedWith, setSharedWith] = useState([])
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

    const shareWith = (toBeSharedWith = []) => {
        // Make some backend API call
        setSharedWith([...sharedWith, ...toBeSharedWith])
    }

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
        ><Box elevation={0} sx={{ width: "500px", borderRadius: "8px" }}>
                {!shoudldShowSearch ? <SharePopoverContent handleShowSearch={handleShowSearch} sharedWith={sharedWith} /> : <SearchPopoverContent data={data} closeSearch={handleHideSearch} shareWith={shareWith} />}
            </Box>
        </Popover>
    </div >

}

export default ShareWidget

