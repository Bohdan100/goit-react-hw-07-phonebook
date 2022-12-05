import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import { ContactsList } from './Contacts.styled';
import { ContactsItem } from './ContactsItem';
import { selectContacts } from 'redux/selectors';
import { Loader } from './Loader';

export const Contacts = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <b>{error}</b>}
      <ContactsList>
        {items.length > 0 &&
          items.map(({ id, name, phone }) => (
            <ContactsItem key={id} id={id} name={name} number={phone} />
          ))}
      </ContactsList>
    </>
  );
};
