import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserProjectsByUserId } from "./requests";

export const getAllUserProjects = createAsyncThunk(
    '/project/fetchAllProjects',
    async (id, { rejectWithValue }) => {
        try {
            const projects = await getUserProjectsByUserId(id);
            return projects;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue('An error occurred.');
            }
        }
    }
)
