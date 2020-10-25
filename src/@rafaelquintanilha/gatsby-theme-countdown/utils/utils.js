import moment from 'moment';

export const remainingTime = (targetDate, currentDate) => {
  const remainingDays = moment(targetDate)
    .diff(currentDate, 'days');
  const remainingHours = moment(targetDate)
    .subtract(remainingDays, 'days')
    .diff(currentDate, 'hours');
  const remainingMinutes = moment(targetDate)
    .subtract(remainingDays, 'days')
    .subtract(remainingHours, 'hours')
    .diff(currentDate, 'minutes');
  const remainingSeconds = moment(targetDate)
    .subtract(remainingDays, 'days')
    .subtract(remainingHours, 'hours')
    .subtract(remainingMinutes, 'minutes')
    .diff(currentDate, 'seconds')
  return { remainingDays, remainingHours, remainingMinutes, remainingSeconds };
}

export const addPadding = value => value < 10 ? "0" + value : value;