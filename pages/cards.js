import React from 'react';
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import Card from '../components/card/card';

const Cards = () => {
  return (
    <div className="container  ">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9  vh-100 scroll">
          <Navbar />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Cards;
