const axios = require('axios');

async function obtenerToken() {
  const authorizationHeader = 'Basic SDNtclZrTW5BMFVoQ1lqVEFUMFdpdmUwVHpyRklNU3I6bTNwdGdhNm5EdVViWWVOWg=='; // Reemplaza con tus credenciales codificadas en Base64
  const url = 'https://api.orange.com/oauth/v3/token';

  try {
    const response = await axios.post(
      url,
      'grant_type=client_credentials', // Cuerpo de la solicitud
      {
        headers: {
          Authorization: authorizationHeader,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    console.log('Token obtenido:', response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.error('Error al obtener el token:', error.response.data);
  }
}

obtenerToken(); 
