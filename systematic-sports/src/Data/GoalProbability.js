import React from 'react'
import { goal_probability_heatmap } from '../GameData.js'
import '../AlphaTable.css'


  export const GoalProbability = () => {
    return (
      <>
        <div className="table">
        <div className="header">
          <p>TeamId</p>
          <p>TeamName</p>
          <p className="zero">Zero</p>
          <p>One</p>
          <p className="two">Two</p>
          <p className="three">Three</p>
          <p className="four">Four</p>
          <p className="five">Five</p>
          <p className="six">Six</p>
        </div>
        <div className="body">
        {goal_probability_heatmap.map((data, key) => {
            return (
              <div key={key}>
                <LivMan
                  key={key}
                  TeamId={data.TeamId}
                  TeamName={data.TeamName}
                  Zero={data.Zero}
                  One={data.One}
                  Two={data.Two}
                  Three={data.Three}
                  Four={data.Four}
                  Five={data.Five}
                  Six={data.Six}
                />
              </div>
            );
          })}
        </div>
      </div>
      </>
    );
  };

const LivMan = ({TeamId, TeamName, Zero, One, Two, Three, Four, Five, Six }) => {
    return (
        <table>
        <tbody>
          <tr>
            <td className="entityName">{TeamId}</td>
            <td className="tableCell">{TeamName}</td>
            <td className="tableCell">{Zero}</td>
            <td className="tableCell">{One}</td>
            <td className="tableCell">{Two}</td>
            <td className="tableCell">{Three}</td>
            <td className="tableCell">{Four}</td>
            <td className="tableCell">{Five}</td>
            <td className="tableCell">{Six}</td>
          </tr>
        </tbody>      
      </table>
    
    );
  };
export default GoalProbability