import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleLog = () => {

    const {index} = useParams()
    const [log, setLog] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3333/logs/${index}`)
        .then(res => res.json())
        .then(data => setLog(data))
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <p>{log.captainName}</p>
            <p>{log.title}</p>
            <p>{log.post}</p>
        </div>
    );
};

export default SingleLog;