import React, { useState } from 'react'
import side from './sidebar.module.css'
const Sidebar = ({ file, setfile, setfolder, category}) => {
        function handlefolderclick() {
            setfolder(true);
            setfile(false);
            console.log("folder active");
        }

        function handlenotesclick() {
            setfile(true);
            setfolder(false);
            console.log("notes active");
        }
        function handledefault(){
            setfile(false);
            setfolder(false);
        }
    return (
        <div className={side.sidebar}>
            <div className={side.logo}>logo</div>
            <div className={side.sidele}><button className={side.home} onClick={handledefault}>🏠</button>
                <button className={side.home} onClick={handlefolderclick}>📁</button><button className={side.note} onClick={handlenotesclick}>🗒️</button></div>
        </div>
    )
}

export default Sidebar
