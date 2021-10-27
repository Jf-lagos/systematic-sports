import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from './firebase'
import Navbar from './Navbar'
import { AlphaTable  } from '../src/Data/AlphaTable'
import FixtureAnalysis from './Data/FixtureAnalysis'
import GoalProbability from './Data/GoalProbability'
import Stack from './Stack'
import './Home.css'
import Table from './Table'




export const Home = ( ) => {
    const { user } = useAuthState()
    

    return (
        <>
            
            <Navbar/>
{/*             <div className="home_container">
            <div className="tables">
            <AlphaTable />
            <Stack/>
            </div>
            <div className="tables">
            <FixtureAnalysis/>
            </div>
            <div className="tables">
            <GoalProbability />
            </div>
            </div> */}
            <div className="ouais">
            <AlphaTable /> 
            <Stack/>
            </div>
            <FixtureAnalysis/>
            <GoalProbability />
            
            
            {/* <h1>Welcome {user?.email}</h1> */}
            <button onClick={() => signOut(getAuth())}>Sign Out</button>
        </>
    )
}