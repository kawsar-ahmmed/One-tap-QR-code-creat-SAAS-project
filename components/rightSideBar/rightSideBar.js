import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styles from './rightSideBar.module.css';

const RightSideBar = () => {
  const [selectedColor, setSelectedColor] = useState('#000');
  return (
    <div className="bg-white vh-100">
      <p className={`${styles.bg} py-3 text-center`}>Projects settings</p>
      <div className="container">
        <div className="col-12 mt-4">
          <p className="fs-18 fw-bold">Project Name</p>
          <input
            placeholder="Title is here"
            className={`${styles.input} form-control fw-bold`}
            type="text"
          />
        </div>
        {/* ================================ */}
        {/* ================================ */}
        <p className={`${styles.text} fs-18 fw-bold mt-5`}>Canvas Color</p>
        <div className="d-flex align-items-center justify-content-between">
          <div className="col-6">
            <input
              className="bg-white"
              style={{
                border: 'none',
                width: '90%',
                height: '40px',
              }}
              onChange={(e) => setSelectedColor(e.target.value)}
              type="color"
              name=""
              value=""
            />
          </div>

          <div className="col-6">
            <p
              className="text-white text-center mt-2 p-2"
              style={{
                backgroundColor: `${selectedColor}`,
                width: '90%',
                height: '40px',
                borderRadius: '5px',
              }}
            >
              {selectedColor}
            </p>
          </div>
        </div>

        {/* ================================ */}
        {/* ================================ */}
        <hr className="mt-2 mb-4" />
        <p className={`${styles.text} fs-18 fw-bold`}>Canvas area (?)</p>
        <div className="row">
          <div className="col-6 d-grid">
            <button className={`${styles.bg} py-2 w-100`}>
              <AiOutlinePlus className="textColor" />
            </button>
          </div>
          <div className="col-6 d-grid">
            <button className={`${styles.bg} w-100`}>
              {' '}
              <AiOutlineMinus />{' '}
            </button>
          </div>
        </div>
        <hr className="mt-4" />
        <p className="form-check-label fs-18 fw-bold">Show guides</p>
        <div className="form-check form-switch ">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
