export function generateDateOneYearFurther(originalDate: Date): Date {
  // Create a new date object based on the original date
  const newDate = new Date(originalDate);

  // Get the current year of the original date
  const currentYear = newDate.getFullYear();

  // Calculate the next year
  const nextYear = currentYear + 1;

  // Set the year of the new date to the next year
  newDate.setFullYear(nextYear);

  // Return the new date
  return newDate;
}