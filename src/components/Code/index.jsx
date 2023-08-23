import { Box, Typography } from '@mui/material'
import React from 'react'

function Code({ code }) {
  return (
    <Box
      component='div'
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '60px',
        border: '1px solid #000',
        borderRadius: '12px',
        backgroundColor: '#ccc',
        padding: '8px',
      }}
    >
      <Typography variant='h4' sx={{ color: '#000' }}>
        {code.reading_epc_hex}
      </Typography>
    </Box>
  )
}

export default Code
