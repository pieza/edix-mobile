export default class StringUtils {
  static toMoneyFormat(value) {
    if(!value) return 0
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }
  static toDateString(value) {
    if(!value) return ''
    let date = new Date(value)
    if(!date) return ''
    return date.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})
  }
  static toFullDateString(value) {
    if(!value) return ''
    let date = new Date(value)
    if(!date) return ''
    return date.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric", hour:"numeric", minute:"numeric" })
  }
}