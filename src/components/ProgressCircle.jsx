import { Box, useTheme } from '@mui/material';
import { tokens } from '../theme';

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = progress * 360;
//Below I'm creating a very simple circular progress bar using CSS gradients. This is not a dynamic component, but it can be easily modified to accept a progress prop and display the progress accordingly.
    return (
        <Box 
        sx = {{
            background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
                conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
                ${colors.greenAccent[500]}`,
            borderRadius: "50%",
            width: `${size}px`,
            height: `${size}px`,
        }}
        />
    )
};

export default ProgressCircle;