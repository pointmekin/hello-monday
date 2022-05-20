# hello-monday
---

## getHelloImage()

### Parameters
`day`: Day of the week 
- Type: String
- Optional
- Format:  'SUN' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT'

`language`: GreetingLanguage
- Type: String
- Optional
- Format: 'TH' | 'EN'

### Returns
- `getHelloImage()` returns the image url of the specified day and or language.
- If no parameters are specified, the function will return the image of the current day in English.