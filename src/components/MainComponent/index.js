import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import { login } from "../../redux/actions/authActions";
import { setNav } from "../../redux/actions/navActions";

import media from "styled-media-query";
import { useSelector, useDispatch } from "react-redux";

import SettingsIcon from "../../assets/icons/settings.svg";
import Chart from "../../assets/icons/bar_chart.svg";
import Sales from "../../assets/icons/sales.svg";
import Group from "../../assets/icons/group.svg";
import Tag from "../../assets/icons/tag.svg";
import Profile from "../../assets/icons/profile.svg";

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #f7f7fc;
  flex-direction: column;
`;

const TopNavigationContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-self: flex-start;
  justify-content: center;
  align-items: center;
`;

const TopNavigation = styled.div`
  width: auto;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  border-radius: 16px;
  background-color: white;
  filter: drop-shadow(0px 8px 16px rgba(17, 17, 17, 0.04));
  padding: 5px;
`;

const NavLinks = styled(motion.div)`
  width: auto;
  padding-left: 10px;
  padding-right: 10px;
  height: auto;
  padding: 5px;
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
  text-selection: none;
  cursor: pointer;
  border-bottom: 2px solid #FFFFF;

  ${media.between("medium", "large")`
    width : 90px;
  `}

  ${media.greaterThan("large")`
    width : 150px;
  `}
`;

function MainComponent() {
  const dispatch = useDispatch();
  const [currentNav, setCurrentNav] = useState({ current_tab: "dashboard" });
  console.log(currentNav);
  const handleLogout = () => {
    dispatch(login({ authStatus: false, token: "" }));
  };

  const handleNavigationChange = (nav) => {
    setCurrentNav({ current_tab: nav });
    dispatch(setNav({ current_tab: nav }));
  };

  useEffect(() => {
    console.log("re-rendering");
    setCurrentNav({ current_tab: "dashboard" });
  }, [setCurrentNav]);

  return (
    <Container>
      <TopNavigationContainer>
        <TopNavigation>
          <NavLinks
            animate={{
              color: currentNav.current_tab === "service" ? "#5F2EEA" : "",
              borderBottom:
                currentNav.current_tab === "service"
                  ? "2px solid #5F2EEA"
                  : "2px solid #FFFFFF",
            }}
            whileHover={{
              borderBottom: "2px solid #5F2EEA",
            }}
            onClick={() => handleNavigationChange("service")}
            transition={{ duration: 0.2, ease: "linear" }}
          >
            <img
              src={SettingsIcon}
              alt=""
              style={{ width: "20px", height: "20px", margin: "2px" }}
            />
            Services
          </NavLinks>
          <NavLinks
            animate={{
              color: currentNav.current_tab === "dashboard" ? "#5F2EEA" : "",
              borderBottom:
                currentNav.current_tab === "dashboard"
                  ? "2px solid #5F2EEA"
                  : "2px solid #FFFFFF",
            }}
            transition={{ duration: 0.2, ease: "linear" }}
            onClick={() => handleNavigationChange("dashboard")}
          >
            <img
              src={Chart}
              alt=""
              style={{ width: "20px", height: "20px", margin: "2px" }}
            />
            Dashboard{" "}
          </NavLinks>
          <NavLinks
            animate={{
              color: currentNav.current_tab === "sales" ? "#5F2EEA" : "",
              borderBottom:
                currentNav.current_tab === "sales"
                  ? "2px solid #5F2EEA"
                  : "2px solid #FFFFFF",
            }}
            transition={{ duration: 0.2, ease: "linear" }}
            onClick={() => handleNavigationChange("sales")}
          >
            <img
              src={Sales}
              alt=""
              style={{ width: "20px", height: "20px", margin: "2px" }}
            />
            Sales{" "}
          </NavLinks>
          <NavLinks
            animate={{
              color: currentNav.current_tab === "clients" ? "#5F2EEA" : "",
              borderBottom:
                currentNav.current_tab === "clients"
                  ? "2px solid #5F2EEA"
                  : "2px solid #FFFFFF",
            }}
            transition={{ duration: 0.2, ease: "linear" }}
            onClick={() => handleNavigationChange("clients")}
          >
            <img
              src={Group}
              alt=""
              style={{ width: "20px", height: "20px", margin: "2px" }}
            />
            Clients{" "}
          </NavLinks>
          <NavLinks
            animate={{
              color: currentNav.current_tab === "products" ? "#5F2EEA" : "",
              borderBottom:
                currentNav.current_tab === "products"
                  ? "2px solid #5F2EEA"
                  : "2px solid #FFFFFF",
            }}
            transition={{ duration: 0.2, ease: "linear" }}
            onClick={() => handleNavigationChange("products")}
          >
            <img
              src={Tag}
              alt=""
              style={{ width: "20px", height: "20px", margin: "2px" }}
            />
            Products{" "}
          </NavLinks>
          <NavLinks
            whileHover={{
              color: "#5F2EEA",
            }}
            transition={{ duration: 0.2, ease: "linear" }}
            onClick={handleLogout}
          >
            <img
              src={Profile}
              alt=""
              style={{ width: "20px", height: "20px", margin: "2px" }}
            />
            Profile{" "}
          </NavLinks>
        </TopNavigation>
      </TopNavigationContainer>
    </Container>
  );
}

export default MainComponent;