import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSortItem } from 'hooks';
import { formatCurrency } from 'functions';
import { deleteBank, clearBankList } from 'redux/banks';
import { HiArrowNarrowDown, HiArrowNarrowUp } from 'react-icons/hi';
import { GoX } from 'react-icons/go';
import { MdEdit } from 'react-icons/md';

import { MainButton } from 'UI/ui-kit';
import {
  Wrapper,
  BanksList,
  ListItem,
  Thead,
  NameTD,
  ItemTD,
  HeadOrderTD,
  HeadItemTD,
  HeadNameTD,
  HeadNotesTD,
  NotesTD,
  OrderTD,
  ButtonWrap,
  ListItemButton,
} from './BankSettings.style';

const List = ({ item, count, onChangeItemList }) => {
  const dispatch = useDispatch();
  const { id, name, interest, loanTerm, maxLoan, minPayment, notes } = item;

  const handleDeleteItem = () => {
    dispatch(deleteBank(id));
  };

  return (
    <ListItem>
      <OrderTD>{count}</OrderTD>
      <NameTD>{name}</NameTD>
      <ItemTD>{interest} %</ItemTD>
      <ItemTD>{formatCurrency(maxLoan)}</ItemTD>
      <ItemTD>{formatCurrency(minPayment)}</ItemTD>
      <ItemTD>{loanTerm}</ItemTD>
      <NotesTD>{notes || '- - -'}</NotesTD>

      <ListItemButton right={'30px'} onClick={() => onChangeItemList(item)}>
        <MdEdit />
      </ListItemButton>
      <ListItemButton onClick={handleDeleteItem}>
        <GoX />
      </ListItemButton>
    </ListItem>
  );
};

export const BanksListComponent = ({
  banks,
  onButtonClick,
  onChangeItemList,
}) => {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState();
  const [toggleName, setToggleName] = useState(false);
  const [toggleRate, setToggleRate] = useState(false);
  const [toggleLoan, setToggleLoan] = useState(false);

  const amountOfBanks = banks.length;

  const clearList = () => {
    dispatch(clearBankList());
  };

  const statusToggleFields = {
    toggleName,
    toggleRate,
    toggleLoan,
  };

  const sortItemList = useSortItem(banks, activeItem, statusToggleFields);

  const getActiveTypeBySort = e => {
    const { name } = e.target;
    setActiveItem(name);

    switch (name) {
      case 'name': {
        setToggleName(!toggleName);
        break;
      }
      case 'interest': {
        setToggleRate(!toggleRate);
        break;
      }
      case 'maxLoan': {
        setToggleLoan(!toggleLoan);
        break;
      }
      default:
        return;
    }
  };

  return (
    <Wrapper>
      <ButtonWrap>
        {amountOfBanks > 2 && (
          <MainButton onClick={clearList} marginRight={'20px'} opacity={'50%'}>
            Clear the list
          </MainButton>
        )}
        <MainButton onClick={onButtonClick}>Create a new bank</MainButton>
      </ButtonWrap>

      <Thead>
        <HeadOrderTD>№</HeadOrderTD>
        <HeadNameTD name="name" onClick={e => getActiveTypeBySort(e)}>
          Bank name
          {toggleName ? <HiArrowNarrowDown /> : <HiArrowNarrowUp />}
        </HeadNameTD>
        <HeadItemTD name="interest" onClick={e => getActiveTypeBySort(e)}>
          Interest rate, %
          {toggleRate ? <HiArrowNarrowDown /> : <HiArrowNarrowUp />}
        </HeadItemTD>
        <HeadItemTD name="maxLoan" onClick={e => getActiveTypeBySort(e)}>
          Max loan, ${toggleLoan ? <HiArrowNarrowDown /> : <HiArrowNarrowUp />}
        </HeadItemTD>
        <HeadItemTD name="minPayment">Min payment, $</HeadItemTD>
        <HeadItemTD name="term">Loan term, month</HeadItemTD>
        <HeadNotesTD name="notes">Notes</HeadNotesTD>
      </Thead>

      <BanksList>
        {sortItemList.map((item, idx) => (
          <List
            key={item.id}
            item={item}
            count={idx + 1}
            onChangeItemList={onChangeItemList}
          />
        ))}
      </BanksList>
    </Wrapper>
  );
};
