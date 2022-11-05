import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import PublicIcon from '@mui/icons-material/Public';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Input from '@mui/material/Input';

const SharePopover = ({ handleShowSearch }) => <>
    <Paper sx={{ padding: "12px", display: "flex", border: "1px #D1D5DB", borderStyle: "solid none", borderRadius: "0px" }} elevation={0}>
        <Input size="small" sx={{ border: "solid 1px #D1D5DB", borderRadius: "6px 0px 0px 6px", padding: "4px 8px" }} placeholder="People, emails, groups" fullWidth disableUnderline onFocus={handleShowSearch} />
        <Button size="small" sx={{ borderRadius: "0px 6px 6px 0px", textTransform: "capitalize" }} disableElevation variant="contained">Invite</Button>
    </Paper>
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
</>

export default SharePopover