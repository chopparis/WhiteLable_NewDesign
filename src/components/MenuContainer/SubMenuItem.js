import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import PubSub from 'pubsub-js';
import Link from 'next/link';
import { useRouter } from "next/router";

const SubMenuItem = (props) => {

  const router = useRouter();

  // const onPageOpen = (e) => {
  //   PubSub.publish("OnMenuSelection", e);
  //   // router.push("/games/" + props.propObj.permalink)
  // }

  const getRoutePath = () => {
    // console.log(props.routPath , "__props.routPath");
    if (props.routPath != undefined && props.routPath.length > 0) {
      // console.log(props.routPath[0] , "__props.routPath");
      return props.routPath[0]

    } else {
      return '';
    }
  }

//   useEffect(() => {

// }, [ router])

  return (
    <div className={`${styles.subMenuItem} ${(getRoutePath() == props.propObj.permalink) ? styles.set_subMenuBgColor : styles.subMenuItem}  `} >
       <div className={styles.itemName} >
      <ul>
          <li>
            {/* <Link href={"/games/" + props.propObj.permalink}>
              <a>{props.propObj.display_name}</a>
            </Link> */}

            
<Link
            href={{
              pathname: "/games/"  + props.propObj.permalink + "/" + props.propObj.id ,
              // pathname: "/games/"  + props.propObj.permalink,
              // query: { slug: "Hello worls" },
            }}
          >
             <a>{props.propObj.display_name}</a>
          </Link>
          </li>
        </ul>
        </div>
<div className={styles.menu_devider}></div>

    </div>



  );
}

export default SubMenuItem;