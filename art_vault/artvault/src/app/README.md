# ArtVault Application Front-end Conventions:

A Wip set of guidelines for front-end conventions regarding application file structure, Redux store, component structure and styling/formatting via tailwind and prettier. Guidelines should be followed to maintain formatting consistency throughout the application.

<br>

## Basic File Structure Reference

```
Example App:

app
├── redux
├── features
│    ├── ArtworkDisplay.js
│    ├── Login
│    └── Signup
├── home
│    └── page.js
├── favicon.ico
├── globals.css
├── layout.js
├── page.js
└── THISREADME.md
```

<br>

## React - Next.js

### Folder Layout and Naming:

Next.js uses a routing system based on the folder layout of the application. Documentation can be found here: https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts
<br>_note: page.js is used instead of index.js from Next.js 13_

#### Guidelines:

-   Route folders should always contain a page.js file to satisfy Next.js 13 routing convention.
-   Route folders can be given their own child folder for breaking up page sections when necessary.
-   App features should be put in the features folder, named using PascalCase.
-   App features should be broken up into multiple components when possible and given their own folder, named intuitively when doing so.
-   Any files or folders related to redux or the redux store should be camelCased.
-   Use best discretion when naming folders and breaking up features.
-   Always format with prettier before issuing a PR.

### Component Structure and File Exports:

Components and files containing functions used application-wide should adhere to the guidelines listed below.

#### Guidelines:

-   Build for scaleability when pheasible.
-   Component export names should use PascalCase.
-   Components should export the main component returning html/jsx as default:
    ```
    export default function Component() {
        return (
            ...
        )
    }
    ```
-   Helper Functions should be exported and named using camelCase as follows:
    ```
    export const helperFunc = () => {
        ...
    }
    ```

<br>

## Redux 

Documentation for Redux-Toolkit can be found here: https://redux-toolkit.js.org/

### Store:

The Redux store is contained within the "redux" folder in the src/app directory and shipped in a provider which passes the redux store down to the entire application as state in the "layout.js" file. The "store.js" file configures the redux store and combines each of the reducers located within app/Features/{FeatureName}/{featureSlice}. 

```
Example Application - Store Expanded:

├── redux
│   ├── provider.js
│   └── store.js
├── Features
│   ├── ArtworkDisplay.js
│   ├── Login
│   │   ├── loginSlice
│   │   │   ├── thunks.js
│   │   │   ├── actions.js
│   │   │   └── reducer.js
│   │   ├── LoginForm.js
│   │   └── LoginInputs.js
│   └── Signup
│       ├── signupSlice
│       │   ├── thunks.js
│       │   ├── actions.js
│       │   └── reducer.js
│       ├── SignupForm.js
│       └── SignupInputs.js
├── favicon.ico
├── globals.css
├── layout.js
├── page.js
└── THISREADME.md
```

<!-- TODO Adjust normalization convention and objects when real endpoint data is being received -->

#### Data Normalization:

To maintain consistency, data within the store should stay normalized (formatted) within our reducers, so that manipulation of data is intuitive and clean. For example: if we have an object or array containing many objects, it might be a good idea to index each object before adding them to the store, simplifying the deletion and editing logic within the reducer. When the client makes changes resulting in a delete or edit operation being sent to redux and eventually the database, the specific item being manipulated can be targeted via the assigned index.

```
Example of a raw JSON response from a fetch requesting a users artwork:

{
    {
        id: 1,
        title: 'Piece of art 1',
        tags: ['one','two','three'],
    },
    {
        id: 2,
        title: 'Piece of art 2',
        tags: ['one','two','three'],
    }
}

```

```
The same JSON, normalized:

userArtwork: {
    '1': {
        id: 1,
        title: 'Piece of art 1',
        tags: ['one','two','three'],
    },
    '2': {
        id: 2,
        title: 'Piece of art 2',
        tags: ['one','two','three'],
    }
}

```

<br>

Now, CRUD operations such as:

```
DELETE:
delete.newState.userArtwork[targetId]
```

```
EDIT:
newState.userArtwork[targetId].title = "New Title"
```

can be used to manipulate the data contained within the store.

<br>

<!-- TODO add more on passing props for styling -->

## Tailwind

More information on tailwind className props and more can be found here: https://tailwindcss.com/docs

### Tailwind Prop Order Priority:

Styled elements should have their className props listed similarly across the entire application when possible, where the main order of priority is made up of the following categories:

1. Positional props
2. Visual styling
3. Media queries which follow points 1 and 2

_Prop order priority within each category is not strict, but consistency should be sought within components._

### Passing Props for Conditional Styling:

Custom style components can be created and changed conditionally, allowing for better UX solutions to things such as displaying form errors.

Basic information on creating style objects can be found here: https://tailwindcss.com/docs/reusing-styles#extracting-components-and-partials

<br>

## Prettier

Using basic configuration options from: https://prettier.io/docs/en/configuration.html#basic-configuration

Instructions for setting up prettier in your editor: https://prettier.io/docs/en/install#set-up-your-editor

Install prettier on your IDE and be sure to run before issuing a PR (VSCode Default: Shift + Alt + f).
