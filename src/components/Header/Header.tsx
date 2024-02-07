import { 
  Center,
  ChakraProvider,
  Heading
} from '@chakra-ui/react'

export const Header  = () => {
  return(
    
    <ChakraProvider>
    
      <Center  marginBottom='30px' marginTop='30px'>
    
        <Heading as='h2' size='2xl' >
          DIO BANK
        </Heading>
    
      </Center>
    
    </ChakraProvider>

  )
}