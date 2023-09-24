import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import { StyledForm, StyledField, StyledError, Label, Button, ContainerForm } from './PhonebookForm.styled';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').matches(nameRegExp, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required('Name is a required field'),
    number: Yup.string().matches(phoneRegExp, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required('Number is a required field'),
});

export const PhonebookForm = ({ onAdd }) => {
    return (
        <ContainerForm>
            <Formik
                initialValues={{
                    name: '',
                    number: '',
                }}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    onAdd({ ...values, id: nanoid() });
                    actions.resetForm();
                }}
            >
                <StyledForm>
                    <Label>
                        Name
                        <StyledField
                            type="text"
                            name="name"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                        <StyledError name="name" component="div" />
                    </Label>

                    <Label>
                        Number
                        <StyledField
                            type="tel"
                            name="number"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                        <StyledError name="number" component="div" />
                    </Label>
                    <Button type="submit">Submit</Button>
                </StyledForm>
            </Formik>
        </ContainerForm>
    );
}