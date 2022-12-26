import './assets/index.css'

function PeopleMessage(props) {
    const {message, time} = props
    return (
        <div className='people-message-container'>
            <div className='people-message-avatar'>
                <img alt='' src="https://img.icons8.com/bubbles/50/null/guest-male.png"/>
            </div>
            <div className='people-message-message'>
                {message}
                <div className='people-message-time'>
                    {time}
                </div>
            </div>
        </div>
    )
}

function MyMessage(props) {
    const {message, time} = props
    return (
        <div className='my-message-container'>
            <div className='my-message-message'>
                {message}
                <div className='my-message-time'>
                    {time}
                </div>
            </div>
            <div className='my-message-avatar'>
                <img alt='' src="https://img.icons8.com/bubbles/50/null/gender-neutral-user.png"/>
            </div>
        </div>
    )
}


export {
    PeopleMessage,
    MyMessage
}