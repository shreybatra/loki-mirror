const DateConverter = (createdOn: number) => {
  const newDate = new Date(0);
  newDate.setUTCSeconds(createdOn);
  const finalDate = newDate.toString().split(" ");
  const dateString = finalDate[1] + ", " + finalDate[2];
  return dateString;
};
export default DateConverter;
