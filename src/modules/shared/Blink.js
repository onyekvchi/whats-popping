import styled from 'styled-components';

const Blink = styled.div`
    animation-name: blink;
    animation-duration: 2s;
    animation-iteration-count: infinite;

    @keyframes blink {
        0%, 100% {
            opacity: 1;
        }

        50% {
            opacity: 0.3;
        }
    }
`;

export default Blink;