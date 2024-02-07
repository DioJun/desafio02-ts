import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { Footer } from "./Footer"
import { Header } from "./Header/Header"
import { login } from '../services/login'

export const Card = ({ children }: any) => {
  return(
    <ChakraProvider>
      
      <Box minHeight='100vh' minWidth='100vh' backgroundColor='#2077C4' padding='25px'>
        <Center>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'w= '80vh'>
            
            <Header />

            <Input placeholder='Email'  marginBottom='10px'/>
            
            <Input placeholder='Senha' type='password' marginBottom='30px'/>



            <Center>
              <Button 
                bg='#2077C4' 
                color='#ffffff' 
                size='md' 
                w='40%' 
                marginBottom='30px'
                onClick={login}
                >Entrar</Button>
            </Center>
            
            <Footer />
        
          </Box>
       
        </Center>
      
      </Box>
    
    </ChakraProvider>
  )
}
