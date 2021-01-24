import React, { useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Routes } from 'constant';

const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand tag={Link} to="/">PresupuestoWeb</NavbarBrand>
          <NavbarToggler onClick={() => setCollapsed(!collapsed)} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Iniciar Sesion</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to={Routes.LIST_CUSTOMER}>Clientes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to={Routes.LIST_BUDGET}>Presupuestos</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavMenu;
