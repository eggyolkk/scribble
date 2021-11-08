import './chooseActivityStyle.scss'
import { IoFastFoodOutline, IoPeopleSharp, IoBalloonOutline } from "react-icons/io5"
import { BiDrink, BiHomeAlt, BiPencil, BiBriefcase } from "react-icons/bi"
import { ImSleepy } from "react-icons/im"
import { FaRunning, FaPaintBrush, FaUmbrellaBeach } from "react-icons/fa"
import { FiMonitor, FiBookOpen } from "react-icons/fi"
import { RiHeart3Line, RiPlantLine, RiGamepadLine } from "react-icons/ri"
import { MdPiano, MdOutlineCleaningServices } from "react-icons/md"
import { GiCookingPot } from "react-icons/gi"
import { HiOutlineMusicNote } from "react-icons/hi"
import React from 'react'

const ChooseActivity = (props) => {
    const { activities, setActivity } = props
    const selectedTheme = window.sessionStorage.getItem('theme')

    // if the user has selected an activity, add to activities list
    // else if the activity is already in the list, remove from activities list
    const toggleSetActivity = (selectedActivity) => {
        if (!activities.includes(selectedActivity)) {
            setActivity([...activities, selectedActivity])
        }
        else {
            setActivity(activities.filter(activity => activity !== selectedActivity))
        }
    }

    return (
        <div id="chooseActivityContainer">
            <h2 className={selectedTheme === 'light' ? "createJournalH2" : "createJournalH2Dark"}>What happened today?</h2>
             
            <div id="activityIconsContainer">
                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Food')}}>
                        <IoFastFoodOutline className={activities.includes('Food') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Food') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Food') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'}
                        />
                    </button>
                    <p className={activities.includes('Food') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Food') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Food') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Food</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Drinks')}}>
                        <BiDrink className={activities.includes('Drinks') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Drinks') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Drinks') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Drinks') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Drinks') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Drinks') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Drinks</p>
                </div>
                
                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Sleep')}}>
                        <ImSleepy className={activities.includes('Sleep') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Sleep') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Sleep') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Sleep') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Sleep') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Sleep') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Sleep</p>
                </div>
                
                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Exercise')}}>
                        <FaRunning className={activities.includes('Exercise') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Exercise') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Exercise') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Exercise') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Exercise') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Exercise') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Exercise</p>
                </div>
                
                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Entertainment')}}>
                        <FiMonitor className={activities.includes('Entertainment') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Entertainment') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Entertainment') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Entertainment') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Entertainment') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Entertainment') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Entertainment</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Friends')}}>
                        <IoPeopleSharp className={activities.includes('Friends') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Friends') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Friends') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Friends') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Friends') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Friends') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Friends</p>
                </div>
                
                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Family')}}>
                        <BiHomeAlt className={activities.includes('Family') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Family') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Family') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Family') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Family') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Family') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Family</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Date')}}>
                        <RiHeart3Line className={activities.includes('Date') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Date') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Date') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Date') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Date') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Date') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Date</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Study')}}>
                        <BiPencil className={activities.includes('Study') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Study') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Study') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Study') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Study') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Study') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Study</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Work')}}>
                        <BiBriefcase className={activities.includes('Work') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Work') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Work') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Work') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Work') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Work') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Work</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Hobbies')}}>
                        <MdPiano className={activities.includes('Hobbies') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Hobbies') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Hobbies') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Hobbies') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Hobbies') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Hobbies') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Hobbies</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Drawing')}}>
                        <FaPaintBrush className={activities.includes('Drawing') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Drawing') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Drawing') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Drawing') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Drawing') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Drawing') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Drawing</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Gaming')}}>
                        <RiGamepadLine className={activities.includes('Gaming') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Gaming') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Gaming') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Gaming') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Gaming') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Gaming') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Gaming</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Reading')}}>
                        <FiBookOpen className={activities.includes('Reading') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Reading') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Reading') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Reading') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Reading') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Reading') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Reading</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Cleaning')}}>
                        <MdOutlineCleaningServices className={activities.includes('Cleaning') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Cleaning') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Cleaning') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Cleaning') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Cleaning') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Cleaning') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Cleaning</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Cooking')}}>
                        <GiCookingPot className={activities.includes('Cooking') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Cooking') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Cooking') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Cooking') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Cooking') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Cooking') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Cooking</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Music')}}>
                        <HiOutlineMusicNote className={activities.includes('Music') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Music') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Music') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Music') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Music') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Music') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Music</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Gardening')}}>
                        <RiPlantLine className={activities.includes('Gardening') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Gardening') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Gardening') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Gardening') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Gardening') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Gardening') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Gardening</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Beach')}}>
                        <FaUmbrellaBeach className={activities.includes('Beach') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Beach') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Beach') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Beach') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Beach') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Beach') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Beach</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Party')}}>
                        <IoBalloonOutline className={activities.includes('Party') && selectedTheme === 'light' ? 
                        'activityIconsSelected' : 
                        activities.includes('Party') && selectedTheme === 'dark' ? 
                        'activityIconsSelectedDark' : 
                        !activities.includes('Party') && selectedTheme === 'light' ?
                        'activityIcons' :
                        'activityIconsDark'} />
                    </button>
                    <p className={activities.includes('Party') && selectedTheme === 'light' ? 
                    'activityLabelsSelected' : 
                    activities.includes('Party') && selectedTheme === 'dark' ?
                    'activityLabelsSelectedDark' :
                    !activities.includes('Party') && selectedTheme === 'light' ?
                    'activityLabels' :
                    'activityLabelsDark'}>Party</p>
                </div>
            </div>
        </div>
    )
}

export default ChooseActivity
