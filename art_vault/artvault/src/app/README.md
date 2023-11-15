 # ArtVault Front-end Conventions:

## File Structure
```
app
├── README.md
├── favicon.ico
├── globals.css
├── layout.js
├── page.js
├── redux
└── home
    ├── components
    │   ├── LoginForm
    │   │   ├── Login.js
    │   │   └── LoginInputs.js
    │   └── SignupForm
    │   │   ├── Signup.js
    │   │   └── SignupInputs.js
    └── page.js
```
### Redux Store:
The Redux store is contained within the "redux" folder in the src/app directory. Contained within is a slices folder, a provider which passes redux down to the entire application, as well as a "store.js" file which configures the redux store and combines each of our reducers located in the "slices" folder. This store will be where most of the database-client interaction happens.

```
Example:

├── redux
│   ├── provider.js
│   ├── slices
│   │   └── sessionSlice.js
│   │   └── artworkSlice.js
│   └── store.js
```

<!-- TODO Adjust normalization convention when real endpoint data is being received -->
#### Data Normalization:
To maintain consistency, data within the store should stay normalized (Formatted for consistency) across our reducers so manipulation of the data is intuitive and clean. For example: if we have an object or array containing many objects, it would be intuitive to index each object before adding them to the store, simplifying deletion and editing of data within. When the client is making changes such as a delete or edit operation, the specific item being manipulated can be targeted via the index we assigned.

```
Example of a raw JSON object response from a fetch for artwork:
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
Now, CRUD operations such as: 
```
DELETE:
delete.newState.userArtwork[1]
``` 
```
EDIT:
newState.userArtwork[1].title = "New Title"
``` 
can be used to manipulate the data contained within the store.
