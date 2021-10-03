import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 export default function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const checkDate = Date.parse(date)

  let season
  let seasonObj = {
    0: 'winter',
    1: 'spring',
    2: 'summer',
    3: 'fall',
    4: 'winter'
  }

  if (!date) {
    return 'Unable to determine the time of year!'
  }

  if (isNaN(checkDate) || Object.keys(date).length > 0) {
    throw new Error('Invalid date!')
  }

  season = seasonObj[Math.round(date.getMonth() / 3)]
    
  return season
}
