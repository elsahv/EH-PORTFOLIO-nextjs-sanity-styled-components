import React from "react";
import { sanityClient, urlFor } from "../client";
import styled from "styled-components";

//* PORTFOLIO STYLES

const Wrapper = styled.div`
  // background: green;
  padding: 20px 70px 0 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4em;

  a {
    color: #000;
    text-decoration: none;
  }

  @media only screen and (max-width: 1024px) {
    padding: 0 30px 0px 10px;
    grid-gap: 1em;
  }

  @media only screen and (max-width: 531px) {
    padding: 20px 0;
    margin: 30px 10px;
  }
`;

const PortfolioDescription = styled.div`
  // background: pink;
  margin-top: 100px;
  padding-left: 55px;
  display: flex;

  @media only screen and (max-width: 1024px) {
    padding-left: 15px;
    padding-bottom: 5px;
  }
`;

const PortfolioTitle = styled.h2`
  font-size: 30px;
  @media only screen and (max-width: 1024px) {
    font-size: 25px;
  }
`;

const PortfolioTagline = styled.p`
  font-size: 20px;
  padding-top: 9px;
  padding-left: 8px;
  font-weight: 700;
  @media only screen and (max-width: 1024px) {
    font-size: 18px;
    padding-top: 7px;
  }
`;

export const Website = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  // margin: 40px auto;

  &:hover {
    opacity: 0.8;
  }
  a {
    color: #000;
  }

  @media only screen and (max-width: 834px) {
    margin-right: 25px;
  }

  @media only screen and (max-width: 600px) {
    margin-right: 15px;
  }
`;
export const TopContent = styled.div`
  background: teal;
  border-top: solid 1px black;
  border-left: solid 1px black;
  border-right: solid 1px black;
  padding: 15px 20px 15px;
`;

export const WebsiteTitle = styled.h3`
  font-size: 25px;
  color: #000;
  padding: 3px 0;

  &:hover {
    transition: 1s;
    color: aquamarine;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 22px;
  }
`;

export const WebsiteDescription = styled.span`
  font-size: 18px;
  text-align: center;
  color: #000;
`;

export const ImageScreenshot = styled.div`
  .website-screenshot {
    border: solid 2px black;
    border-radius: 5px;

    @media only screen and (max-width: 1024px) {
      height: 300px;
    }
  }
  }
`;
const mindmaps = ({ posts }) => {
  return (
    <>
      {
        //todo/* PORTFOLIO */
        // FILTER BY CATEGORES: WTBH, JUNGLE, ALL
      }
      <PortfolioDescription id="portfolio">
        <PortfolioTitle>Portfolio</PortfolioTitle>
        <PortfolioTagline>-Some featured websites</PortfolioTagline>
      </PortfolioDescription>
      <Wrapper>
        {posts &&
          posts.map((post, index) => (
            <span key={index}>
              <a target="_blank" href={post.projectLink} rel="noreferrer">
                <Website>
                  <TopContent>
                    <WebsiteTitle>{post.websiteTitle}</WebsiteTitle>
                    <WebsiteDescription>-{post.description}</WebsiteDescription>
                  </TopContent>

                  <ImageScreenshot>
                    <img
                      width="100%"
                      height="100%"
                      className="website-screenshot"
                      src={urlFor(post.websiteImg)}
                      alt=""
                    />
                  </ImageScreenshot>
                </Website>
              </a>
            </span>
          ))}
      </Wrapper>
    </>
  );
};

export default mindmaps;

export const getServerSideProps = async () => {
  const query = '*[_type == "websites"] | order(_createdAt asc)';
  const posts = await sanityClient.fetch(query);
  if (!posts.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts,
      },
    };
  }
};