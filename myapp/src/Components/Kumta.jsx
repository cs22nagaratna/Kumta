import React from "react";
import "./Kumta.css"
import { AiOutlineBell } from "react-icons/ai";
import { LuUserRound } from "react-icons/lu";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { FiMic } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BiBulb } from "react-icons/bi";


const Kumta = () => {
    return(
        <div className="container">
            <div className="namma-kumta">
                <img src="https://www.shutterstock.com/shutterstock/photos/2463989253/display_1500/stock-vector-tropical-sunset-serenity-summer-background-vector-illustration-2463989253.jpg" alt="logo" />
                <div className="type">Namma Kumata</div>
                <div className="i">
                    <div className="bell"><AiOutlineBell /></div>
                    <div className="user"><LuUserRound /></div>
                    <div className="global"><AiOutlineGlobal /></div>
                </div>
            </div>
            <div className="search">
                <div className="search1">
                    <div className="search-i"><IoSearch /></div>
                    <div className="here">Search here...</div>
                    <div className="voice"><FiMic /></div>
                </div>
            </div>
            <div className="images">
                <div className="images1"></div>
            </div>
            <div className="icons">
                <div className="icons1">
                    <div className="home"><FiHome/></div>
                    <div className="search11"><IoSearch/></div>
                    <div className="add"><IoIosAddCircleOutline /></div>
                    <div className="alert"><BiBulb/></div>
                </div>
            </div>
        </div>
    )
}
export default Kumta