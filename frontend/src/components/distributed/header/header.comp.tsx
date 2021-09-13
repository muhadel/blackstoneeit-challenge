// pkgs:
import { VFC } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// utils:
import './style.sass';
import { HeaderInterface } from '../../../common/interfaces/comps/header.interface';

// comps:

// component>>>
const Header: VFC<HeaderInterface> = ({ expanded }) => {
  return (
    // depending on {expanded} so wether to view a default header or the minimal one.
    <header className="default-header">
      <Container fluid={expanded} style={{ height: `inherit` }}>
        <div className="header-wrapper">
          <section className="left-wing">
            <div className="logo">
              <Link to="/"></Link>
            </div>
          </section>
          <section className="right-wing"></section>
        </div>
      </Container>
    </header>
  );
};

export default Header;
