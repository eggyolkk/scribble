import './chooseActivityStyle.scss'
import CreateJournalLogic from '../../pages/createJournal/createJournalLogic'
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
            <h2 className="createJournalH2">What happened today?</h2>
             
            <div id="activityIconsContainer">
                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Food')}}>
                        <IoFastFoodOutline className={activities.includes('Food') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Food') ? 'activityLabelsSelected' : 'activityLabels'}>Food</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Drinks')}}>
                        <BiDrink className={activities.includes('Drinks') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Drinks') ? 'activityLabelsSelected' : 'activityLabels'}>Drinks</p>
                </div>
                
                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Sleep')}}>
                        <ImSleepy className={activities.includes('Sleep') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Sleep') ? 'activityLabelsSelected' : 'activityLabels'}>Sleep</p>
                </div>
                
                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Exercise')}}>
                        <FaRunning className={activities.includes('Exercise') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Exercise') ? 'activityLabelsSelected' : 'activityLabels'}>Exercise</p>
                </div>
                
                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Entertainment')}}>
                        <FiMonitor className={activities.includes('Entertainment') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Entertainment') ? 'activityLabelsSelected' : 'activityLabels'}>Entertainment</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Friends')}}>
                        <IoPeopleSharp className={activities.includes('Friends') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Friends') ? 'activityLabelsSelected' : 'activityLabels'}>Friends</p>
                </div>
                
                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Family')}}>
                        <BiHomeAlt className={activities.includes('Family') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Family') ? 'activityLabelsSelected' : 'activityLabels'}>Family</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Date')}}>
                        <RiHeart3Line className={activities.includes('Date') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Date') ? 'activityLabelsSelected' : 'activityLabels'}>Date</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Study')}}>
                        <BiPencil className={activities.includes('Study') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Study') ? 'activityLabelsSelected' : 'activityLabels'}>Study</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Work')}}>
                        <BiBriefcase className={activities.includes('Work') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Work') ? 'activityLabelsSelected' : 'activityLabels'}>Work</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Hobbies')}}>
                        <MdPiano className={activities.includes('Hobbies') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Hobbies') ? 'activityLabelsSelected' : 'activityLabels'}>Hobbies</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Drawing')}}>
                        <FaPaintBrush className={activities.includes('Drawing') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Drawing') ? 'activityLabelsSelected' : 'activityLabels'}>Drawing</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Gaming')}}>
                        <RiGamepadLine className={activities.includes('Gaming') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Gaming') ? 'activityLabelsSelected' : 'activityLabels'}>Gaming</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Reading')}}>
                        <FiBookOpen className={activities.includes('Reading') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Reading') ? 'activityLabelsSelected' : 'activityLabels'}>Reading</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Cleaning')}}>
                        <MdOutlineCleaningServices className={activities.includes('Cleaning') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Cleaning') ? 'activityLabelsSelected' : 'activityLabels'}>Cleaning</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Cooking')}}>
                        <GiCookingPot className={activities.includes('Cooking') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Cooking') ? 'activityLabelsSelected' : 'activityLabels'}>Cooking</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Music')}}>
                        <HiOutlineMusicNote className={activities.includes('Music') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Music') ? 'activityLabelsSelected' : 'activityLabels'}>Music</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Gardening')}}>
                        <RiPlantLine className={activities.includes('Gardening') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Gardening') ? 'activityLabelsSelected' : 'activityLabels'}>Gardening</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Beach')}}>
                        <FaUmbrellaBeach className={activities.includes('Beach') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Beach') ? 'activityLabelsSelected' : 'activityLabels'}>Beach</p>
                </div>

                <div>
                    <button className="activityButtons" onClick={() => {toggleSetActivity('Party')}}>
                        <IoBalloonOutline className={activities.includes('Party') ? 'activityIconsSelected' : 'activityIcons'} />
                    </button>
                    <p className={activities.includes('Party') ? 'activityLabelsSelected' : 'activityLabels'}>Party</p>
                </div>
            </div>
        </div>
    )
}

export default ChooseActivity
