const HeaderWrapper = styled.header`
    display: flex;
    padding: 10rem;
`

const List = styled.ul`
    list-style-type: none;
`

const ListItem = styled.li`
    font-size: 10rem;
`

const Header = () => (
    <HeaderWrapper>
        <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
        </List>
    </HeaderWrapper>
)
