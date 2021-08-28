/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Title, Paragraph, Container } from './styled';

export default function Form({ handleChange, handleSend }) {
  return (
    <>
      <Title>Upper Moments</Title>
      <Paragraph>Envie seus rolês abaixo</Paragraph>

      <Container>
        <form action="#" method="POST" encType="multipart/form-data">
          <input type="file" name="image" id="file" onChange={handleChange} />

          <h4>Regras</h4>
          <ul>
            <li>
              1 - Não seja babaquinha, envie somente fotos de rolês do clan 👌
            </li>
            <li>2 - Sua mãe é minha 👵</li>
          </ul>

          <Button
            type="submit"
            name="submit"
            onClick={handleSend}
            className="btn"
          >
            Enviar
          </Button>
        </form>
      </Container>
      <Paragraph>
        Sim ta uma merda ainda, porém está funcionando e em breves ficará mais
        meió. Agradeço a compreensão e VAMU CLANN!
      </Paragraph>
    </>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func,
  handleSend: PropTypes.func,
};
