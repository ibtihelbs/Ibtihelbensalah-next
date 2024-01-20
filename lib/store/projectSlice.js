import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    projectStore: [],
    error: false,
    isFetching: true,
  },
  reducers: {
    startProject: (state, action) => {
      state.isFetching = true;
      state.error = false;
    },
    faitureProject: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },
    // addProject: (state, action) => {},
    // deleteProject: (state, action) => {},
    // getProject: (state, action) => {},
    getAllProjects: (state, action) => {
      state.isFetching = true;
      state.projectStore = action.payload;
    },
    //EditProject: (state, action) => {},
  },
});

export const { getAllProjects, faitureProject, startProject } =
  projectSlice.actions;

export default projectSlice.reducer;
// getProject,
//EditProject,
// addProject,
// deleteProject,
