import React from 'react'
import MeetingCard from '../../Components/MeetingCard/MeetingCard'
import './Meeting.css'

const Meeting = () => {
  return (
    <div className="__meeting">
        <h1>Meeting Schedule</h1>
        <div className="__card">
            <MeetingCard/>
            <MeetingCard/>
            <MeetingCard/>
            <MeetingCard/>
            <MeetingCard/>
            <MeetingCard/>
            <MeetingCard/>
            <MeetingCard/>
            <MeetingCard/>
            <MeetingCard/>
        </div>
    </div>
  )
}

export default Meeting