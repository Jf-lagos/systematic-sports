import React from 'react'
import {alpha_table_json} from '../GameData.js'
import '../AlphaTable.css'


  export const AlphaTable = () => {
    return (
      <>
        <div className="table">
        <div className="header">
          <p>EntityName</p>
          <p>Market</p>
          <p>CalcProb</p>
          <p>BookieOdds</p>
          <p>Alpha</p>
          <p>KellyCriterion</p>
          <p>FixtureId</p>
          <p>TeamId</p>
        </div>
        <div className="body">
        {alpha_table_json.map((data, key) => {
            return (
              <div key={key}>
                <LivMan
                  key={key}
                  EntityName={data.EntityName}
                  Market={data.Market}
                  CalcProb={data.CalcProb}
                  BookieOdds={data.BookieOdds}
                  Alpha={data.Alpha}
                  KellyCriterion={data.KellyCriterion}
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

const LivMan = ({EntityName, Market, CalcProb, BookieOdds, Alpha, KellyCriterion, FixtureId, TeamId }) => {
    return (
        <table>
        <tbody>
          <tr>
            <td className="entityName">{EntityName}</td>
            <td className="tableCell">{Market}</td>
            <td className="tableCell">{CalcProb}</td>
            <td className="tableCell">{BookieOdds}</td>
            <td className="tableCell">{Alpha}</td>
            <td className="tableCell">{KellyCriterion}</td>
            <td className="tableCell">{FixtureId}</td>
            <td className="tableCell">{TeamId}</td>
          </tr>
        </tbody>      
      </table>
    
    );
  };
export default AlphaTable