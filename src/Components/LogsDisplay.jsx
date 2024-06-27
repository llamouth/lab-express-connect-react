import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LogsDisplay = () => {

    const [logs, setLogs] = useState([])

    useEffect(() => {
        fetch("http://localhost:3333/logs")
        .then(res => res.json())
        .then(data => setLogs(data))
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <ul>
                {logs.map((log, i) => {
                    return (
                        <li key={i}>
                            <Link to={`/logs/${i}`}>{log.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default LogsDisplay;