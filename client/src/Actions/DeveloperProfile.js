export function invitedByProject(id) {
  return {
    type: "INVITEDBYPROJECT",
    id
  };
}
export function invitesById(id) {
  return {
    type: "INVITESBYID",
    id
  };
}
export function inviteResponse(user) {
  return {
    type: "INVITERESPONSE",
    user
  };
}
export function deleteDeveloperInvite(user) {
  return {
    type: "DELETEDEVELOPERINVITE",
    user
  };
}
