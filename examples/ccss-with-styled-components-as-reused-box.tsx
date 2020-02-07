// Using a re-used Box
const Box = styled.div(ccss)

const Header = () => (
    <Box p={1} d="f" as="header">
        <Box as="ul" lstST="n">
            <Box fs={10} as="li">
                Item 1
            </Box>
            <Box fs={10} as="li">
                Item 2
            </Box>
        </Box>
    </Box>
)
