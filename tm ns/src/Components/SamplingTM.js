import React from "react";
import { useState } from "react";

export default function SamplingTM() {
  const TotalSample = 100000;
  const [PercentageOfSamples, setPercentageOfSamples] = useState("0");
  const [NumberOfSamples, setNumberOfSamples] = useState("0");
  const [Threshold, setThreshold] = useState("0");
  const [SamplingType, setSamplingType] = useState("Stratified");
  const [CaseType, setCaseType] = useState("-");
  const [ScenarioType, setScenarioType] = useState("-");
  const [DateA, setDateA] = useState("-");
  const [DateB, setDateB] = useState("-");

  const NumberToPercentage = (x) => {
    if (NumberOfSamples > TotalSample || NumberOfSamples < 0) {
      alert("Please enter a value between 0 - " + TotalSample);
      setNumberOfSamples(0);
      setPercentageOfSamples(0);
    } else {
      setNumberOfSamples(x);
      setPercentageOfSamples((x / TotalSample) * 100);
    }
  };
  const PercentageToNumber = (y) => {
    if (y < 0 || y > 100) {
      alert("Percentage must be between 0-100");
      setPercentageOfSamples(0);
      setNumberOfSamples(0);
    } else {
      setPercentageOfSamples(y);
      setNumberOfSamples((y / 100) * TotalSample);
    }
  };

  return (
    <>
      <div className="pg">
        <div className="page">
          <h1>Sampling - TM</h1>

          <div>
            <form>
              <table>
                <tr>
                  <th class="b r1c1">Percentage of Samples</th>
                  <th class="b r1c2">Number of Samples</th>
                  <th class="b r1c3">Threshold</th>
                </tr>
                <tr>
                  <td class="b r2c1">
                    {" "}
                    <input
                      required
                      className="button PercentageOfSamples"
                      type="number"
                      value={PercentageOfSamples}
                      onChange={(e) => PercentageToNumber(e.target.value)}
                      list="button pos1"
                      name="button pos1"
                    />
                    <datalist id="button pos1">
                      <option value="10" />
                      <option value="20" />
                      <option value="30" />
                      <option value="40" />
                      <option value="50" />
                      <option value="60" />
                      <option value="70" />
                      <option value="80" />
                      <option value="90" />
                      <option value="100" />
                    </datalist>
                  </td>
                  <td class="b r2c2">
                    {" "}
                    <input
                      required
                      className="button NumberOfSamples"
                      type="number"
                      value={NumberOfSamples}
                      onChange={(e) => NumberToPercentage(e.target.value)}
                    />
                  </td>

                  <td class="b r2c3">
                    {" "}
                    <input
                      required
                      className="button PercentageOfSamples"
                      type="number"
                      value={PercentageOfSamples}
                      onChange={(e) => PercentageToNumber(e.target.value)}
                      list="button pos1"
                      name="button pos1"
                    />
                    <datalist id="button pos1">
                      <option value="10" />
                      <option value="20" />
                      <option value="30" />
                      <option value="40" />
                      <option value="50" />
                      <option value="60" />
                      <option value="70" />
                      <option value="80" />
                      <option value="90" />
                      <option value="100" />
                    </datalist>
                  </td>
                </tr>
                <tr>
                  <th class="b r3c1">Sampling Type</th>
                </tr>
                <tr>
                  <td class="b r4c1">
                    <input
                      required
                      className="button SamplingType"
                      onChange={(e) => setSamplingType(e.target.value)}
                      list="button pos1"
                      name="button pos1"
                    />

                    <datalist id="button pos1">
                      <option value="10" />
                      <option value="20" />
                      <option value="30" />
                      <option value="40" />
                      <option value="50" />
                      <option value="60" />
                    </datalist>
                  </td>
                </tr>

                <tr>
                  <th class="b r5c1">Case Type</th>
                  <th class="b r5c2">Scenario Type</th>
                </tr>
                <tr>
                  <td class="b r6c1">
                    <input
                      required
                      className="button SamplingType"
                      onChange={(e) => setSamplingType(e.target.value)}
                      list="button pos1"
                      name="button pos1"
                    />

                    <datalist id="button pos1">
                      <option value="10" />
                      <option value="20" />
                      <option value="30" />
                      <option value="40" />
                      <option value="50" />
                      <option value="60" />
                    </datalist>
                  </td>
                  <td class="b r6c2">
                    <input
                      required
                      className="button SamplingType"
                      onChange={(e) => setSamplingType(e.target.value)}
                      list="button pos1"
                      name="button pos1"
                    />

                    <datalist id="button pos1">
                      <option value="10" />
                      <option value="20" />
                      <option value="30" />
                      <option value="40" />
                      <option value="50" />
                      <option value="60" />
                    </datalist>
                  </td>
                </tr>

                <tr>
                  <th class="b r7c1">Date-Range</th>
                </tr>

                <tr>
                  <td class="b r8c1">
                    <input
                      required
                      type="date"
                      className="button SamplingType"
                      onChange={(e) => setSamplingType(e.target.value)}
                      list="button pos1"
                      name="button pos1"
                      style={{marginRight:"10px"}}
                    />
                      <span><strong>-</strong></span>
                    <datalist id="button pos1">
                      <option value="10" />
                      <option value="20" />
                      <option value="30" />
                      <option value="40" />
                      <option value="50" />
                      <option value="60" />
                    </datalist>
                    <input
                      required
                      style={{marginLeft:"10px"}}
                      type="date"
                      className="button SamplingType"
                      onChange={(e) => setSamplingType(e.target.value)}
                      list="button pos1"
                      name="button pos1"
                      
                    />
                          
                    <datalist id="button pos1">
                      <option value="10" />
                      <option value="20" />
                      <option value="30" />
                      <option value="40" />
                      <option value="50" />
                      <option value="60" />
                    </datalist>
                  </td>
                
                  <td class="b r8c2">
                    
                  </td>
                </tr>
              </table>
              <input type="submit" id="btn"></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
