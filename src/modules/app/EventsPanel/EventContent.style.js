import styled from "styled-components";

const Title = styled.h1`
  font-family: ${props => props.theme.serif};
  font-size: 3.6rem;
  line-height: 1.4;
  margin-top: 45px;
  margin-bottom: 20px;
  @media (max-width: 450px) {
    font-size: 2.7rem;
    margin-top: 20px;
  }
`;

const SubTitle = styled.h2`
  font-family: ${props => props.theme.serif};
  font-size: 2.4rem;
  line-height: 1.1;
  margin-bottom: 15px;
  color: black;
`;

const Detail = styled.div`
  margin-top: 15px;
  padding-left: 32px;
  position: relative;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  max-height: 20px;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  left: 0;

  svg {
    height: 100%;
    width: 100%;
  }
`;

const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  margin: 30px 0;
`;

const Description = styled.div`line-height: 1.6;`;

export {
  Title,
  SubTitle,
  Detail,
  Icon,
  Divider,
  Description
};
