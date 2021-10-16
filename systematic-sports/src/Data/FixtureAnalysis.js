import React from 'react'
import {fixture_analysis_table_json} from '../GameData.js'
import '../FixtureAnalysis.css'


  export const FixtureAnalysis = () => {
    return (
      <>
      <button>Fixture filter</button>
        <div className="table_fixtureA ">
        <div className="header_fixtureA">
          <div className="teamName_header">
            <p>Team Name</p>
          </div>
          <div className="form_header">
            <p>Form</p>
          </div>
          <div className="position_header">
            <p>Position</p>
          </div>
          <div className="averageXg_header">
            <p>Average xG</p>
          </div>
          <div className="oppositionXgc_header">
            <p>Opposition xGC</p>
          </div>
          <div className="fixetureIdA_header">
            <p>FixtureId</p>
          </div>
          <div className="teamIdA_header">
            <p>Team ID</p>
          </div>
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
            <td className="tableCell_fixtureA_teamName">{TeamName}</td>
            <td className="tableCell_fixtureA">{Form}</td>
            <td className="tableCell_fixtureA">{Position}</td>
            <td className="tableCell_fixtureA">{AveragexG}</td>
            <td className="tableCell_fixtureA">{OppositionxGC}</td>
            <td className="tableCell_fixtureA">{FixtureId}</td>
            <td className="tableCell_fixtureA">{TeamId}</td>
          </tr>
        </tbody>      
      </table>
    
    );
  };
export default FixtureAnalysis