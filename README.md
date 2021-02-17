# Let's get started!

Before diving into code, get these tools and setup your environment.

1. [Node.js download](https://nodejs.org/en/download/)
2. [React Developer Tools: Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
3. [React Boilerplate](https://github.com/facebook/create-react-app)
   - `npx create-react-app my-app` : allows us to use without installing it in our system
   
   
   - While installing if you get the following error: 

      ```
      npm ERR! code ENOLOCAL

      npm ERR! Could not install from "lastname\AppData\Roaming\npm-cache\_npx\14068" as it does not contain a package.json file.
      ```
      The above error is due the whitespace containing in username of PC. The command `npx create-react-app` doesn't work in this situation and shows error. 

      - [npx Issue on GitHub](https://github.com/zkat/npx/issues/146)

      - Solution to the above Issue: `npm config set cache "C:\Users\Firstname~1\AppData\Roaming\npm-cache" --global`