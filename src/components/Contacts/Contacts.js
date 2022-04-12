// import { ProductForm, Statistics, ProductList, Skeleton } from 'components';
import { ContactCard } from './ContactCard';
import { developers } from './developers';

import { Wrapper } from './Contacts.style';

export const Contacts = () => (
  <Wrapper>
    {developers.length > 0 &&
      developers.map(contact => <ContactCard key={contact.id} {...contact} />)}
  </Wrapper>
);
