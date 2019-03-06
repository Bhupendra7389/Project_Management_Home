import { takeLatest, all } from "redux-saga/effects";
import userRegistration from "./SagaMethods/Registration";
import addTask from "./SagaMethods/AddTask";
import addProject from "./SagaMethods/AddProject";
import userLogin from "./SagaMethods/Login";
import listProject from "./SagaMethods/ListProject";
import listTask from "./SagaMethods/ListTask";
import editTask from "./SagaMethods/EditTask";
import deleteTask from "./SagaMethods/DeleteTask";
import listDeveloper from "./SagaMethods/ListDeveloper";
import getTaskById from "./SagaMethods/GetTaskById";
import inviteDeveloper from "./SagaMethods/InviteDeveloper";
import invitedByProject from "./SagaMethods/InvitedByProject";
import invitesById from "./SagaMethods/InvitesById";
import invitesResponse from "./SagaMethods/InviteResponse";
import commentOnTask from "./SagaMethods/CommentOnTask";
import deleteDeveloperInvite from "./SagaMethods/DeleteDeveloperInvite";
import projectStatus from "./SagaMethods/ProjectStatus";
import taskStatus from "./SagaMethods/TaskStatus";
export default function* rootSaga() {
  yield all([
    yield takeLatest("DEVELOPERREGISTRATION", userRegistration),
    yield takeLatest("ADDTASK", addTask),
    yield takeLatest("ADDPROJECT", addProject),
    yield takeLatest("DEVELOPERLOGIN", userLogin),
    yield takeLatest("LISTPROJECT", listProject),
    yield takeLatest("LISTTASK", listTask),
    yield takeLatest("EDITTASK", editTask),
    yield takeLatest("DELETETASK", deleteTask),
    yield takeLatest("LISTDEVELOPER", listDeveloper),
    yield takeLatest("GETTASKBYID", getTaskById),
    yield takeLatest("INVITEDEVELOPER", inviteDeveloper),
    yield takeLatest("INVITEDBYPROJECT", invitedByProject),
    yield takeLatest("INVITESBYID", invitesById),
    yield takeLatest("INVITERESPONSE", invitesResponse),
    yield takeLatest("COMMENT", commentOnTask),
    yield takeLatest("DELETEDEVELOPERINVITE", deleteDeveloperInvite),
    yield takeLatest("PROJECTSTATUS", projectStatus),
    yield takeLatest("TASKSTATUS", taskStatus)
  ]);
}
