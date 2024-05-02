import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions" />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A very important answer.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Another Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Another very important answer.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        A Big Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A very important answer.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        A Random Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A very important answer.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        A Question about animals
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A very important answer.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        A Question about the universe
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A very important answer.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        A Question about God
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A very important answer.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;
