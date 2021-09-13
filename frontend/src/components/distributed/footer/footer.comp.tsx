// pkgs:
import React from 'react';
import { VFC } from 'react';
import { Container } from 'react-bootstrap';

// utils:
import './style.sass';
import { FooterInterface } from '../../../common/interfaces/comps/footer.interface';

// comps:

// component>>>
const Footer: VFC<FooterInterface> = ({ expanded }) => {
  return (
    <footer className="default-footer">
      <Container fluid={expanded}>
        <p className="author">
          Built by{' '}
          <a href="https://github.com/muhadel" target="_blank noopener noreferer">
            @muhadel
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
