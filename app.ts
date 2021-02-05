'use strict'
import bands from './data/bands.json'
import concerts from './data/concerts.json'
import venues from './data/venues.json'

const args = process.argv

export const matchingEvents = (bandIds: Array<string>, lat: number, lon: number, radius: number) => {
    console.log(bandIds);
    console.log(lat);
    console.log(lon);
    console.log(radius);
    return (Object.values(bands[0].name).indexOf(bandIds[0]) > -1) ? 'band found' : 'nothing found'
}

// USAGE: node --experimental-json-modules app.ts --bandIds=[array of string (or comma separated list)] --latitude=[float] --longitude=[float] --radius=[Int - In kilometers] 

try {
    const bandIds: Array<string> = args[2].split("=")[1].split(",");
    const lat: number = parseFloat(args[3].split("=")[1]);
    const lon: number = parseFloat(args[4].split("=")[1]);
    const radius: number = parseInt(args[5].split("=")[1]);
    
    matchingEvents(bandIds, lat, lon, radius)
} catch(err) {
    throw err
}