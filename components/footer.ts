import styled from '@emotion/styled';

const Footer = styled.div`
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 2%;

    @media (min-width: 320px) and (max-width: 480px) {
        position: relative;
        padding-top: 1em;
        padding-bottom: 1em;
    }
`;

export default Footer;
