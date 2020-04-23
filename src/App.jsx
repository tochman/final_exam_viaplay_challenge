import React, { useEffect, useState } from 'react';
import axios from 'axios'
const App = () => {
  const [shows, setShows] = useState([])

  useEffect(() => {
    axios.get('https://content.viaplay.se/pc-se/serier/samtliga')
      .then(response => {
        setShows(response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products'])
      })
  }, [])
  console.log(shows)

  let showsListing = shows.map((show, index) => {
    return (
      <div id={`show-${index + 1}`} key={show.publicPath} className="display-show">
        <img src={show.content.images.landscape.url} alt={show.content.series.title} />
      </div>
    )
  })
  return (
    <div id="shows">
      {showsListing}
    </div>
  );
};

export default App;