import { PUBLIC_REQUEST } from "./request";
import {
  addProject,
  deleteProject,
  getAllProjects,
  getProject,
  EditProject,
  startProject,
  faitureProject,
} from "./store/projectSlice";

export const getProjects = async (dispatch) => {
  dispatch(getAllProjects);
  try {
    const res = await PUBLIC_REQUEST.get("projects");
    dispatch(startProject(res.data));
  } catch (error) {
    dispatch(faitureProject);
  }
};
