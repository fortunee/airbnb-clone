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
    password: registerPasswordValidation,
    confirmPassword: yup
        .string()
        .matches(/`${yup.ref('password')}`/, passwordNotMatch)
        .required(fieldRequired),
});