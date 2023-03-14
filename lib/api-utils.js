const googlePlaceId = 'ChIJR88dxsbRT48R5CMRMTRUGlQ';
const googleApiKey = process.env.PLACES_KEY;
const googleUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${googlePlaceId}&fields=reviews&language=es&reviews_sort=newest&key=${googleApiKey}`;

const igToken = process.env.IG_TOKEN;
const igUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,thumbnail_url&access_token=${igToken}`;

export const getGoogleReviews = async () => {
  const response = await fetch(googleUrl);
  const data = await response.json();
  return data.result.reviews;
};

export const getIgPics = async () => {
  const response = await fetch(igUrl);
  const data = await response.json();
  return data.data.splice(1, 9);
};
