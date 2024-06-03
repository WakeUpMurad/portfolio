export interface ApiOptions {
  method: string
  headers: {
    'x-rapidapi-key': string
    'x-rapidapi-host': string
  }
}

export const geoApiOptions: ApiOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'd78116a410msh8364f6881fe6fd4p100affjsnf69b2cd3ea45',
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
  },
}

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'
