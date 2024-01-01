// auth.js
const isAuthenticated = () => {
  const session = sessionStorage.getItem('token');
  return !!session && !!JSON.parse(session).token; // Double negation for explicit boolean conversion
};

export { isAuthenticated };
