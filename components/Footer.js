import styled from "styled-components";
import About from "./About";
import Contact from "./Contact";

const Footer = styled.footer`
  // background: teal;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  padding: 5px 10px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const FooterSection = () => {
  return <Footer>- Copyright @2022</Footer>;
};

export default FooterSection;
