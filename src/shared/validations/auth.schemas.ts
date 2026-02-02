import { z } from 'zod';

const passwordSchema = z
  .string()
  .min(6, 'Password must be at least 6 characters')
  .max(100, 'Password must be less than 100 characters');

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, 'Name must be at least 2 characters')
      .max(100, 'Name must be less than 100 characters'),
    email: z.string().email('Please enter a valid email address'),
    password: passwordSchema,
    confirmPassword: z.string().min(1, 'Confirm password is required'),
    mobile: z
      .string()
      .min(8, 'Phone number must be at least 8 digits')
      .regex(/^\d+$/, 'Phone number must contain only digits'),
    mobile_country_code: z.string().min(1, 'Country code is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const verifySchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  code: z
    .string()
    .length(6, 'Verification code must be 6 digits')
    .regex(/^\d+$/, 'Verification code must contain only digits'),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type VerifyFormData = z.infer<typeof verifySchema>;
