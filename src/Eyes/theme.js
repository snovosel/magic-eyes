import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const helpers = createMultiStyleConfigHelpers(['face', 'eye', 'pupil'])

const MagicEyes = helpers.defineMultiStyleConfig({
    baseStyle: {
      face: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      eye: {
        borderRadius: '50%',
        backgroundColor: 'white',
        border: '0.5px solid black',
      },
      pupil: {
        borderRadius: '50%',
        backgroundColor: 'black',
      },
    },
    sizes: {
      sm: {
        face: {
            width: '48rem',
            height: '64rem',
        },
        eye: {
            width: '24rem',
            height: '100%'
        },
        pupil: {},
      },
      md: {
        face: {},
        eye: {},
        pupil: {},
      },
    },
    variants: {},
    defaultProps: {
      size: 'md',
    },
  })

  export default MagicEyes;