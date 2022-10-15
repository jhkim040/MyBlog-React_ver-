import styled from "styled-components";
import hideMenuIcon from "../../../images/hideMenu_icon.png";
import { useContext, useCallback, useState, useEffect } from "react";
import { HIDE_MENU, OPEN_MENU, Context } from "../../context/context";

const HideMenu = () => {
  const { state, dispatch } = useContext(Context);

  // const [mQuery, setMQuery] = useState(window.innerWidth > 1100 ? true : false);

  // let mql = window.matchMedia("screen and (min-width:1160px)");

  // mql.onchange = useEffect(() => {
  //   (e) => {
  //     const matches = e.matches;
  //     setMQuery(matches);
  //   },
  //     [mQuery];
  // });

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const onClickMenu = useCallback(() => {
    if (isMenuOpen) {
      dispatch({
        type: HIDE_MENU,
      });
    } else {
      dispatch({
        type: OPEN_MENU,
      });
    }
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <>
      <HideMenuInner onClick={onClickMenu} />
    </>
  );
};

export default HideMenu;

const HideMenuInner = styled.div`
  width: 30px;
  height: 100%;
  background: url(${hideMenuIcon}) no-repeat center center;
  background-size: contain;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    opacity: 0.6;
  }
`;
