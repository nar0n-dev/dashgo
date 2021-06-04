import { Box, Flex, Heading, Icon, Button, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from "@chakra-ui/react";

import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
    return (
        <Box>
            <Header />
            <Flex
              w='100%'
              my='6'
              maxWidth={1480}
              mx='auto'
              px='6'
            >
                <Sidebar />

                <Box
                  flex='1'
                  borderRadius={8}
                  bg='gray.800'
                  p='8'
                >
                    <Flex
                      mb='8'
                      justifyContent='space-between'
                      align='center'
                    >
                        <Heading
                          size='lg'
                          fontWeight='normal'
                        >
                            Users
                        </Heading>

                        <Button
                          as='a'
                          size='sm'
                          fontSize='sm'
                          colorScheme='pink'
                          leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                        >
                            New user
                        </Button>
                    </Flex>
                
                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' width='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>
                                    User
                                </Th>
                                <Th>
                                    Register Date
                                </Th>
                                <Th w='8'>

                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px='6' color='gray.300' width='8'>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Natan Cardoso</Text>
                                        <Text fontSize='sm' color='gray.300'>natanscardoso@outlook.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text>02 de Junho, 2021</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Box>
                                        <Button
                                            as='a'
                                            size='sm'
                                            fontSize='sm'
                                            colorScheme='purple'
                                            leftIcon={<Icon as={RiPencilLine} fontSize='16'/>}
                                        >
                                            Edit
                                        </Button>
                                    </Box>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
            
        </Box>
    )
}