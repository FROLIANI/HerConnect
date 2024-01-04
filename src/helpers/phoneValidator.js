/* eslint-disable prettier/prettier */
export function phoneValidator(phone) {
  if (!phone) {
    return "Phone number can't be empty.";
  }

  // Remove non-digit characters from the input
  const cleanedPhone = phone.replace(/\D/g, '');

  // Check if the cleaned phone is a ten-digit number
  if (cleanedPhone.length !== 10 || !/^\d{10}$/.test(cleanedPhone)) {
    return 'Please enter a valid ten-digit number.';
  }

  return '';
}
