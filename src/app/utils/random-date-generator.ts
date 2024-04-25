export function generateRandomDateFromToday(): Date {

  // Get current date
  const currentDate = new Date();

  // Generate a random number of days (between 1 and 365) to add to the current date
  const randomNumberOfDays = Math.floor(Math.random() * 365) + 1;

  // Calculate future date by adding random number of days to current date
  const futureDate = new Date(currentDate.getTime() + randomNumberOfDays * 24 * 60 * 60 * 1000);

  // Return the future date
  return futureDate;
}