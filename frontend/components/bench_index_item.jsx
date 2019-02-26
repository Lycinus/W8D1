import React from 'react'

const BenchIndexItem = ({bench}) => (
    <div>
        <h2>{bench.description}</h2>
        <h3>Latitude: {bench.lat}</h3>
        <h3>Longitude: {bench.lng}</h3>
    </div>
)

export default BenchIndexItem