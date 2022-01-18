const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '5fc302a416266be9a33421f1c4fba2d2',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;