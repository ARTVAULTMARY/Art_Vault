# ArtVault Application Front-end Conventions:
A Wip set of guidelines for front-end conventions regarding application file structure, Redux store, component structure and styling formatting via tailwind. Guidelines should be followed to maintain formatting consistency throughout the application.

<br>

## File Structure Reference
```
Example App:

app
├── THISREADME.md
├── favicon.ico
├── globals.css
├── layout.js
├── redux
├── Features
│    ├── ArtworkDisplay.js
│    ├── Login
│    └── Signup
├── home
│    └── page.js
└── page.js
```

<br>

## Next.js
### Folder Layout and Naming Convention
Next.js uses a routing system based on the folder layout of the application. Documentation can be found here: https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts
<br>*note: page.js is used instead of index.js from Next.js 13*

#### Basic Guidelines:
- Route folders should always contain a page.js file to satisfy Next.js 13 routing convention.
- App Features should be put in the Features folder, named using PascalCase.
- App Features should be broken up into multiple components when possible and given their own folder, named intuitively when doing so.
- Any files or folders related to redux or the redux store should be camelCased.
- Use best discretion when naming folders and breaking up features. 
- Build for scaleability when pheasible.

<br>

## Redux Store
Documentation for Redux-Toolkit can be found here: https://redux-toolkit.js.org/

The Redux store is contained within the "redux" folder in the src/app directory, is shipped in a provider which passes the redux store down to the entire application. The "store.js" file configures the redux store and combines each of the reducers located within app/Features/FeatureName/featureSlice.

```
Example Application :

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
│   │   ├── signupSlice
│   │   │   ├── thunks.js
│   │   │   ├── actions.js
│   │   │   └── reducer.js
│   │   ├── SignupForm.js
│   │   └── SignupInputs.js
```

<!-- TODO Adjust normalization convention and objects when real endpoint data is being received -->
#### Data Normalization:
To maintain consistency, data within the store should stay normalized (formatted) within our reducers so that manipulation of data is intuitive and clean. For example: if we have an object or array containing many objects, it might be a goode idea to index each object before adding them to the store, simplifying deletion and editing of data within. When the client makes changes resulting in a delete or edit operation being sent to redux, the specific item being manipulated can be targeted via the index we assigned.

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
