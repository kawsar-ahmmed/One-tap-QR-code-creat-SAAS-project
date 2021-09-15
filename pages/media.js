import Image from 'next/image';
import 'node-self';
import QRCodeStyling from 'qr-code-styling';
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import styles from '../styles/media.module.css';
import demo from '../utilites/images/damo.svg';
// const QRCodeStyling = dynamic(() => import("qr-code-styling"));

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  image:
    'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
  dotsOptions: {
    color: '#4267b2',
    type: 'rounded',
  },
  imageOptions: {
    crossOrigin: 'anonymous',
    margin: 20,
  },
});
const Media = () => {
  const [url, setUrl] = useState('https://qr-code-styling.com');
  const [fileExt, setFileExt] = useState('png');
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
    });
  }, [url]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt,
    });
  };

  const handleClick = () => {
    fetch('https://api.beaconstac.com/api/2.0/qrcodes/', {
      method: 'POST',
      headers: {
        Authorization: 'Token 316db685fed535da7c9a6f7880ee9600f0ae80c9',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Sagor vhai',
        qr_type: 2,
        organization: 65942,
        attributes: {
          color: '#000000',
          margin: 25,
        },

        campaign: {
          custom_url: 'https://www.google.com',
          content_type: 1,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(
          `https://api.beaconstac.com/api/2.0/qrcodes/${data.id}/download/?canvas_type=png`
        );
        fetch(
          `https://api.beaconstac.com/api/2.0/qrcodes/${data.id}/download/?canvas_type=png`,
          {
            method: 'GET',
            headers: {
              Authorization: 'Token  316db685fed535da7c9a6f7880ee9600f0ae80c9',
              'content-type': 'application/json',
            },
          }
        );
        console.log('chagol vhaai', data);
      });
  };
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
          {/* //////// */}
          <button type="submit" onClick={handleClick}>
            Genarate
          </button>
          {/* //////// */}
          <div style={styles.inputWrapper}>
            <input value={url} onChange={onUrlChange} style={styles.inputBox} />
            <select onChange={onExtensionChange} value={fileExt}>
              <option value="png">PNG</option>
              <option value="jpeg">JPEG</option>
              <option value="webp">WEBP</option>
            </select>
            <button onClick={onDownloadClick}>Download</button>
          </div>
          <div ref={ref} />
        </div>
      </div>
    </div>
  );
};

export default Media;
