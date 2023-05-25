import { apiInstance } from "./index.js";

const api = apiInstance();

async function login(user, success, fail) {
  console.log(JSON.stringify(user));
  await api.post(`/users/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function findById(userid, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/users/info/${userid}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  api.defaults.headers["refresh-token"] = sessionStorage.getItem("refresh-token"); //axios header에 refresh-token 셋팅
  await api.post(`/users/refresh`, user).then(success).catch(fail);
}

async function logout(userid, success, fail) {
  await api.get(`/users/logout/${userid}`).then(success).catch(fail);
}

export { login, findById, tokenRegeneration, logout };
