/* eslint-disable no-console */
import React from 'react';

import { readFiles } from './awsListObjects';

export default function Galeria() {
  readFiles()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  return (
    <>
      <h1>Fotos</h1>
    </>
  );
}
