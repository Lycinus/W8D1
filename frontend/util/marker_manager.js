class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    createMarkerFromBench(bench) {
        if (!Object.keys(this.markers).includes(bench.id)) {
            this.markers[bench.id] = new google.maps.Marker({
                position: {lat: bench.lat, lng: bench.lng},
                map: this.map,
                title: bench.description
            })
        }
    }

    updateMarkers(benches) {
        console.log(benches)
        Object.values(benches).forEach( bench => {
            this.createMarkerFromBench(bench)
        })
    }
 }

export default MarkerManager