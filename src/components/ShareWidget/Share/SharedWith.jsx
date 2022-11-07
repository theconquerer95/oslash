import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Access from '../../Access'

const SharedWithListItem = ({ name, access, empId, email, members }) => {
    const [currentAccess, setCurrentAccess] = useState(access)
    const handleAccessChange = (event) => {
        setCurrentAccess(event.target.value)
    }
    const isPerson = Boolean(empId)
    return <ListItem alignItems="center" sx={{
        display: "flex", justifyContent: "space-between", alignItems: "center", ":hover": {
            background: "#F3F4F6",
            transition: "ease-in-out 0.1s",
            cursor: "pointer",
        }, ":active": {
            background: "#E8E8E8"
        }
    }}><Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar variant={isPerson ? 'circular' : 'rounded'} alt={`${name} image`} sx={{ width: 35, height: 35, textAlign: "center", marginRight: "16px" }} src={isPerson ? "./avatar.jpg" : "./"} />
            <ListItemText
                primary={name}
                secondary={isPerson ? email : `${members.length} workspace members`}
            />
        </Box>
        <Access access={currentAccess} handleAccessChange={handleAccessChange} />
    </ListItem>
}

const SharedWith = ({ data }) => {
    return data.length > 0 ? (
        <List>
            {data.map(datum => <SharedWithListItem {...datum} />)}
        </List>) : null
}

export default SharedWith