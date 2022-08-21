import Geolocation from 'react-native-geolocation-service';

export const getLocation = () => {
  return new Promise<Geolocation.GeoPosition>((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject({code: error.code, message: error.message}),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });
};
