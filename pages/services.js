/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { sanityClient, urlFor } from "../client";
import styled from "styled-components";
import { motion } from "framer-motion";

export const ToolsTitle = styled.h3`
  font-weight: bold;
  padding-left: 10px;
  padding-top: 40px;
  text-decoration: underline;
  text-align: left;
  opacity: 0.8;
  font-size: 30px;

  @media only screen and (max-width: 1024px) {
    font-size: 25px;
    padding-left: 60px;
    padding-bottom: 20px;
  }
`;

export const Tools = styled.div`
  padding: 20px 10px;
  display: flex;
  width: 100%;
  // background: orange;

  @media only screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1em;
    padding: 0 50px;
  }
`;

export const Icon = styled.div`
  background: teal;
  border: 1px solid #000;
  margin: 0 10px;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  @media only screen and (max-width: 1024px) {
    padding: 1px;
    // margin: 0 2px;

    .tool-png {
      width: 50px;
      height: 50px;
    }
  }
`;

export const IconName = styled.h4`
  margin: 0 5px;
  padding: 5px;
  font-size: 15px;
  color: #000;
  text-align: center;
  opacity: 0.7;
  @media only screen and (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const Wrapper = styled.div`
  line-height: 1.5;
  padding: 80px 20px 20px 60px;
  text-align: right;
  opacity: 0.8;

  h3 {
    font-size: 20px;
    font-weight: bold;
  }

  ul {
    margin: 25px;
    padding-bottom: 15px;
  }

  li {
    font-size: 20px;
    list-style-type: none;
    padding: 3px 0;
  }

  @media only screen and (max-width: 1024px) {
    // background: red;
    text-align: left;
    padding: 10px 25px;
    margin-top: 10px;
    margin-left: 0px;

    h3 {
      margin-top: 35px;
    }

    ul {
      // background: green;
      margin: 0;
    }

    li {
      font-size: 17px;
      padding: 10px 0 0 20px;
    }
  }

  @media only screen and (max-width: 1024px) {
    ul {
      margin: 0px 10px;
    }
    li {
      padding-left: 20px;
    }
  }

  @media only screen and (max-width: 834px) {
    padding-left: 50px;
  }

  @media only screen and (max-width: 768px) {
    padding-left: 10px;
  }

  @media only screen and (max-width: 390px) {
    h3 {
      font-size: 18px;
    }
  }
`;

export const SkillsTitle = styled.h2`
  font-weight: bold;
  padding-right: 25px;
  padding-top: 20px;
  text-decoration: underline;
  font-size: 30px;
  text-align: right;

  @media only screen and (max-width: 1024px) {
    font-size: 25px;
    padding-top: 10px;
    padding-left: 20px;
    text-align: left;
  }

  @media only screen and (max-width: 600px) {
    padding-top: 55px;
    padding-left: 20px;
    text-decoration: underline;
  }
`;

const services = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Elsa Hovey- Development/ Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <ToolsTitle>Tools Used</ToolsTitle>
        <Tools>
          {posts &&
            posts.map((post, index) => (
              <span key={index}>
                <Icon>
                  <img
                    width="80px"
                    height="80px"
                    className="tool-png"
                    src={urlFor(post.icon)}
                    alt=""
                  />
                </Icon>
                <IconName>{post.name}</IconName>
              </span>
            ))}
        </Tools>
        <Wrapper>
          <SkillsTitle id="services">Services/ Skills</SkillsTitle>
          <ul>
            <h3> {'"Website Design in code"'} </h3>
            <li>Colorful websites for creative niches and small businesses.</li>
            <li>Quick and interactive styling</li>
            <li>Effective SEO</li>
          </ul>

          <ul>
            <h3>- Content Management</h3>
            <li>
              I use React coding with Sanity.io for content writing, image
              management, and backend data storage
            </li>
            <li>
              Or if Wordpress is your thing... I also create custom themes with
              php
            </li>
            <li>
              I work one on one with customers to create the ideal website
              product
            </li>
          </ul>
        </Wrapper>
      </motion.div>
    </>
  );
};

export default services;

export const getServerSideProps = async () => {
  const query = '*[_type == "skills"]';
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
