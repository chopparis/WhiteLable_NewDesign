import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import request from "../../../utils/request";
import MenuItem from './MenuItem';
import SubMenuItem from './SubMenuItem';
import { connect } from "react-redux";
import { useRouter } from "next/router";
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import PubSub from 'pubsub-js';

const MenuContainer = (props) => {
  const router = useRouter();
  // const menuList = useSelector(state => state.StaticDataReducer.menuList);
  //const temList = [...menuList];

  // const filterdList = temList && temList.filter(function (e) { return e.showInMainMenu == true });
  // console.log(filterdList , "___filterdListfilterdListfilterdList");


  // const [showSubMenu, setSubMenu] = useState(false);
  // const [showMoreGames, setMoreGames] = useState(false);
  const [filterdList, setFilterdList] = useState([])
  const [subMenuArr, setSubMenuItems] = useState([]);
  const [leftArrow, setLeftArrow] = useState(true);
  const [rightArrow, setRightArrow] = useState(false);
  const [colorIndex, setColorIndex] = useState();
  const [hasScroll, setHasScoll] = useState(false);
  const [subMenuColorIndex, setSubMenuColorIndex] = useState();
  const phoneInputRef = React.useRef(null);

  //const [loginStatus, setloginStatus] = useState(false);



  // const validateSession = async () => {
  //   const isValidSession = await request(`/api/player/validateSession`, {});
  //   if (isValidSession && isValidSession.result && isValidSession.result.is_valid) {
  //     return true;
  //   } else {
  //     //console.log(isValidSession , "____Side_---isValidSession" , isValidSession.status)
  //     return false;
  //   }

  // }



  useEffect(() => {
    if (props.playerInfo && props.playerInfo.playerLogin) {
      createMenuItems([...props.menuList], true);
    } else {
      createMenuItems([...props.menuList], false);
    }
  }, [props.playerInfo])


  const createMenuItems = (menuItems, isPlayerActive) => {

    const filterdList = menuItems && menuItems.filter(function (e) { return e.showInMainMenu == true });

    if (isPlayerActive) {
      // console.log(filterdList , "_______--onLoginSucssesonLoginSucsses")
      setFilterdList(filterdList);
    } else {
      //--removing faviourats tab when user is not logedin
      let tempList = [...filterdList];
      let indx = tempList.findIndex(x => x.permalink == "favourites");
      tempList.splice(indx, 1);
      setFilterdList(tempList);
    }


    if (router.query.index != undefined && router.query.index.length > 0) {
      //---index of 0 always mainMenu
      let currentManuName = router.query.index[0];

      // let menuObj = filterdList.find(o => o.id == router.query.index[1]);
      let menuObj = filterdList.find(o => o.permalink == currentManuName);
      if (menuObj && menuObj.subMenu) {
        //  console.log(menuObj['subMenu'] , "_________--subMenu");
        setSubMenuItems(menuObj['subMenu']);
      }
    }

  }

  useEffect(()=>{
    let tempList = [...props.menuList];
    createMenuItems(tempList, props.isPlayerActive);
  },[props.menuList , props.isPlayerActive , router]);

  useEffect(async () => {
    //  console.log( "<<_________obj.permalink_>>" , router.query.index , "____---router.query" , router.query , "_______" , router);
    //let isUserActive = await validateSession();
    //let tempList = [...props.menuList];
   // createMenuItems(tempList, isUserActive);
    // setTimeout(() => {
    //   if(phoneInputRef && phoneInputRef.current && phoneInputRef.current.scrollWidth != null ){
    //     setHasScoll(phoneInputRef.current.scrollWidth > phoneInputRef.current.clientWidth);
    //   }
    // }, 500)

  }, [props.menuList, router])


  const onLeftMove = (e) => {

    e.preventDefault();
    phoneInputRef.current.scrollLeft -= 500;
  }

  const handleScroll = (e) => {
    if ((phoneInputRef.current.scrollLeft + phoneInputRef.current.clientWidth) == phoneInputRef.current.scrollWidth) {

      setRightArrow(true);
      setLeftArrow(false);

    }

    if (phoneInputRef.current.scrollLeft == 0) {
      setLeftArrow(true);
      setRightArrow(false);
    }
  }

  const onRightMove = (e) => {
    e.preventDefault();
    phoneInputRef.current.scrollLeft += 500;
  }

  const onSelectedSubMenuItem = (menuItem, selectedIndex) => {
    setSubMenuColorIndex(selectedIndex)
  }


  return (
    <div className={styles.menuHolder}>
      <div className={styles.mainMenuContainer}>

        {hasScroll ?

          <div className={styles.navHolder}>

            <div disabled className={`${leftArrow ? styles.disaNavBtn : styles.enabNavBtn}  ${styles.menu_navBtns}`} onClick={onLeftMove}><ArrowBackSharpIcon fontSize="inherit" /></div>
            <div className={`${rightArrow ? styles.disaNavBtn : styles.enabNavBtn}  ${styles.menu_navBtns}`} onClick={onRightMove}><ArrowForwardSharpIcon fontSize="inherit" /></div>
          </div> : ""}

        <div className={`${styles.menuContainer} ${hasScroll ? styles.setDisplay : styles.menuContainer}  `} ref={phoneInputRef} onScroll={handleScroll}>
          {filterdList && filterdList.map((obj, indx) => obj.showInMainMenu ? <MenuItem key={indx} cindex={colorIndex} temIndex={indx} propObj={obj} routPath={router.query.index} /> : "")}
        </div>
        {/* {console.log(subMenuArr.length , "____--subMenuArr")} */}
        {subMenuArr && subMenuArr.length > 0 ? <div className={styles.subMenuContainer}>
          {subMenuArr && subMenuArr.map((obj, indx) => <SubMenuItem key={indx} propObj={obj} routPath={router.query.index} cindex={subMenuColorIndex} temIndex={indx} onSelectedSubMenuItem={onSelectedSubMenuItem} />)}

          {/* {subMenuArr && subMenuArr.map((obj, indx) => <SubMenuItem key={indx} propObj={obj} routPath={router.query.index} cindex={subMenuColorIndex} temIndex={indx} onSelectedSubMenuItem={onSelectedSubMenuItem} />)} */}
        </div> : ""}



      </div></div>

  );
}

const mapStateToProps = (state) => {
  return {
    menuList: state.StaticDataReducer.menuList,
    playerInfo: state.StaticDataReducer.playerInfo,
    isPlayerActive : state.StaticDataReducer.isPlayerActive
  };
};

// export default MenuContainer;
export default connect(mapStateToProps)(MenuContainer)