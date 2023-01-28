import styled from 'styled-components';

export const SearchForm = styled.form`
  background-color: #8d9ac7;
  justify-content: center;
  display: flex;
  padding: 20px;

  color: antiquewhite;
  text-decoration-color: antiquewhite;
  width: 100%;
`;
export const SearchFormInput = styled.input`
  height: 24px;
  border-radius: 12px;
  background-color: #eeeeee;
  margin-right: 10px;
  transition: border-radius 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:hover {
    border-radius: 4px;
  }
`;
export const SearchFormBtn = styled.button`
  align-items: center;
  appearance: none;
  margin-bottom: 10px;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    #c0d0d5 0,
    #6b79e0 100%
  );
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  height: 30px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;

  :focus {
    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  }

  :hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  :active {
    box-shadow: #3c4fe0 0 3px 7px inset;
    transform: translateY(2px);
  }
`;
