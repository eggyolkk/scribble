import { useState, useEffect } from 'react'
import { IoFastFoodOutline, IoPeopleSharp, IoBalloonOutline } from "react-icons/io5"
import { BiDrink, BiHomeAlt, BiPencil, BiBriefcase } from "react-icons/bi"
import { ImSleepy } from "react-icons/im"
import { FaRunning, FaPaintBrush, FaUmbrellaBeach } from "react-icons/fa"
import { FiMonitor, FiBookOpen } from "react-icons/fi"
import { RiHeart3Line, RiPlantLine, RiGamepadLine } from "react-icons/ri"
import { MdPiano, MdOutlineCleaningServices } from "react-icons/md"
import { GiCookingPot } from "react-icons/gi"
import { HiOutlineMusicNote } from "react-icons/hi"
import './displayActivitiesStyle.scss'

const DisplayActivities = (props) => {
    const activities = props
    const [activitiesArray, setActivitiesArray] = useState([])

    // on initial page render, get activities array
    useEffect(() => {
        getActivitiesArray()
    }, [])

    // convert activities string to an array
    const getActivitiesArray = () => {
        setActivitiesArray(activities.activities.split(','))
    }

    // display activity icon
    const displayActivityIcon = (activity) => {
        switch(activity) {
            case 'Food':
                return <IoFastFoodOutline className="displayActivitiesIcon" />
            case 'Drinks':
                return <BiDrink className="displayActivitiesIcon" />
            case 'Sleep':
                return <ImSleepy className="displayActivitiesIcon" />
            case 'Exercise':
                return <FaRunning className="displayActivitiesIcon" />
            case 'Entertainment':
                return <FiMonitor className="displayActivitiesIcon" />
            case 'Friends':
                return <IoPeopleSharp className="displayActivitiesIcon" />
            case 'Family':
                return <BiHomeAlt className="displayActivitiesIcon" />
            case 'Date':
                return <RiHeart3Line className="displayActivitiesIcon" />
            case 'Study':
                return <BiPencil className="displayActivitiesIcon" />
            case 'Work':
                return <BiBriefcase className="displayActivitiesIcon" />
            case 'Hobbies':
                return <MdPiano className="displayActivitiesIcon" />
            case 'Drawing':
                return <FaPaintBrush className="displayActivitiesIcon" />
            case 'Gaming':
                return <RiGamepadLine className="displayActivitiesIcon" />
            case 'Reading':
                return <FiBookOpen className="displayActivitiesIcon" />
            case 'Cleaning':
                return <MdOutlineCleaningServices className="displayActivitiesIcon" />
            case 'Cooking':
                return <GiCookingPot className="displayActivitiesIcon" />
            case 'Music':
                return <HiOutlineMusicNote className="displayActivitiesIcon" />
            case 'Gardening':
                return <RiPlantLine className="displayActivitiesIcon" />
            case 'Beach':
                return <FaUmbrellaBeach className="displayActivitiesIcon" />
            case 'Party':
                return <IoBalloonOutline className="displayActivitiesIcon" />
        }
    }

    const activitiesMap = activitiesArray.map((activity, index) => 
    <div key={index}>
        {displayActivityIcon(activity)}
        <p id="displayActivityLabel">{activity}</p>
    </div>
    )

    return (
        <div id="displayActivitiesContainer">
            {activitiesMap}
        </div>
    )
}

export default DisplayActivities
