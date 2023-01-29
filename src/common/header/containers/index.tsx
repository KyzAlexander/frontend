import React, { useEffect, useState, useContext } from "react";
import Header from "../components";
import { cartContext } from "@common/contexts/cartContext/components";
import { IHeaderContainerProps } from "../interfaces";
import { HEADER_THEME } from "../constants";

const HeaderContainer: React.FC<IHeaderContainerProps> = ({
  defaultTheme,
  isScrolled,
}) => {
  const colorSwitchPosition = 10;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerTheme, setHeaderTheme] = useState(defaultTheme);
  const cartData = useContext(cartContext);

  console.log(cartData.cartContextValue);

  const menuToggleHandler = () => {
    setIsMenuOpen(!isMenuOpen);
    if (window.scrollY < colorSwitchPosition) {
      const currentTheme = isMenuOpen ? defaultTheme : HEADER_THEME.white;
      setHeaderTheme(currentTheme);
    }
  };

  const pageScrollHandler = () => {
    const currentTheme =
      window.scrollY > colorSwitchPosition ? HEADER_THEME.white : defaultTheme;
    setHeaderTheme(currentTheme);
  };

  useEffect(() => {
    if (isScrolled) {
      window.addEventListener("scroll", pageScrollHandler);
    }
  });

  return (
    <Header
      isMenuOpen={isMenuOpen}
      headerTheme={headerTheme}
      menuToggleHandler={menuToggleHandler}
    />
  );
};

export default HeaderContainer;
