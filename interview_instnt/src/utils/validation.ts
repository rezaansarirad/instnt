export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const checkPasswordStrength = (password: string): { score: number; message: string } => {
  let score = 0;
  if (!password) return { score: 0, message: "Password is required" };

  if (password.length > 7) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  let message = "";
  if (score < 3) message = "Weak password";
  else if (score < 5) message = "Medium password";
  else message = "Strong password";

  return { score, message };
};

