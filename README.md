# hello-monday

## getHelloImage()

### Configurations
`day`: Day of the week 
- Type: String
- Optional
- Format:  'SUN' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT'

`language`: GreetingLanguage
- Type: String
- Optional
- Format: 'TH' | 'EN'

Example
```
const config = {
  day: 'MON',
  language: 'EN
}
```


### Returns
- `getHelloImage()` returns the image url of the specified day and or language.
- If no parameters are specified, the function will return the image of the current day in English.

## Usage

```ts
// import the module
const helloMonday = require('@pointmekin/hello-monday')

// Get the greeting image URL for the current day based on the device time
console.log(helloMonday.getHelloImage())

// Get the greeting image URL for monday in English
const specificDayAndLanguage = {
  day: 'MON',
  language: 'EN'
}
console.log(helloMonday.getHelloImage(specificDayAndLanguage))

// Get the greeting image URL for the specified day in English by default
const specificDay = {
  day: 'MON',
}
console.log(helloMonday.getHelloImage(specificDay))

// Get the greeting image URL for the current day in the specified language (Thai)
const specifiedLanguage = {
  language: 'TH',
}
console.log(helloMonday.getHelloImage(specifiedLanguage))
```
