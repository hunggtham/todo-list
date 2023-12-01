import styled, { css } from "styled-components";

export const theme = {
  primaryColor: "#333",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  backgroundColor: "#fff",
  borderColor: "#ccc",
  buttonBgColor: "#0f3460",
  buttonTextColor: "#ffffff",
};
export const BoxContainer = styled.div`
  width: 400px;
  margin: 20px auto;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 20px 5px;
  border: 2px solid #3b3737;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const ButtonTrigger = styled.button`
  border: 0;
  border-radius: 5px;
  background-color: #0f3460;
  color: #ffffff;
  padding: 10px 15px;
  cursor: pointer;
`;
export const ButtonDelete = styled.button`
  border: 0;
  border-radius: 5px;
  background-color: #ef5350; /* Use a red color for delete button */
  color: #fff;
  padding: 8px 12px;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  width: 300px;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
`;

export const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
  color: #333; /* Darken the title color for better readability */
  font-size: 24px; /* Increase font size for emphasis */
  margin-bottom: 10px; /* Add some spacing below the title */
`;

export const StyleLi = styled.li`
  ${({ completed }) => css`
    font: 16px;
    list-style: none;
    margin: 20px 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${completed &&
    css`
      text-decoration: line-through;
      background-color: #e0f7fa;
    `}
    :hover {
      cursor: pointer;
    }
  `}
`;

export const StyledTypography = styled.span`
  font-family: times, Times New Roman, times-roman, georgia, serif;
  color: #444;
  margin: 0;
  padding: 0px 5px 6px 10px;
  font-size: 30px;
  line-height: 44px;
  letter-spacing: -2px;
  font-weight: bold;
`;
