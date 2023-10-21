import NavBar from './NavBar'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    background-color: #0047BA;
    padding: .7em 1.5em;
    color: #fff;
`

const LogoDunder = styled.div`
    font-size: 2em;
    font-weight: bold;
`

function Header() {
    return (
        <HeaderContainer>
            <LogoDunder>
                Dundler Miffin
            </LogoDunder>
            <NavBar />
        </HeaderContainer>

    )

}

export default Header