import {React, useState} from 'react'
import { alpha_table_json } from '../GameData.js'
import '../AlphaTable.css'
import Stack from '../Stack.js'


export const AlphaTable = () => {
  return (
    <>
         <button className="alphaButton">League filter</button>
        <button className="alphaButton">Date filter</button>
      <div className="table_alpha">

        <div className="header_alpha">
          <div className="entityName_header">
            <p>EntityName</p>
          </div>
          <div className="market_header">
            <p>Market</p>
          </div>
          <div className="calcProb_header">
            <p>CalcProb</p>
          </div>
          <div className="bookieOdds_header">
            <p>BookieOdds</p>
          </div>
          <div className="alpha_header">
            <p>Alpha</p>
          </div>
          <div className="kellyCriterion_header">
            <p>KellyCriterion</p>
          </div>
          <div className="fixetureId_header">
            <p>FixtureId</p>
          </div>
          <div className="teamID_header">
            <p>TeamId</p>
          </div>
{/*           <div className="stack_header">
            <p>Stack</p>
          </div> */}


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
                <Stack/>
              </div>
            );
          })}
        </div>
      </div>
{/*       <div className="button_clear_submit">
      <button className="alphaButton">clear bet</button>
        <button className="alphaButton" >Submit bet</button>
        </div> */}
    </>
  );
};

const LivMan = ({ EntityName, Market, CalcProb, BookieOdds, Alpha, KellyCriterion, FixtureId, TeamId }) => {
  const [searchString, setSearchString] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    // clearing the values
    setSearchString("");
  }
  return (
    <table>
      <tbody>
        <tr>
          <td className="tableCell_alpha_entity_name">{EntityName}</td>
          <td className="tableCell_alpha">{Market}</td>
          <td className="tableCell_alpha">{CalcProb}</td>
          <td className="tableCell_alpha">{BookieOdds}</td>
          <td className="tableCell_alpha">{Alpha}</td>
          <td className="tableCell_alpha">{KellyCriterion}</td>
          <td className="tableCell_alpha">{FixtureId}</td>
          <td className="tableCell_alpha">{TeamId}</td>
{/*           <td className="tableCell_alpha_editable"><input
        id="myInput"  
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      /></td> */}
        </tr>
      </tbody>
    </table>
  );
};



export default AlphaTable