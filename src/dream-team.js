import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 export default function createDreamTeam(members) {
  let team = '';
  let fixArr = []

  if (Array.isArray(members)) {
    members.forEach(elem => typeof(elem) === 'string' ? fixArr.push(elem.trim().toUpperCase()) : false)

    fixArr.sort().forEach(elem => team += elem.slice(0, 1))
    
    return team
    
  } else {
    return false

  }
}
