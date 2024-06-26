import { Box } from '@mui/material'
import GeoChart from '../../components/GeoChart'
import Header from '../../components/Header'
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';

const Geo = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="Geo Chart" subtitle="Simple Geo Chart" />
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
                <GeoChart />
            </Box>
        </Box>
    )
}

export default Geo