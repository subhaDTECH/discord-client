import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CradGiftcardIcon from '@material-ui/icons/CardGiftcard'
import GifIcon from '@material-ui/icons/Gif'
import EmojiEmoticonsIcon from '@material-ui/icons/EmojiEmotions'
import Message from './Message'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { selectChannelId, selectChannelName } from './features/appSlice'
import { useState } from 'react'
import { useEffect } from 'react'
import db from './firebase'
import firebase from 'firebase';
import axios from "./axios";
import Pusher from "pusher-js";
import FlipMove from 'react-flip-move';


const pusher = new Pusher('90188229a21cc6e13176', {
    cluster: 'ap2'
  });

const Chat = () => {
    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])

  console.log("messa--->",messages)

const getMessages=async(channelId)=>{
  const res= await axios.get(`get/messages?id=${channelId}`);
  
//   console.log("res data:",res.data)
  setMessages(res.data[0].conversation);
  

}
// useEffect(()=>{
//     getMessages(channelId);
// },[])

    useEffect(() => {
        // if (channelId) {
        //     db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        //         setMessages(snapshot.docs.map(doc => doc.data()))
        //     })
        // }
        if(channelId){
            // pusher.unsubscribe('message');
            getMessages(channelId);

            const channel = pusher.subscribe('message');
            channel.bind('newMessage', function(data) {
                getMessages(channelId);
            });




            return ()=>{
                channel.unbind_all();
                channel.unsubscribe();
            }
        }
       


    }, [channelId])

    const sendMessage = async(e) => {
        e.preventDefault()
        console.log("sendmeasass")

        // db.collection('channels').doc(channelId).collection('messages').add({
        //     message: input,
        //     user: user,
        //     timestamp: firebase.firestore.FieldValue.serverTimestamp()
        // })
       const postdata=await axios.post(`/new/message?id=${channelId}`,{
            message:input,
            timestamp:Date.now(),
            user:user

        })

    setInput('')
    // getMessages(channelId);
    }

    return (
        <div className='chat' >
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                {messages.map((message) => {
                    console.log(message)
                })}
                <FlipMove>
                {messages.map(message => (
                    <Message  message={message.message} timestamp={message.timestamp} user={message.user} />
                ))}
                </FlipMove>
               
            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize='large' />
                <form>
                    <input type="text" disabled={!channelId} value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
                    <button className='chat__inputButton' onClick={sendMessage} disabled={!channelId} type='submit'>Send Message</button>
                </form>

                <div className="chat__inputIcon">
                    <CradGiftcardIcon fontSize='large' />
                    <GifIcon fontSize='large' />
                    <EmojiEmoticonsIcon fontSize='large' />
                </div>
            </div>
        </div>
    )
}

export default Chat
