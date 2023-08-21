import React from 'react'
import { useState } from 'react';

export default function SamplingTM() {
    const TotalSample = 100000;
    const [PercentageOfSamples, setPercentageOfSamples] = useState('0');
    const [NumberOfSamples, setNumberOfSamples] = useState('0');
    const [Threshold, setThreshold] = useState('0');
    const [SamplingType, setSamplingType] = useState('Stratified');
    const [CaseType, setCaseType] = useState('-');
    const [ScenarioType, setScenarioType] = useState('-');
    const [DateA, setDateA] = useState('-');
    const [DateB, setDateB] = useState('-');

    const NumberToPercentage = (x) => {
        if (NumberOfSamples > TotalSample) {
            alert('Please enter a value between 0 - ' + TotalSample);
            setNumberOfSamples(0);
            setPercentageOfSamples(0);
        }
        else {
            setNumberOfSamples(x);
            setPercentageOfSamples((x / TotalSample) * 100);
        }
    }
    const PercentageToNumber = (y) => {
        if (y < 0 || y > 100) {
            alert("Percentage must be between 0-100");
            setPercentageOfSamples(0);
            setNumberOfSamples(0);
        }
        else {
            setPercentageOfSamples(y);
            setNumberOfSamples((y / 100) * TotalSample);
        }
    }

    return (
        <>
            <h1>Sampling TM</h1>
            <div style={{margin:"0px"}}>
                <form>
                    <div className='Sample'>
                        <label>Percentage of Samples 
                            <input
                                required
                                className='button PercentageOfSamples'
                                type='number'
                                value={PercentageOfSamples}
                                onChange={e => PercentageToNumber(e.target.value)}
                                list="button pos1"
                                name="button pos1"
                            />
                        </label>
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
                    </div>

                    <div className='Sample'>
                        <label>Number of Samples
                            <input
                                required
                                className='button NumberOfSamples'
                                type='number'
                                value={NumberOfSamples}
                                onChange={e => NumberToPercentage(e.target.value)}
                            />
                        </label>
                    </div>

                    <label>Threshold
                        <input
                            required
                            className='button Threshold'
                            onChange={e => setThreshold(e.target.value)}
                            list="button pos1"
                            name="button pos1"
                        />
                    </label>
                    <datalist id="button pos1">
                        <option value="10" />
                        <option value="20" />
                        <option value="30" />
                        <option value="40" />
                        <option value="50" />
                        <option value="60" />
                    </datalist>

                    <label>Sampling Type
                        <input
                            required
                            className='button SamplingType'
                            onChange={e => setSamplingType(e.target.value)}
                            list="button pos1"
                            name="button pos1"
                        />
                    </label>
                    <datalist id="button pos1">
                        <option value="10" />
                        <option value="20" />
                        <option value="30" />
                        <option value="40" />
                        <option value="50" />
                        <option value="60" />
                    </datalist>

                    <label>Case Type
                        <input
                            required
                            className='button CaseType'
                            onChange={e => setCaseType(e.target.value)}
                            list="button pos1"
                            name="button pos1"
                        />
                    </label>
                    <datalist id="button pos1">
                        <option value="10" />
                        <option value="20" />
                        <option value="30" />
                        <option value="40" />
                        <option value="50" />
                        <option value="60" />
                    </datalist>

                    <label>Scenario Type
                        <input
                            required
                            className='button ScenarioType'
                            onChange={e => setScenarioType(e.target.value)}
                            list="button pos1"
                            name="button pos1"
                        />
                    </label>
                    <datalist id="button pos1">
                        <option value="10" />
                        <option value="20" />
                        <option value="30" />
                        <option value="40" />
                        <option value="50" />
                        <option value="60" />
                    </datalist>

                    <label>Date
                        <input
                            required
                            className='button DateA'
                            onChange={e => setDateA(e.target.value)}
                            list="button pos1"
                            name="button pos1"
                        />
                    </label>
                    <datalist id="button pos1">
                        <option value="10" />
                        <option value="20" />
                        <option value="30" />
                        <option value="40" />
                        <option value="50" />
                        <option value="60" />
                    </datalist>

                    <label>
                        <input
                            required
                            className='button DateB'
                            onChange={e => setDateB(e.target.value)}
                            list="button pos1"
                            name="button pos1"
                        />
                    </label>
                    <datalist id="button pos1">
                        <option value="10" />
                        <option value="20" />
                        <option value="30" />
                        <option value="40" />
                        <option value="50" />
                        <option value="60" />
                    </datalist>
                </form>
            </div>
        </>
    )
}
