import React from 'react'
import side from './sidebar.module.css'
const Sidebar = () => {
    return (
        <div className={side.sidebar}>
            <div className={side.logo}>logo</div>
            <div className={side.sidele}><button className={side.home}>🏠</button>
            <button className={side.home}>📁</button><button className={side.note}>🗒️</button></div>
        </div>
    )
}

export default Sidebar
