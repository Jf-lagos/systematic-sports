import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from './firebase'
import Navbar from './Navbar'
import PostList from './PostList'



export const Home = ( ) => {
    const { user } = useAuthState()
    

    return (
        <>
            <Navbar/>
            <PostList/>
            <h1>Welcome {user?.email}</h1>
            <button onClick={() => signOut(getAuth())}>Sign Out</button>
        </>
    )
}