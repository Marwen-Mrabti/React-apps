import axios from 'axios';

// const KEY = 'AIzaSyDuJTMYdy2vWtoKauuIAQWkDdGKtHIoVZ0';
const KEY = 'AIzaSyDp1A8dHzkfPMU7Jd1SnMtiVFqadxC2sFE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
