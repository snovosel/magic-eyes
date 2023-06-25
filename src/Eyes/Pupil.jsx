import { useMemo } from 'react';
import { Box } from '@chakra-ui/react';

const Pupil = ({
    position,
    focused
}) => {

    const pupilPosition = useMemo(() => {
        if (focused) {
            return position;
        }

        return {
            left: '50%',
            bottom: '50%'
        }
    }, [focused, position]);
    
    return (
        <Box
            backgroundColor="black"
            borderRadius="50%"
            height="20%"
            width="23%"
            position="absolute"
            {...pupilPosition}
        >

        </Box>
    )
}

export default Pupil