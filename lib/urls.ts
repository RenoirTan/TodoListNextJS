/*
 * Functions to create urls in case the project structure ever changes.
 */

export function objectToQuery(object: { [key: string]: string | number }): URLSearchParams {
  const usp = new URLSearchParams();
  for (const [key, value] of Object.entries(object)) {
    let stringed;
    if (typeof value === "string") {
      stringed = value;
    } else if (typeof value === "number") {
      stringed = value.toString();
    } else {
      stringed = `${value}`
    }
    usp.append(key, stringed);
  }
  return usp;
}

export const index = () => "/";

export const todos = (obj: { page?: number; query?: string; }) => {
  const urlQuery = objectToQuery(obj);
  return "/?" + urlQuery.toString();
};

export const login = () => "/login";

export const register = () => "/register";

export const changePassword = () => "/change-password";

export const changeName = () => "/change-name";

export const createTodo = () => "/create";

export const editTodo = ({ id }: { id: string }) => `/${id}/edit`;
