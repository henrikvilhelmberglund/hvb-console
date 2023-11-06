# hvb-console

This is a library that 

- gives some color to your console.info(), console.warn() and console.error()
- adds the location where the log was called from and you can ctrl+click it to go to that location

It only works in Node console.logs (server side only).

Before:

![hvb-console-before](https://user-images.githubusercontent.com/110549389/238592355-5a3db714-60ad-4bf0-946a-afbaa43e039a.png)

After:

![hvb-console-after](https://user-images.githubusercontent.com/110549389/238592380-788069a4-236a-4afe-8490-441705f9a928.png)

## Install

```bash
npm install -D hvb-console
```

## Usage

```js
import console from "hvb-console";
```
