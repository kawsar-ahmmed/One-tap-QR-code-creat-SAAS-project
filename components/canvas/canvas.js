import React from 'react';
import RightSideBar from '../rightSideBar/rightSideBar';
import styles from './canvas.module.css';

const Canvas = () => {
  return (
    <div className="d-flex justify-content-between mt-5  ">
      <div className="col-md-6 d-flex justify-content-center align-items-center  ">
        <div className="bg-white h-100 w-100 "></div>
      </div>
      <div className="col-md-4">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Canvas;
