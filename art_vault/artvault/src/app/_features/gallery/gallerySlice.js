import { createSlice } from "@reduxjs/toolkit";
import { getAllUserGalleries } from "./projectThunks";

const initialState = {
    allProjects: {},
    currentProject: undefined,
    error: null,
};

const project = createSlice({
    name: "gallery",
    initialState,
    reducers: {
        setAllGalleries: (state, action) => {
            state.allGalleries = action.payload;
        },
        clearAllGalleries: (state) => {
            state.allGalleries = {};
        },
        setCurrentGallery: (state, action) => {
            state.currentGallery = action.payload;
        },
        clearCurrentGallery: (state) => {
            state.currentGallery = undefined;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUserGalleries.fulfilled, (state, action) => {
            const normalizedGalleries = action.payload.reduce((acc, project) => {
                acc[gallery.id] = project;
                return acc;
            }, {});
            state.allGalleries = normalizedGalleries;
        })
        .addCase(getAllUserGalleries.rejected, (state, action) => {
            state.error = action.error.message ? action.error.message : 'Failed to fetch Galleries';
        });
    }
});

const { setAllGalleries, setCurrentGallery, clearAllGalleries, clearCurrentGallery } = project.actions;

export { galleries, setAllGalleries, setCurrentGalleries, clearAllGalleries, clearCurrentGalleries };
