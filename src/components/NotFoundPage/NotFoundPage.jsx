import img from '../images/404.jpg';
import {
  NotFoundContainer,
  NotFoundText,
  NotFoundImg,
} from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundText>Page Not Found 404</NotFoundText>
      <NotFoundImg src={img} alt="page not found" />
    </NotFoundContainer>
  );
};

export default NotFoundPage;
