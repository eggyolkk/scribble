import { IoFastFoodOutline, IoPeopleSharp, IoBalloonOutline } from "react-icons/io5"
import { BiDrink, BiHomeAlt, BiPencil, BiBriefcase } from "react-icons/bi"
import { ImSleepy } from "react-icons/im"
import { FaRunning, FaPaintBrush, FaUmbrellaBeach } from "react-icons/fa"
import { FiMonitor, FiBookOpen } from "react-icons/fi"
import { RiHeart3Line, RiPlantLine, RiGamepadLine } from "react-icons/ri"
import { MdPiano, MdOutlineCleaningServices } from "react-icons/md"
import { GiCookingPot } from "react-icons/gi"
import { HiOutlineMusicNote } from "react-icons/hi"

// display activity icon
const displayActivityIcon = (activity, type) => {
    let className = ''

    switch (type) {
        case 'display':
            className = 'displayActivitiesIcon'
            break;
        case 'selected':
            className = 'editActivitySelected'
            break;
        case 'unselected':
            className = 'editActivityUnselected'
            break;
        default:
            return ''
    }

    switch(activity) {
        case 'Food':
            return <IoFastFoodOutline className={className} />
        case 'Drinks':
            return <BiDrink className={className} />
        case 'Sleep':
            return <ImSleepy className={className} />
        case 'Exercise':
            return <FaRunning className={className} />
        case 'Entertainment':
            return <FiMonitor className={className} />
        case 'Friends':
            return <IoPeopleSharp className={className} />
        case 'Family':
            return <BiHomeAlt className={className} />
        case 'Date':
            return <RiHeart3Line className={className} />
        case 'Study':
            return <BiPencil className={className} />
        case 'Work':
            return <BiBriefcase className={className} />
        case 'Hobbies':
            return <MdPiano className={className} />
        case 'Drawing':
            return <FaPaintBrush className={className} />
        case 'Gaming':
            return <RiGamepadLine className={className} />
        case 'Reading':
            return <FiBookOpen className={className} />
        case 'Cleaning':
            return <MdOutlineCleaningServices className={className} />
        case 'Cooking':
            return <GiCookingPot className={className} />
        case 'Music':
            return <HiOutlineMusicNote className={className} />
        case 'Gardening':
            return <RiPlantLine className={className} />
        case 'Beach':
            return <FaUmbrellaBeach className={className} />
        case 'Party':
            return <IoBalloonOutline className={className} />
        default:
            return <></>
    }
}

export default displayActivityIcon