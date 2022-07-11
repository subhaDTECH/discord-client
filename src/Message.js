import { Avatar } from '@material-ui/core'
import React,{ forwardRef } from 'react'
import './Message.css';
import Moment from 'react-moment';
import 'moment-timezone';
import * as timeago from 'timeago.js';


const Message = forwardRef(({ timestamp, user, message },ref) => {
// const Message = ({ message }) => {

    // console.log(message)

    return (
        <div ref={ref} className='message' >
            <Avatar src={user?.photo} />
            <div className="message__info">
                <h4>{user?.displayName}
                    <span className="message__timestamp">{timeago.format(timestamp) }</span>
                </h4>

                <p>{message}</p> 
        </div>
        </div>
    )});

export default Message
