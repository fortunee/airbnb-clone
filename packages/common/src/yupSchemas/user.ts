import * as yup from 'yup';

// Validation Schema Definition
export const fieldRequired = 'This field is required';
export const invalidEmail = 'Email must be a valid email';
export const emailNotLongEnough = 'Email must be at least 3 characters';
export const passwordNotLongEnough = 'Password must be at least 3 characters';
export const passwordNotMatch = 'Password does not match';

export const registerPasswordValidation = yup
  .string()
  .min(3, passwordNotLongEnough)
  .max(255)
  .required(fieldRequired);

export const userValidationSchema = yup.object().shape({
    email: yup
        .string()
        .min(3, emailNotLongEnough)
        .max(255)
        .email(invalidEmail)
        .required(fieldRequired),
    password: registerPasswordValidation
});

export const confirmPassword =  yup
    .string()
    .oneOf([yup.ref('password'), null], passwordNotMatch)
    .required(fieldRequired);

const invalidLogin = 'invalid login';

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .min(3, invalidLogin)
        .max(255, invalidEmail)
        .email(invalidLogin)
        .required(fieldRequired),
    password: yup
        .string()
        .min(3, invalidLogin)
        .max(255, invalidLogin)
        .required(fieldRequired)
})