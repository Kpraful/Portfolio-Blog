// Detail.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { dataContext } from '../context/context';

function Detail() {
  const { id } = useParams(); // Get the ID from the URL
  const data = useContext(dataContext); // Access context data
  console.log(data);
  // Check if context is available and not null
  if (!data) {
    return <div>Loading...</div>; // If the data is not available yet, show a loading message
  }

  // Now it's safe to destructure the data since the context is valid
  const { title, content, img } = data;

  // Handle the case where title, content, or img might not be available for the given ID
  const detailTitle = title ? title[id] : 'Title not found';
  const detailContent = content ? content[id] : 'Content not found';
  const detailImg = img ? img[id] : 'Image not available';

  return (
    <div>
      <h1>{detailTitle}</h1>
      <img src={detailImg} alt={detailTitle} />
      <p>{detailContent}</p>
    </div>
  );
}

export default Detail;
