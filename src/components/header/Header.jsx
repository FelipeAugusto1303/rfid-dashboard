import { Box, Typography } from "@mui/material";
import { format } from "date-fns";

export const Header = () => {
    const time = new Date();
    return(
        <Box component='div' sx={{display: "flex",width: "100%", flexDirection: "column", padding: '12px', background: "#0d525e"}}>
            <Typography variant='h3'sx={{color:"#fff", fontWeight:"bold"}}> RFID Dashboard</Typography>
            <Typography variant='h6' sx={{color:"#fff"}}> última atualização: {format(time, "dd/MM/yyyy - HH:mm:ss")}</Typography>
        </Box>
    )
}