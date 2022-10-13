import { Container } from "./Layout.styled";
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default Layout;

Layout.propType = {
    children: PropTypes.node
}