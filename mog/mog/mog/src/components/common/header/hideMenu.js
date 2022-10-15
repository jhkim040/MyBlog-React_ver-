import styled from "styled-components";
import HideMenuImg from "../../../images/headerImages/hideMenu_icon.png";
import { useContext, useCallback, useState } from "react";
import { HIDE_MENU, OPEN_MENU, Context } from "../context/context";

const HideMenu = () => {
  const { state, dispatch } = useContext(Context);

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
      <HideMenuIcon onClick={onClickMenu} />
    </>
  );
};
export default HideMenu;

const HideMenuIcon = styled.div`
  width: 2rem;
  height: 100%;
  background: url(${HideMenuImg}) no-repeat center center;
  background-size: contain;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    opacity: 0.6;
  }
`;
