import styled from "styled-components";

interface NavProps {
  selected: boolean;
}

export const Nav = styled("div")`
  height: 60px;
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  padding-left: 24px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  // ** Selected **
  ${(props: NavProps) => ``}

  ${props =>
    props.selected
      ? `
        background-color: #F8532BCC;
        color: white;
        font-weight: 500

      `
      : `
      background-color: white;
      &:hover{
          background-color: #fafafa;
          color: #3F404B;

      }
      
      `}
`;

export const SubContainer = styled("div")`
  display: flex;
  align-items: center;
  margin-right: 12px;
`;