import { useContext, useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import HideMenuImg from "../../../images/headerImages/hideMenu_icon.png";
import { HIDE_MENU, OPEN_MENU, Context } from "../../common/context/context";

const PublishHideMenu = () => {
  const { state, dispatch } = useContext(Context);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <>
        <PublishButtonWrap onClick={onClickMenu}>PUBLISH</PublishButtonWrap>
      </>
    </>
  );
};
export default PublishHideMenu;

const PublishButtonWrap = styled.div`
  /* width: 2rem;
    height: 100%;
    background: url(${HideMenuImg}) no-repeat center center;
    background-size: contain;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
        opacity: 0.6;
    } */
  width: 6.25rem;
  height: 1.5rem;
  border-radius: 0.3125rem;
  font-size: 1.6rem;
  font-family: BAUHS93;
  font-weight: bold;
  color: rgb(102, 100, 255);
  background-color: #fff;
  transition: 0.1s;
  cursor: pointer;
  border: 2px solid rgb(102, 100, 255);
  text-align: center;
  line-height: 1.5rem;
  margin-top: 0.5rem;
  margin-right: 1rem;
  padding: 0.5rem;
  &:hover {
    color: #fff;
    background-color: rgb(102, 100, 255);
  }
`;
