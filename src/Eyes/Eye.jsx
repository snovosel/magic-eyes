import { Box } from '@chakra-ui/react';

import Pupil from './Pupil';

const Eye = ({
    position,
    focused
}) => {
    return (
        <Box
            w="100px"
            h='130px'
            bg="white"
            borderRadius="50%"
            border="3px solid #e6e6e6"
            position="relative"
            overflow="hidden"
        >
            <Pupil focused={focused} position={position} />
        </Box>
    )
};

export default Eye;