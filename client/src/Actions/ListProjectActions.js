export function listProject() {
  return { type: "LISTPROJECT" };
}
export function listDeveloper() {
  return { type: "LISTDEVELOPER" };
}
export function inviteDeveloper(Ids) {
  return {
    type: "INVITEDEVELOPER",
    Ids
  };
}
export function addTask(Value) {
  return {
    type: "ADDTASK",
    Value
  };
}
export function projectStatus(ProjectStatus) {
  return {
    type: "PROJECTSTATUS",
    ProjectStatus
  };
}
