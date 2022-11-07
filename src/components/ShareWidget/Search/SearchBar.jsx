import { useState } from 'react';

import Input from '@mui/material/Input';
import Fuse from 'fuse.js'

const SearchBar = ({ data, setDataToRender }) => {
    const [query, setQuery] = useState('');
    const options = {
        keys: ['name']
    }
    const fuse = new Fuse([...data.people, ...data.groups], options)

    const handleSearchChange = (event) => {
        setQuery(event.target.value)
    }

    const handleSearchKeyPress = (event) => {
        if (event.key === "Enter") {
            const cleanedQuery = query.trim();
            if (cleanedQuery !== '') {
                const result = fuse.search(cleanedQuery)
                setDataToRender(result.reduce((acc, curr) => {
                    if (curr.item.empId) {
                        if (!acc.people)
                            acc.people = []
                        acc.people.push(curr.item)
                    }
                    else {
                        if (!acc.groups)
                            acc.groups = []
                        acc.groups.push(curr.item)
                    }
                    return acc
                }, {}))
            }
        }
    }
    return <Input size="small" sx={{ padding: "4px 8px", fontSize: "0.88rem", flexGrow: "1" }} placeholder="Search emails, names or groups" disableUnderline onKeyPress={handleSearchKeyPress} value={query} onChange={handleSearchChange} />
}

export default SearchBar