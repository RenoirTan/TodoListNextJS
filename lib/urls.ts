/*
 * Functions to create urls in case the project structure ever changes.
 */

export function objectToQuery(object: { [key: string]: string | number }): URLSearchParams {
  const usp = new URLSearchParams();
  for (const [key, value] of Object.entries(object)) {
    let stringed;
    if (value === undefined || value === null || value === "") {
      continue;
    } else if (typeof value === "string") {
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

export function appendQueryToPath(path: string, query: URLSearchParams): string {
  const qstring = query.toString();
  return (qstring) ? path + "?" + qstring : path;
}

export const index = () => "/";

export const todos = (obj: { page?: number; query?: string; }) => {
  const urlQuery = objectToQuery(obj);
  return appendQueryToPath("/todos", urlQuery);
};

export const login = () => "/login";

export const register = () => "/register";

export const changePassword = () => "/settings/change-password";

export const changeName = () => "/settings/change-name";

export const createTodo = () => "/create";

export const editTodo = ({ id }: { id: string }) => `/${id}/edit`;

export const settings = () => "/settings";
