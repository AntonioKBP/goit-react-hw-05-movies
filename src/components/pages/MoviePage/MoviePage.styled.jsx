import styled from 'styled-components';

export const MainContainer = styled.div``;
export const SecondaryContainer = styled.div`
  display: flex;
`;
export const GoBackBtn = styled.button`
  align-items: center;
  appearance: none;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    #5adaff 0,
    #5468ff 100%
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
  margin-top: 10px;

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

export const FilmPosterContainer = styled.div`
  margin-right: 10px;
`;
export const FilmPoster = styled.img`
  padding: 5px;
  border-radius: 4px;
  box-shadow: rgb(106 74 74 / 16%) 0px 1px 4px;
  width: 100%;
  margin-right: 10px;
`;
export const FilmInformationContainer = styled.div`
  width: 380px;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background-color: turquoise;
`;
export const FilmTitle = styled.h2`
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 15px;
`;
export const SecondFilmTitle = styled.h3`
  margin: 0 auto;
  margin-bottom: 20px;
`;
export const FilmInfo = styled.p`
  margin-bottom: 20px;
  margin: 0 auto;
  padding: 5px;
`;
export const AddInfo = styled.p``;
export const AddInfoList = styled.ul``;
export const AddInfoItem = styled.ul``;
