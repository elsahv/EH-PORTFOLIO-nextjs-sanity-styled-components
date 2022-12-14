import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  // color: #000;
  // background: green;
`;

export const Form = styled.form`
  // background: green;
  padding-left: 5px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .input-fields {
    background: #fff;
    border: solid 2px gray;
    padding-left: 10px;
    padding-top: 5px;
    color: #000;
    font-size: 18px;
    &:hover {
      opacity: 0.7;
      color: aquamarine;
      transition: 1s;
      background: #0892a5;
    }
  }
  .btn {
    background: aquamarine;
    color: #000;
    width: 30%;
    padding: 0px 5px;
    margin-top: 25px;
    border: solid 1px #000;
    font-size: 17px;
    cursor: pointer;

    &:hover {
      background: #0892a5;
      color: aquamarine;
      transition: 1s;
    }
    @media only screen and (max-width: 820px) {
      font-size: 15px;
    }
    @media only screen and (max-width: 599px) {
      width: 130px;
    }
  }
`;
export const Label = styled.label`
  padding: 25px 0 5px 1px;
  font-size: 20px;
`;

export const ErrorStyles = styled.div`
  color: maroon;
  font-size: 15px;
  text-transform: lowercase;
`;

export const Input = styled.input`
  height: 50px;
  border-radius: 5px;
  width: 500px;

  @media only screen and (max-width: 820px) {
    width: 400px;
  }
  @media only screen and (max-width: 531px) {
    width: 330px;
  }
`;
export const Textarea = styled.textarea`
  height: 170px;
  border-radius: 5px;
  // margin: 40px 0;
`;

export const SuccessMessageStyles = styled.div`
  font-size: 25px;
  color: teal;
  padding: 10px;
  margin-top: 20px;
  background: aquamarine;
  border: 2px solid #0892a5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 60%;
  height: 470px;
  // opacity: 0.7;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: 420px;
    font-size: 20px;
    padding: 0 50px;
  }
  @media only screen and (max-width: 768px) {
    width: 55%;
  }

  @media only screen and (max-width: 600px) {
    width: 95%;
  }
`;

export const IconWrapper = styled.div`
  font-size: 35px;
  margin-right: 5px;
`;
