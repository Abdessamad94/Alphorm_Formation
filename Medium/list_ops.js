//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
    constructor(array) {
          this.values = array || []
      }
      append(list) {
          this.values = [...this.values, ...list.values]
          return this
      }
      concat(list) {
          for (const l of list.values) {
              if (l instanceof List) {
                  this.append(l)
              }
          }
          return this
      }
      filter(predicate) {
          const values = []
          for (const value of this.values) {
              if (predicate(value)) {
                  values[values.length] = value
              }
          }
          return new List(values)
      }
      length() {
          return this.values.length
      }
      map(func) {
          const values = []
          for (const value of this.values) {
              values[values.length] = func(value)
          }
          return new List(values)
      }
      foldl(accumulator, init) {
          let total = init
          for (const value of this.values) {
              total = accumulator(total, value)
          }
          return total
      }
      foldr(fn, init) {
          const len = this.values.length
          let total = init
          for (let i = 0; i < len; i++) {
              total = fn(total, this.values[len - i - 1])
          }
          return total
      }
      reverse() {
          const values = [],
              len = this.values.length
          for (let i = 0; i < len; i++) {
              values[values.length] = this.values[len - i - 1]
          }
          return new List(values)
      }
  }
  