import { Box, Flex } from "@chakra-ui/react";

const Location = () => {
    return (
        <>
        <Box bg="#E5E5E5" p={4} >
            <Flex justifyContent="center" alignItems='center'>
             <Box as="svg" viewBox="0 0 24 24" width="30px" height="30px" fill="black">
            <path
                d="M12 2C8.13401 2 5 5.13401 5 9C5 11.3784 6.4183 14.0922 8.52618 17.1505C9.48943 18.543 10.4093 19.6858 11.0774 20.4574C11.3566 20.7708 11.6305 21.0532 12 21.0532C12.3695 21.0532 12.6434 20.7708 12.9226 20.4574C13.5907 19.6858 14.5106 18.543 15.4738 17.1505C17.5817 14.0922 19 11.3784 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z"
            />
            </Box>
            <a href="" style={{color:"black"}}>
                We're evolving. SkinStore is becoming Dermstore, continue your skin health journey with the premier skin care authority.
            </a>

            </Flex>
        
        </Box>
        </>
    )
}
export default Location