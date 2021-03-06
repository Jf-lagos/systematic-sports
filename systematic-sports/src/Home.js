import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from './firebase'
import Navbar from './Navbar'
import { AlphaTable  } from '../src/Data/AlphaTable'
import FixtureAnalysis from './Data/FixtureAnalysis'
import GoalProbability from './Data/GoalProbability'
import './Home.css'





export const Home = ( ) => {
    const { user } = useAuthState()
    

    return (
        <>
            
            <Navbar/>
            <div className="container1">
            <AlphaTable /> 
            </div>
            <FixtureAnalysis/>
            <GoalProbability />
            
            
            {/* <h1>Welcome {user?.email}</h1> */}
            <button onClick={() => signOut(getAuth())}>Sign Out</button>
        </>
    )
}