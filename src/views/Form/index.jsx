import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
};

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    contact: Yup.string().matches(phoneRegExp, "Phone number is not valid." ).required("Contact is required"),
    address1: Yup.string().required("Address 1 is required"),
    address2: Yup.string().required("Address 2 is required"),
});

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleSubmit = (values) => {
        console.log(values);
    };
    return (
        <Box m="20px">
            <Header title="CREATE USER"  subtitle="Create a new user profile" />
            <Formik 
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                        display="grid" 
                        gap="30px" 
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))" //Dictates the number of columns and their size in fractions
                        sx={{
                            "& > div" : {gridColumn: isNonMobile ? undefined : "span 4"},
                        }}
                        >
                            <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="First Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.firstName}
                            name="firstName"
                            error={!!touched.firstName && !!errors.firstName}
                            helperText={touched.firstName && errors.firstName}
                            sx={{ gridColumn: "span 2"}}
                            />
                            <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Last Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.lastName}
                            name="lastName"
                            error={!!touched.lastName && !!errors.lastName}
                            helperText={touched.lastName && errors.lastName}
                            sx={{ gridColumn: "span 2"}}
                            />
                            <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error={!!touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                            sx={{ gridColumn: "span 4"}}
                            />
                            <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Contact Number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.contact}
                            name="contact"
                            error={!!touched.contact && !!errors.contact}
                            helperText={touched.contact && errors.contact}
                            sx={{ gridColumn: "span 4"}}
                            />
                            <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address 1"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address1}
                            name="address1"
                            error={!!touched.address1 && !!errors.address1}
                            helperText={touched.address1 && errors.address1}
                            sx={{ gridColumn: "span 4"}}
                            />
                            <TextField 
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address 2"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address2}
                            name="address2"
                            error={!!touched.address2 && !!errors.address2}
                            helperText={touched.address2 && errors.address2}
                            sx={{ gridColumn: "span 4"}}
                            />
                        </Box>
                        <Box display={"flex"} justifyContent={"end"} mt={"20px"}>
                            <Button type="submit" color="secondary" variant="contained">
                                Create New User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
};

export default Form;
