import {
  Center,
  ChakraProvider,
  Heading,
  Highlight
} from '@chakra-ui/react'

export const Footer  = () => {
  return(
    <ChakraProvider>

      <Center  marginBottom='30px'>

        <Heading as='h3' size='lg'>
          Desafio DIO  - React/Typescript
        </Heading>

      </Center>

      <Center marginBottom='30px'>

        <Highlight query='Dionisio Jr.' styles={{ px: '0.8', py: '0.1', rounded: 'full', bg: '#2077C4' }}>
          Developed by Dionisio Jr.
        </Highlight>

      </Center>

    </ChakraProvider>
  )
}
