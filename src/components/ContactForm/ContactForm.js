import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
} from '@mui/material';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { createMyToast } from '../../functions';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

export default function ContactForm({ onClose }) {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  const onSubmit = contact => dispatch(contactsOperations.addContact(contact));

  const handleSubmit = values => {
    const names = contacts.map(contact => contact.name);
    if (names.includes(values.name)) {
      createMyToast(`${values.name} is already in contacts!`);
      return;
    } else {
      onSubmit(values);
      onClose();
    }
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string('Enter your name')
      .min(3, `Name should be of minimum 3 characters`)
      .max(21, 'Name should be of maximum 21 characters')
      .required('Name is required'),
    number: yup
      .string('Enter your password')
      .min(10, 'Number should be of minimum 10 characters')
      .max(10, 'Number should be of minimum 10 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      handleSubmit(values);
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <ContactPageIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 3 }}
          onSubmit={formik.handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="number"
                label="Number 099 99 99 999"
                name="number"
                autoComplete="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                error={formik.touched.number && Boolean(formik.errors.number)}
                helperText={formik.touched.number && formik.errors.number}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
