import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from './firebase'
import PostList from './Data/AlphaTable'

export const Home = () => {
    const { user } = useAuthState()

    return (
        <>
            <h1>Welcome {user?.email}</h1>
            <button onClick={() => signOut(getAuth())}>Sign Out</button>
            <PostList/>
        </>
    )
}