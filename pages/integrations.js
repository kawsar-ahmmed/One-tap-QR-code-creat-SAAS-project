import React from 'react';
import demo from '../utilites/images/damo.svg';
import Image from 'next/image';
import Sidebar from '../components/sidebar/sidebar';
import Navbar from '../components/navbar/navbar';

const Integrations = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 vh-100 scroll">
          <Navbar />
          <Image
            src={demo}
            alt="working"
            title="working"
            height={640}
            width={640}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Integrations;
