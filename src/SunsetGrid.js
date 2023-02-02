import React from 'react';
import './SunsetGrid.css';

const SunsetGrid = () => {
  return (
    <div className="sunset-grid">
      <h1 className="sunset-heading">PicturesqueGrid</h1>
      <div className="sunset-photos">
        <img src="https://picsum.photos/300/300" alt="Sunset 1" />
        <img src="https://picsum.photos/301/301" alt="Sunset 2" />
        <img src="https://picsum.photos/302/302" alt="Sunset 3" />
        <img src="https://picsum.photos/303/303" alt="Sunset 4" />
        <img src="https://picsum.photos/304/304" alt="Sunset 5" />
      </div>
    </div>
  );
};

export default SunsetGrid;
