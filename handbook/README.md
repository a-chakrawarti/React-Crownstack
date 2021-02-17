# ReactJS

React is JavaScript library for building user-interfaces.
React runs on client as a single page application(SPA). That is `public -> index.html`.


React is referred to as a front-end framework as it is comparable to frameworks like Angular or Vue.


Angular has a built in routing system and react doesn't but could be installed "react-router-dom". It has it own ecosystem of packages to make it a full-fledged framework.

## Why use React?

- React structures the "View" layer in MVC design pattern. Model deals with the data and Controller deals with the requests & routing.
- Reusable components with their own state, making a dynamic site using vanilla JS could get really messy and hard to maintain in a team.
- JSX: JavaScript Syntax Extension (Dynamic Markup): this allows to write dynamic html.
- Interactive UI since it uses Virtual DOM(Document Object Model). Updates a part of the page without reloading the entire page.
- It structures the code base which make it easier to work in teams.
- Data binding and immutable state, improves performanace and helps in debugging.

`src -> index.js` is the entry point to react. 

`import App from './App';` : App component that wraps around the entire application.

```javascript
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Rendering `App` component `src -> App.js` into the element with `id=root` from `public -> index.html`. Glocal CSS file is `src -> App.css`.

Inside the `App.js` we have a render method (life-cycle method), only method that is required to render components in the browser which returns JSX. 
In JSX, instead of `<div class="name"></div>` we would be writing `<div className="name"></div>`.


## package.json

It is a manifest file that has information about our app like the dependencies/packages that are being used.
```json
{
    "dependencies": {
        "react": "^17.0.1", // the library itself
        "react-dom": "^17.0.1", // deals with loading components in the browser, alrenative to this there is react-native for mobile
        "react-scripts": "4.0.2", // dev server, compile our apps, test
    },

    "scripts": {
        "start": "react-scripts start" , // start dev server, offers hot-reload
        "build": "react-scripts build", // compiling before deploying, npm run build
        "test": "react-scripts test",
        "eject": "react-scripts eject" // customize webpack file
    }
}
```