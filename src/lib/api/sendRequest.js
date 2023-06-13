import getRootUrl from './getRootUrl';

export default async function sendRequest(path, options = {}) {

  const headers = { ...(options.headers || {}), 'Content-type': 'application/json; charset=UTF-8' };

  try {
    const response = await fetch(`${getRootUrl()}${path}`, {
      method: 'POST',
      credentials: 'include',
      ...options,
      headers,
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

