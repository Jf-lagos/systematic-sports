import React from 'react'
import {fixture_analysis_table_json} from '../GameData.js'
import '../AlphaTable.css'


  export const FixtureAnalysis = () => {
    return (
      <>
        <div className="table">
        <div className="header">
          <p>Team Name</p>
          <p>Form</p>
          <p>Position</p>
          <p>Average xG</p>
          <p>Opposition xGC</p>
          <p>FixtureId</p>
          <p>TeamId</p>
        </div>
        <div className="body">
        {fixture_analysis_table_json.map((data, key) => {
            return (
              <div key={key}>
                <Analysis
                  key={key}
                  TeamName={data.TeamName}
                  Position={data.Position}
                  Form={data.Form}
                  AveragexG={data.AveragexG}
                  OppositionxGC={data.OppositionxGC}
                  FixtureId={data.FixtureId}
                  TeamId={data.TeamId}
                />
              </div>
            );
          })}
        </div>
      </div>
      </>
    );
  };

const Analysis = ({TeamName, Position, Form, AveragexG, OppositionxGC, FixtureId, TeamId }) => {
    return (
        <table>
        <tbody>
          <tr>
            <td className="entityName">{TeamName}</td>
            <td className="tableCell">{Form}</td>
            <td className="tableCell">{Position}</td>
            <td className="tableCell">{AveragexG}</td>
            <td className="tableCell">{OppositionxGC}</td>
            <td className="tableCell">{FixtureId}</td>
            <td className="tableCell">{TeamId}</td>
          </tr>
        </tbody>      
      </table>
    
    );
  };
export default FixtureAnalysis