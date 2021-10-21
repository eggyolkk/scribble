import './chooseActivityStyle.scss'

import { IoFastFoodOutline, IoPeopleSharp, IoBalloonOutline } from "react-icons/io5"
import { BiDrink, BiHomeAlt, BiPencil, BiBriefcase, BiBookBookmark } from "react-icons/bi"
import { ImSleepy } from "react-icons/im"
import { FaRunning, FaPaintBrush, FaUmbrellaBeach } from "react-icons/fa"
import { FiMonitor, FiBookOpen } from "react-icons/fi"
import { RiHeart3Line, RiPlantLine, RiGamepadLine } from "react-icons/ri"
import { MdPiano, MdOutlineCleaningServices } from "react-icons/md"
import { GrGamepad } from "react-icons/gr"
import { GiCookingPot } from "react-icons/gi"
import { HiOutlineMusicNote } from "react-icons/hi"

const ChooseActivity = (props) => {

    return (
        <div id="chooseActivityContainer">
            <h2 className="createJournalH2">What happened today?</h2>

            <div id="activityIconsContainer">
                <div>
                    <button className="activityButtons"><IoFastFoodOutline className="activityIcons"/></button>
                    <p className="activityLabels">Food</p>
                </div>

                <div>
                    <button className="activityButtons"><BiDrink className="activityIcons"/></button>
                    <p className="activityLabels">Drinks</p>
                </div>
                
                <div>
                    <button className="activityButtons"><ImSleepy className="activityIcons"/></button>
                    <p className="activityLabels">Sleep</p>
                </div>
                
                <div>
                    <button className="activityButtons"><FaRunning className="activityIcons"/></button>
                    <p className="activityLabels">Exercise</p>
                </div>
                
                <div>
                    <button className="activityButtons"><FiMonitor className="activityIcons" /></button>
                    <p className="activityLabels">Entertainment</p>
                </div>

                <div>
                    <button className="activityButtons"><IoPeopleSharp className="activityIcons" /></button>
                    <p className="activityLabels">Friends</p>
                </div>
                
                <div>
                    <button className="activityButtons"><BiHomeAlt className="activityIcons" /></button>
                    <p className="activityLabels">Family</p>
                </div>

                <div>
                    <button className="activityButtons"><RiHeart3Line className="activityIcons" /></button>
                    <p className="activityLabels">Date</p>
                </div>

                <div>
                    <button className="activityButtons"><BiPencil className="activityIcons" /></button>
                    <p className="activityLabels">Study</p>
                </div>

                <div>
                    <button className="activityButtons"><BiBriefcase className="activityIcons" /></button>
                    <p className="activityLabels">Work</p>
                </div>

                <div>
                    <button className="activityButtons"><MdPiano className="activityIcons" /></button>
                    <p className="activityLabels">Hobbies</p>
                </div>

                <div>
                    <button className="activityButtons"><FaPaintBrush className="activityIcons" /></button>
                    <p className="activityLabels">Drawing</p>
                </div>

                <div>
                    <button className="activityButtons"><RiGamepadLine className="activityIcons" /></button>
                    <p className="activityLabels">Gaming</p>
                </div>

                <div>
                    <button className="activityButtons"><FiBookOpen className="activityIcons" /></button>
                    <p className="activityLabels">Reading</p>
                </div>

                <div>
                    <button className="activityButtons"><MdOutlineCleaningServices className="activityIcons" /></button>
                    <p className="activityLabels">Cleaning</p>
                </div>

                <div>
                    <button className="activityButtons"><GiCookingPot className="activityIcons" /></button>
                    <p className="activityLabels">Cooking</p>
                </div>

                <div>
                    <button className="activityButtons"><HiOutlineMusicNote className="activityIcons" /></button>
                    <p className="activityLabels">Music</p>
                </div>

                <div>
                    <button className="activityButtons"><RiPlantLine className="activityIcons" /></button>
                    <p className="activityLabels">Gardening</p>
                </div>

                <div>
                    <button className="activityButtons"><FaUmbrellaBeach className="activityIcons" /></button>
                    <p className="activityLabels">Beach</p>
                </div>

                <div>
                    <button className="activityButtons"><IoBalloonOutline className="activityIcons" /></button>
                    <p className="activityLabels">Party</p>
                </div>
            </div>
        </div>
    )
}

export default ChooseActivity
