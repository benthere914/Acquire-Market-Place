import './index.css'
import EditMessagePopup from '../editMessagePopup';
import { useHistory } from 'react-router';
const Message = ({setMessageText, setButtonText, boardId, editMessageModal, setEditMessageModal, selectedMessage,setSelectedMessage, userId, message, imgErrorHandler}) => {
    const history = useHistory()
    return (
    <>

    {message?.authorId === userId?
        <>
                <div className='message myUser' key={message?.id} onContextMenu={(e) => {setSelectedMessage(message?.id);e.preventDefault(); setEditMessageModal(true)}}>
                    <p>{message?.message}</p>
                    <img
                        src={message?.author?.icon}
                        alt={message?.author?.username}
                        onError={(e) => {imgErrorHandler(e)}}
                    />
                {editMessageModal && selectedMessage === message?.id?<EditMessagePopup setMessageText={setMessageText} messageText={message?.message} userId={userId} setButtonText={setButtonText} boardId={boardId} editMessageModal={editMessageModal} setEditMessageModal={setEditMessageModal} id={message?.id}/>:null}
                </div>
        </>
        :
        <div className='message otherUser' key={message?.id} onClick={() => {history.push(`/users/${message?.author?.id}`)}}>
            <img
                src={message?.author?.icon}
                alt={message?.author?.username}
                onError={(e) => {imgErrorHandler(e)}}
                />
                <p>{message?.message}</p>
            </div>}
    </>
    )
}

export default Message
