import { Button } from './NotFoundPage.style';
import { SectionWrap } from 'UI';

const NotFoundPage = ({ onGoMainPage }) => {
  return (
    <SectionWrap>
      <h2>404. Page not found</h2>
      <Button onClick={onGoMainPage}>Go to main page</Button>
    </SectionWrap>
  );
};

export default NotFoundPage;
