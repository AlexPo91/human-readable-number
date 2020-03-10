module.exports = function toReadable (number) {
  let numbers = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let dozens = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen',  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  

  if(number < 20) {
    return dozens[number]
  }

  
    if( number < 100) {
      return (number % 10 == 0) ? numbers[number/10] : numbers[Math.floor(number/10)] + ' ' + dozens[number%10]
    }
    if(number >= 100) {
      return dozens[Math.floor(number/100)] + ' hundred' + ((number%100 > 19) ? 
    ((number%100%10==0)? ' ' + numbers[Math.floor(number%100/10)] : ' ' + numbers[Math.floor(number%100/10)] + ' ' + dozens[Math.floor(number%100%10)])  
    :  ((number%100 !=0 ) ? ' ' + dozens[number%100] : ''))
    }
}
