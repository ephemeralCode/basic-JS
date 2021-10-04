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
  // throw new NotImplementedError('Not implemented');
  // let hashMap = {}
  // let arr = []

  // if (typeof(str) !== 'string') return ''

  // str.split('').map(elem => hashMap[elem] ? 
  //   hashMap[elem]++ : hashMap[elem] = 1)

  // Object.entries(hashMap).forEach(elem => {
  //   arr.push(`${elem[1]}${elem[0]}`)
  // })

  // return arr.join('')



  //! 'abbcca' ok_hand...
  let arr = str

  for(let i = 0; i < str.length; i++){
      let target = arr.match(/(\w)\1{1,}/)

      if(!target) break

      arr = arr.replace(/(\w)\1{1,}/, `${target[0].length}${target[1]}`)
  }

  return arr
}
