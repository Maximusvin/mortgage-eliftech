// import { ProductForm, Statistics, ProductList, Skeleton } from 'components';
import { Wrapper } from './Video.style';

export const Video = () => (
  <Wrapper>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/qfQuw0Mid5s"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </Wrapper>
);
