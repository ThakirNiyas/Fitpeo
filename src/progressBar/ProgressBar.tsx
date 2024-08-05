import React, { ReactElement } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircularProgressBarProps {
    value: number; // Percentage value of the progress bar
}

function CircularProgressBar({ value }: CircularProgressBarProps): ReactElement {
    return (
        <div style={{
            width: '82px',
            height: '31px',
            top: '14%',
            position: 'absolute',
            right: '5%'
        }}>
            <CircularProgressbar
                value={value}
                text={`${value}%`}
                styles={buildStyles({
                    textColor: '#fff',
                    pathColor: '#7289da',
                    trailColor: '#333',
                })}
            />
        </div>
    );
};

export default CircularProgressBar;