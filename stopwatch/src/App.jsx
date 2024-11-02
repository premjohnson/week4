import  { useRef, useState } from 'react';

const App = () => {
    const [time, setTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);
    
    const handleStart = () => {
        setNow(Date.now());
        setTime(Date.now());
        intervalRef.current = setInterval(() => {
            setTime(Date.now());
        }, 10);
    };
    
    const handleStop = () => {
        clearInterval(intervalRef.current);
    };
    
    const handleReset = () => {
        clearInterval(intervalRef.current);
        setTime(null);
        setNow(null);
    };
    
    let timePassed = now ? (time - now) / 1000 : 0;
    
    return (
        <div className="app-container">
            <div className="stopwatch-card">
                <h1 className="title">Stopwatch</h1>
                
                <div className="timer-container">
                    <h2 className="timer-display">{timePassed.toFixed(3)}</h2>
                    <p className="timer-label">seconds</p>
                </div>
                
                <div className="button-container">
                    <button onClick={handleStart} className="btn start-btn">
                        Start
                    </button>
                    <button onClick={handleStop} className="btn stop-btn">
                        Stop
                    </button>
                    <button onClick={handleReset} className="btn reset-btn">
                        Reset
                    </button>
                </div>
            </div>

            <style>{`
                .app-container {
                    min-height: 100vh;
                    background: linear-gradient(to bottom right, #EBF4FF, #F3E8FF);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                }

                .stopwatch-card {
                    background: white;
                    border-radius: 0.75rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    padding: 2rem;
                    max-width: 28rem;
                    width: 100%;
                    text-align: center;
                    transition: transform 0.3s ease;
                }

                .stopwatch-card:hover {
                    transform: scale(1.05);
                }

                .title {
                    font-size: 2rem;
                    font-weight: bold;
                    background: linear-gradient(to right, #2563EB, #9333EA);
                    -webkit-background-clip: text;
                    color: transparent;
                    margin-bottom: 1.5rem;
                }

                .timer-container {
                    margin-bottom: 1.5rem;
                }

                .timer-display {
                    font-size: 2.5rem;
                    font-weight: bold;
                    font-family: monospace;
                    color: #1F2937;
                    animation: pulse 2s infinite;
                }

                .timer-label {
                    color: #6B7280;
                    margin-top: 0.25rem;
                }

                .button-container {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                }

                .btn {
                    padding: 0.5rem 1.5rem;
                    border: none;
                    border-radius: 0.5rem;
                    color: white;
                    font-weight: 500;
                    cursor: pointer;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: all 0.2s ease;
                }

                .btn:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
                }

                .btn:active {
                    transform: translateY(0);
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .start-btn {
                    background-color: #22C55E;
                }

                .stop-btn {
                    background-color: #EAB308;
                }

                .reset-btn {
                    background-color: #EF4444;
                }

                @keyframes pulse {
                    0% { opacity: 1; }
                    50% { opacity: 0.8; }
                    100% { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default App;