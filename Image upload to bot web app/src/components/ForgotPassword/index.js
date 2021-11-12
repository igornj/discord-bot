/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  Title,
  Paragraph,
  Paragraph2,
  Form,
  Input,
  Label,
  Button,
  Button2,
} from './styled';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../Loading';
import { useAuth } from '../../Context/AuthContext';

export default function ForgotPassword() {
  const [email, setEmail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);

  const { forgotPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await forgotPassword(email);
      setIsLoading(false);
      setStatus(true);
    } catch (error) {
      toast.error('Ocorreu um erro ao tentar resetar sua senha');
      setIsLoading(false);
      setStatus(false);
    }
  };

  const { currentUser } = useAuth();
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      <Link to="/login">
        <Title>Upper Moments</Title>
      </Link>
      <Paragraph>Informe seu e-mail abaixo</Paragraph>
      <Container>
        <Form method="POST" onSubmit={handleSubmit}>
          <Label>Email:</Label>
          <Input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />

          <Button type="submit">Resetar senha</Button>
          {status ? (
            <Paragraph>Cheque seu e-mail para resetar sua senha</Paragraph>
          ) : (
            <></>
          )}
        </Form>
      </Container>
    </>
  );
}
