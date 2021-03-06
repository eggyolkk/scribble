import { useState } from 'react'
import './searchbarStyle.scss'

const Searchbar = () => {
    const [search, setSearch] = useState('')
    const selectedTheme = window.sessionStorage.getItem('theme')

    // handle search when user presses 'enter' key
    const enterSearch = async (e) => {
        if (e.keyCode === 13) {
            window.location.href = `/dashboard/${search}`
        }
    }

    return (
        <>
        <input
            id={selectedTheme === 'light' ? "dashboardSearchBar" : "dashboardSearchBarDark"}
            type='text'
            placeholder='Search in your posts...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => enterSearch(e)}
        ></input>
        </>
    )
}

export default Searchbar