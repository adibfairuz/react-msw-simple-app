import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DetailPage() {
    const params = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        axios.get(`https://adib.com/users/${params.id}`).then(res => {
            console.log(res)
            setData(res.data.results)
        })
    }

    return (
        <div>
            <h2>{data.name}</h2>
            <div>{data.age}</div>
            <div>{data.address}</div>
        </div>
    );
}

export default DetailPage;
