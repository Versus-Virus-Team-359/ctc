import styled from '@emotion/styled';

const Header = styled.div`
    padding: 1em;
    background-color: #272d38;
    box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);

    @media (min-width: 320px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 0 auto;
    }
    
    @media (min-width: 1025px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export default Header;
