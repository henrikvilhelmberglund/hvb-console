# hvb-console

This is a library that 

- gives some color to your console.info(), console.warn() and console.error()
- adds the location where the log was called from and you can ctrl+click it to go to that location

It only affects Node console.logs (server side only). Browser logging is unaffected.

Before:

![hvb-console-before](https://user-images.githubusercontent.com/110549389/238592355-5a3db714-60ad-4bf0-946a-afbaa43e039a.png)

After:

![hvb-console-after](https://github.com/henrikvilhelmberglund/hvb-console/assets/110549389/8883f503-82bb-4952-9dcf-6fbb6826cfb1)


## Install

```bash
npm install -D hvb-console
```

## Usage

```js
import console from "hvb-console";
```
