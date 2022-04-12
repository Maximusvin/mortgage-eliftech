import { Wrapper, Link } from './Footer.style';

export const Footer = () => {
  return (
    <Wrapper>
      <p>
        2022 | All Rights Reserved |{' '}
        <Link href="https://www.eliftech.com/">eliftech.com</Link> | Designed by{' '}
        <Link href="https://www.linkedin.com/in/maxim-kozlov/">
          Maksym Kozlov
        </Link>
      </p>
    </Wrapper>
  );
};
