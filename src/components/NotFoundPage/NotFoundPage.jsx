import img from '../images/Screenshot_42.png';
import {
  NotFoundContainer,
  NotFoundText,
  NotFoundImg,
} from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundText>Page Not Found 404</NotFoundText>
      <NotFoundImg src={img} alt="" srcset="" />
    </NotFoundContainer>
  );
};

export default NotFoundPage;
