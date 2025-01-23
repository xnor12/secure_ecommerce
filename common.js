/**
 * Helper function to send API requests.
 * @param {string} url - The API endpoint URL.
 * @param {string} method - The HTTP method (GET, POST, etc.).
 * @param {Object} [body] - The request payload.
 * @returns {Promise<any>} - The response from the API.
 */
async function apiRequest(url, method, body = null) {
  const headers = {
    'Content-Type': 'application/json',
  };

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`API request failed with status: ${response.status}`);
  }

  return response.json();
}
