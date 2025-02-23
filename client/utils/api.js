export async function fetchWithAuth(url, options = {}) {
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      ...options.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
  
    const response = await fetch(url, { ...options, headers });
    return response;
  }
  