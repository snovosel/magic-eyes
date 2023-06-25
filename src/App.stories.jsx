import { Input } from '@chakra-ui/react';

import Eyes from './Eyes';

const meta = {
  component: Eyes,
};

export default meta;

export const Primary = {
  render: () => <Eyes />,
};

export const WithInput = {
  render: () => (
    <Eyes>
        <Input fontSize="1rem" borderRadius="5px" mt="25px" height="35px" w='17rem' />
    </Eyes>
  )
}