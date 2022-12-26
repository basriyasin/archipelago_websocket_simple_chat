import React , { useEffect }from 'react'
import uuid from 'react-uuid';
import io from 'socket.io-client'

import { MyMessage, PeopleMessage } from '../chat_message'
import './assets/index.css'

const SESSOIN_NAME = 'uid'
var myID = sessionStorage.getItem(SESSOIN_NAME);
if (!myID) {
    myID = uuid()
    sessionStorage.setItem(SESSOIN_NAME, myID);
}
const socket = io('ws://localhost:8080')


export default function ChatBox() {
    const [messages, setMessages] = React.useState([])
    const [newMessage, setNewMessage] = React.useState('')

    const renderMessage = () => {
        return messages.map(v => {
            if (v.user === myID) {
               return <MyMessage key={uuid()} {...v}/>
            } else {
                return <PeopleMessage key={uuid()} {...v}/>
            }
        })
    }

    socket.on('message', (message) => setMessages([message, ...messages]))

    const handleInputChange = (e) => {
        setNewMessage(e.target.value)
    }
    
    const sendMessage = (e) => {
        e.preventDefault()
        if (newMessage.length < 1) return

        const now = new Date()
        const message = {
            user: myID,
            message: newMessage,
            time: now.getHours() +':' + now.getMinutes()
        }
        socket.emit('message', message)
        setNewMessage('')
    }

    useEffect(() => {},[messages])
    return (
        <div className='chatbox' mode='bottom'>
            <div className='chatbox-header'>
                # General
            </div>
            <div className='chatbox-body'>
                {renderMessage(messages)}
            </div>
            <div className='chatbox-input'>
                <form onSubmit={sendMessage}>
                    <input autoFocus value={newMessage} onChange={handleInputChange}/>
                    <button type='submit'>&gt;</button>
                </form>
            </div>
        </div>
    )
}