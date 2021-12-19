import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
function HomePage() {
  const [data, setData] = useState([])
  const [value, setValue] = useState('')

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    axios.get("https://adib.com/users").then(res => {
      console.log(res)
      setData(res.data.results)
    })
  }

  const addUser = () => {
    const body = {
        id: Math.floor(Math.random() * 100) + 1,
        name: value,
        age: Math.floor(Math.random() * 30) + 1,
        address: "pluto"
    }
    axios.post("https://adib.com/users", {data: body}).then(res => {
        if (res.data.ok) {
            getUsers()
        }
    })
  }

  return (
    <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={addUser} >Add</button>
        {
            data.map(item => {
                return(
                    <Link to={`/${item.id}`}>
                        <li key={item.name}>{item.name}</li>
                    </Link>
                )
            })
        }
    </div>
  );
}

export default HomePage;
