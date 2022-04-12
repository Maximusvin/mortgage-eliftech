import { LoaderUI } from 'UI/LoaderUI';
import {
  Item,
  ItemTopWrap,
  ItemBottomWrap,
  Id,
  BankNameStatus,
  Price,
  LoaderWrap,
  CloseButton,
} from './Skeleton.style';

const skeletonItem = Array(5).fill(0);

export const Skeleton = () => {
  return (
    <ul>
      {skeletonItem.map((item, idx) => (
        <Item key={idx}>
          <ItemTopWrap />
          <Id />
          <ItemBottomWrap>
            <BankNameStatus />
            <Price />
          </ItemBottomWrap>

          <CloseButton />

          <LoaderWrap>
            <LoaderUI />
          </LoaderWrap>
        </Item>
      ))}
    </ul>
  );
};
