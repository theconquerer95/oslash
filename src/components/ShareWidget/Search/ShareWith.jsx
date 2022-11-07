import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const ShareWithListitem = ({ item, selectShareItem }) => {
    const { name, email, deptCode, empId } = item
    const isPerson = Boolean(empId)

    return <ListItem alignItems="center" sx={{
        display: "flex", ":hover": {
            background: "#F3F4F6",
            transition: "ease-in-out 0.1s",
            cursor: "pointer",
        }, ":active": {
            background: "#E8E8E8"
        }
    }} onClick={() => selectShareItem(isPerson ? email : deptCode, name, item)}>
        <Avatar variant={isPerson ? 'circular' : 'rounded'} alt={`${name} image`} sx={{ width: 35, height: 35, textAlign: "center", marginRight: "16px" }} src={isPerson ? "./avatar.jpg" : "./"} />
        <Typography variant="body1">{name}</Typography>
    </ListItem>
}

const ShareWith = ({ data, selectShareItem }) => <>
    {data?.people?.length > 0 && (<List>
        <Typography variant='body1' sx={{ marginLeft: "16px", marginBottom: "8px" }} >Select a person</Typography>
        {data.people.map(person => <ShareWithListitem item={person} selectShareItem={selectShareItem} />)}
    </List>)}

    {data?.groups?.length > 0 && (<List>
        <Typography variant='body1' sx={{ marginLeft: "16px", marginBottom: "8px" }} >Select a group</Typography>
        {data.groups.map(group => <ShareWithListitem item={group} selectShareItem={selectShareItem} />)}
    </List>)}
</>

export default ShareWith