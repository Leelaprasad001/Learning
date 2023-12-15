const prod = {
  url: {
   API_BASE_URL: 'https://donation.iipe.ac.in/donation-api',
   
  }
}

const dev = {
  url: {
    API_BASE_URL: 'http://localhost:8080'
  }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod