import React from 'react'
import { goal_probability_heatmap } from '../GameData.js'
import '../GoalProbability.css'


  export const GoalProbability = () => {
    return (
      <>
        <div className="table_goal">
        <div className="header_goal">
          <div className="teamName_goal_header">
            <p>Team Name</p>
          </div>
          <div className="zero_goal_header">
            <p>Zero</p>
          </div>
          <div className="one_goal_header">
            <p>one</p>
          </div>
          <div className="two_goal_header">
            <p>Two</p>
          </div>
          <div className="three_goal_header">
            <p>Three</p>
          </div>
          <div className="four_goal_header">
            <p>Four</p>
          </div>
          <div className="five_goal_header">
            <p>Five</p>
          </div>
          <div className="TeamId_goal_header">
            <p>Team Id</p>
          </div>
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
                />
              </div>
            );
          })}
        </div>
      </div>
      </>
    );
  };

const LivMan = ({TeamId, TeamName, Zero, One, Two, Three, Four, Five }) => {
    return (
        <table>
        <tbody>
          <tr>
            <td className="tableCell_goal">{TeamName}</td>
            <td className="tableCell_goal">{Zero}</td>
            <td className="tableCell_goal">{One}</td>
            <td className="tableCell_goal">{Two}</td>
            <td className="tableCell_goal">{Three}</td>
            <td className="tableCell_goal">{Four}</td>
            <td className="tableCell_goal">{Five}</td>
            <td className="tableCell_teamId_goal">{TeamId}</td>
          </tr>
        </tbody>      
      </table>
    
    );
  };
export default GoalProbability