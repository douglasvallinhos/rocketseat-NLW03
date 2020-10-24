import Leaflet from 'leaflet';
import mapMarkerImg from '../images/map-marker.svg';
const mapIcon = Leaflet.icon({ 
  iconUrl: mapMarkerImg,
  iconSize: [44,56],
  iconAnchor: [22, 56],
  popupAnchor: [170,2]
});

export default mapIcon;