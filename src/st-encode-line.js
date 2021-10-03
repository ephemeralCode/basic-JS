import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let hashMap = {}
  let arr = []

  if (typeof(str) !== 'string') return ''

  str.split('').map(elem => {
    hashMap[elem] ? hashMap[elem]++ : hashMap[elem] = 1
  })

  Object.entries(hashMap).forEach(elem => arr.push(`${elem[1]}${elem[0]}`))
    
  return arr.join('')
}
