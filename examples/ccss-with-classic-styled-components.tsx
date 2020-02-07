// Classic way, with CCSS
const HeaderWrapper = styled.header({
    p: 1,
    d: 'f'
})

const List = styled.ul({
    lstST: 'n'
})

const ListItem = styled.li({
    fs: 10
})

const Header = () => (
    <HeaderWrapper>
        <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
        </List>
    </HeaderWrapper>
)
