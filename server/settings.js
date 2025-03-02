// add your API key here
// const api_key = 'XXXXXXXXXX';

// define all RBLs of stops you want to display
const api_ids = [
  "1716",    //Marx-Meidlinger-Straße,  Direction Wolkersbergenstraße
  "1716"    //Marx-Meidlinger-Straße,  Direction Baden Josefsplatz
];

const api_url = 'https://www.wienerlinien.at/ogd_realtime/monitor' +
  '?activateTrafficInfo=stoerunglang' +
//  `&sender=${api_key}`+
  '&rbl=' + api_ids.join("&rbl=");


// define filters to exclude specific departures from the monitor
// currently you can exclude lines as a whole or only at certain stops
const filters = [
  {
    line: ['VRT'],  // excludes whole line (VRT = tourist line)
  },
  {
    line: ['D', '1', '71'],
    stop: ['Rathausplatz/Burgtheater'], // excludes lines only at given stop
  },
  {
    line: ['2'],
    stop: ['Stadiongasse/Parlament'],
  },
];

// define your current location
const location_coordinate = '16.343096,48.180015'

// define OSRM server for routing to stops. Empty string to disable feature
const osrm_api_url = 'https://router.project-osrm.org/route/v1/foot/' + location_coordinate + ';'


module.exports = {
  'api_url'         : api_url,
//  'api_key'         : api_key,
  'api_ids'         : api_ids,
  'filters'         : filters,
  'api_cache_msec'  : 6000,   // cache API responses for this many milliseconds; default: 6s
  'listen_port'     : 8080,   // port to listen on
  'osrm_api_url'    : osrm_api_url
};
