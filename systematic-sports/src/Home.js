import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from './firebase'
import Navbar from './Navbar'
import { AlphaTable  } from '../src/Data/AlphaTable'



export const Home = ( ) => {
    const { user } = useAuthState()
    

    return (
        <>
            <Navbar/>
            <div className="alphaTable">
            <AlphaTable />
            </div>
            <h1>Welcome {user?.email}</h1>
            <button onClick={() => signOut(getAuth())}>Sign Out</button>
        </>
    )
}