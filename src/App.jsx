import { useState, useEffect } from 'react'
import { getRfid } from './services/rfidService'
import api from './services/api'
import './App.css'
import { Header } from './components/header/Header'
import Code from './components/Code'
import { Box } from '@mui/material'

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    const timer = setInterval(() => {
      api
        .get('http://localhost:5001/')
        .then((response) => setData(response.data))
        .catch((err) => console.log(err))
    }, 5000)

    return () => clearInterval(timer)
  }, [])
  return (
    <div>
      <Header />
      <Box
        component='div'
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '10px',
          gap: '8px',
        }}
      >
        {data &&
          data.map((d, index) => {
            return <Code key={index} code={d} />
          })}
      </Box>
    </div>
  )
}

export default App
