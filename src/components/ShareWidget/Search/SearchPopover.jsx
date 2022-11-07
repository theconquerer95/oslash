import { useState } from 'react';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import Access from '../../Access'
import ShareWith from './ShareWith'
import SearchBar from './SearchBar'

const SearchPopover = ({ data, closeSearch, shareWith }) => {
    const [chipData, setChipData] = useState([]);
    const [dataToRender, setDataToRender] = useState(data)
    const [access, setAccess] = useState("full")

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

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
                <SearchBar data={data} setDataToRender={setDataToRender} />
            </Box>
            <Access access={access} handleAccessChange={handleAccessChange} />
        </Box>
        <ShareWith data={dataToRender} selectShareItem={selectShareItem} />
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