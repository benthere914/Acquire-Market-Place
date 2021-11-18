import './index.css'
import UserTag from '../userTag'
import { useParams, useHistory } from 'react-router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersItems } from '../../store/items'
import ItemCards from '../itemCard'
const ProfilePage = () => {
    const history = useHistory()
    const params = useParams()
    const dispatch = useDispatch()
    const [profileUserId, setProfileUserId] = useState(0)
    const [profileUser, setProfileUser] = useState({})
    const [isLoaded, setisLoaded] = useState(false)
    const items = useSelector(state => Object.values(state.items))
    const userId = useSelector(state => state.session.user.id)
    useEffect(() => {setProfileUserId(params?.userId)}, [params])
    useEffect( async () => {
        const response = await fetch(`/api/users/${profileUserId}`)
        const profileUser = await response.json()
        setProfileUser(profileUser)
    }, [profileUserId])
    useEffect(() => {dispatch(getUsersItems(profileUserId))}, [profileUser])
    useEffect(() => {if (items && profileUser){setisLoaded(true)};console.log(items, profileUser)}, [items, profileUser])
    return (
    <>
        {isLoaded?
            <>
            <div className='userProfile'>
                <div>
                    <UserTag user={profileUser}/>
                    {userId === +profileUserId?(<p onClick={() => {history.push(`/users/${userId}/edit`)}} className='editAccountButton'>Edit your account</p>):null}
                    {userId !== +profileUserId?(<p className='editAccountButton'>{`Message`}</p>):null}
                </div>
                <p className='ItemsIntroduction'>{`Items ${profileUser?.username} has for sale`}</p>
                <ItemCards items={items}/>
            </div>
            </>
        :null}
    </>
    )
}

export default ProfilePage