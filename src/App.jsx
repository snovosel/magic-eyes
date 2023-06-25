import { useState } from 'react';

import { Input } from '@chakra-ui/react'

import Eyes from './Eyes';

function App() {
  return (
    <>
      <Eyes>
        <Input fontSize="1rem" borderRadius="5px" mt="25px" height="35px" w='17rem' />
      </Eyes>
    </>
  );
}

export default App;
