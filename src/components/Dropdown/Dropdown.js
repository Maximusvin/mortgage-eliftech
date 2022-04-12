import { useState, useRef, useEffect } from 'react';
import { GoTriangleDown } from 'react-icons/go';
import {
  PopapWrap,
  PopapActiveItem,
  Popap,
  PopapList,
  PopapItem,
} from './Dropdown.style';

export const Dropdown = ({ banksList, getActiveBank, activeBank }) => {
  const [showPopap, setShowPopap] = useState(false);
  const popapRef = useRef();

  const handleOutsideClick = e => {
    const path =
      e.path ||
      (e.composedPath && e.composedPath()) ||
      e.composedPath(e.target);
    if (!path.includes(popapRef.current)) {
      setShowPopap(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const getActiveItem = item => {
    setShowPopap(!showPopap);
    localStorage.setItem('activeBank', JSON.stringify(item));
    getActiveBank(item);
  };

  const toggleVisiblePopap = () => {
    setShowPopap(!showPopap);
  };

  const styleIcon = () => {
    return {
      transform: showPopap ? 'rotate(180deg)' : null,
      fontSize: '12px',
      marginLeft: '3px',
    };
  };

  return (
    <PopapWrap ref={popapRef} id="popapWrap">
      <PopapActiveItem onClick={toggleVisiblePopap}>
        {activeBank ? activeBank.name : 'Choose a bank from the list'}
        <GoTriangleDown style={styleIcon()} />
      </PopapActiveItem>

      {showPopap && (
        <Popap>
          <PopapList>
            {banksList.map(item => (
              <PopapItem
                key={item.id}
                onClick={() => getActiveItem(item)}
                active={activeBank && activeBank.name === item.name ? true : ''}
              >
                {item.name}
              </PopapItem>
            ))}
          </PopapList>
        </Popap>
      )}
    </PopapWrap>
  );
};
