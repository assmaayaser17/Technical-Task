import { type ZodError } from 'zod';

export function getFieldErrors<T extends Record<string, unknown>>(
  error: ZodError<T>
): Record<string, string> {
  const errors: Record<string, string> = {};
  error.issues.forEach((err) => {
    const path = err.path.join('.');
    if (path && !errors[path]) {
      errors[path] = err.message;
    }
  });
  return errors;
}
