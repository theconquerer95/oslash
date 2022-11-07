import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PublicIcon from '@mui/icons-material/Public';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Input from '@mui/material/Input';
import SharedWith from './SharedWith'

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