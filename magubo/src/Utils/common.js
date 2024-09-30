
export const validateString = (value) => {
  return value.length < 2 || value === null ? "Must have at least 2 characters" : null;
}

export const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email) ? null : "Invalid email address";
};

export const validatePostalCode = (postalCode) => {
  const postalCodePattern = /^\d{4}$/;
  return postalCodePattern.test(postalCode) ? null : "Invalid postal code";
}


