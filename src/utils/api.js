const API_BASE = "https://fourrootsfashion-backend.onrender.com";

export async function apiRequest(path, method, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : undefined
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "API error");
  return data;
}
