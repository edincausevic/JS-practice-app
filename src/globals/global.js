

export const _GL = {
  UTIL: {
    formatNum: (num) => {
      let number = num + 1
      return number.length === 1 ? number : '0' + number
    }
  }
}