export const useSortItem = (currentList, activeItem, statusToggleFields) => {
  const newList = [...currentList];
  const { toggleName, toggleRate, toggleLoan } = statusToggleFields;

  const sortListByName = list => {
    return list.sort((a, b) =>
      toggleName
        ? a.name && a.name.localeCompare(b.name)
        : b.name && b.name.localeCompare(a.name),
    );
  };

  const sortListByInterest = list => {
    return list.sort((a, b) =>
      toggleRate ? a.interest - b.interest : b.interest - a.interest,
    );
  };

  const sortListByLoan = list => {
    return list.sort((a, b) =>
      toggleLoan ? a.maxLoan - b.maxLoan : b.maxLoan - a.maxLoan,
    );
  };

  let sortItemList = null;

  switch (activeItem) {
    case 'name': {
      sortItemList = sortListByName(newList);
      break;
    }
    case 'interest': {
      sortItemList = sortListByInterest(newList);
      break;
    }
    case 'maxLoan': {
      sortItemList = sortListByLoan(newList);
      break;
    }
    default:
      return newList;
  }

  return sortItemList;
};
