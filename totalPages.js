const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  let arrI = arrayItems
  let rowpp = rowsPerPage

  if(arrI === null || arrI === undefined){
    return undefined
  }else if(rowpp === null || rowpp === undefined){
    return 1
  }else if(rowpp === 0){
    return 1
  }else{
    return Math.ceil(arrI.length/rowpp)
  }
}
module.exports = totalPages
