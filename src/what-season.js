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
  let seasonObj = {
    0: 'winter',
    1: 'spring',
    2: 'summer',
    3: 'fall',
    4: 'winter'
  }

  let season

  if ((Object.entries(date).length || Object.getOwnPropertyNames(date).length > 0 || date instanceof Date === false)) {
    throw new Error('Invalid date!')

  } else {
    season = seasonObj[Math.round(date.getMonth() / 3)]
    
  }

  return season
}
