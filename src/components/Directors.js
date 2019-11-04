
import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <h3>Name: {director.name}</h3>
          <p>Movies:</p>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors

// import React from 'react';
// import { directors } from '../data';
// import Director from './Director'

// const Directors = () => {
//   console.log("directors:", directors)
//   let directorsArray = directors.map(director => <Director director={director} />)
//   return (
//     <div>
//       <h1>Directors Page</h1>
//       {directorsArray}
//     </div>
//   );
// }

// export default Directors

