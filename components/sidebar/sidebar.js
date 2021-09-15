import Image from "next/image";
import { default as Link, default as NextLink } from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { data } from "../../utilites/data";
import icon from "../../utilites/images/Mask Group.svg";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  const router = useRouter();
  console.log(router.pathname);
  const currentPath = router.pathname;
  return (
    <div className={`${styles.maindiv} vh-100 position-relative`}>
      <div className={`${styles.main} `}>
        <NextLink href="/">
          <div className={`${styles.oneTap} mt-4 container`}>
            <Image src={icon} alt="icon" />
          </div>
        </NextLink>

        <ul
          className={`${styles.sideBarLogo} navbar-nav container cursor-poiter`}
        >
          {data.map((logo) => (
            <Link
              href={logo.link}
              key={logo.id}
              className={`nav-item `}
              passHref
            >
              <div
                className={`${
                  currentPath === logo.link ? `${styles.fullBtnActive} ` : ``
                } ${styles.fullBtn} d-flex align-items-center my-2 ms-4`}
              >
                <a className="me-3 fs-16 mt-1">
                  <Image src={logo.logo} height="20" width="20" alt="logo" />
                </a>

                <a className={`${styles.singleLogo} fs-16 `}>{logo.name}</a>
              </div>
            </Link>
          ))}
        </ul>
        <div className={`${styles.upgrade}`}>
          <div className={`${styles.btn} py-2 mt-3 bg-white`}>
            <span>
              <BsStarFill className="me-2 fs-25" />
            </span>
            <Link href="/cards" className="fs-18">
              UPGRADE NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
