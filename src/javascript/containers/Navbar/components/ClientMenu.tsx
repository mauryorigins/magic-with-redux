// ---Dependencys
import React, { useState, ReactElement } from 'react';
import { MenuFoldOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
// ---Others
import { appConfig } from 'Others/store-config';

// ---AUX COMPONENTS
interface AuxProps1 {
  currentPath: string;
}
function JustButtons(props: AuxProps1) {
  const { currentPath } = props;
  return (
    <>
      <Col xs={24} sm={24} lg={5}>
        <Link to="/">
          <div
            className={currentPath === '/' ? 'nav-btn nav-border' : 'nav-btn'}
          >
            Inicio
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} lg={5}>
        <Link to={`/input?${appConfig.productsURL}`}>
          <div
            className={
              currentPath === '/input' ? 'nav-btn nav-border' : 'nav-btn'
            }
          >
            Input Example
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} lg={5}>
        <Link to="/cards">
          <div
            className={
              currentPath === '/cards' ? 'nav-btn nav-border' : 'nav-btn'
            }
          >
            Cards Example
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} lg={5}>
        <Link to="/list">
          <div
            className={
              currentPath === '/list' ? 'nav-btn nav-border' : 'nav-btn'
            }
          >
            List Example
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} lg={5}>
        <Link to="/listContainer">
          <div
            className={
              currentPath === '/listContainer' ? 'nav-btn nav-border' : 'nav-btn'
            }
          >
            List Container Example
          </div>
        </Link>
      </Col>
    </>
  );
}
// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  isMovil: boolean;
  logo: string;
  currentPath: string;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function ClientMenu(props: Props) : ReactElement {
  const { isMovil, logo, currentPath } = props;
  const [menuVisible, setMenuVisible] = useState(false);

  function changeMenuVisibility() {
    setMenuVisible(!menuVisible);
  }
  if (isMovil)
    return (
      <Row className="nav-div">
        <Col xs={24} sm={24} lg={8}>
          <Link to="/">
            <div className="to-home">
              <img src={logo} alt="Shelly" width="100%" />
            </div>
          </Link>
        </Col>
        <Col xs={24} sm={24} lg={16}>
          <Row>
            <Col xs={24} sm={24} lg={5}>
              <div
                className="nav-btn"
                onClick={changeMenuVisibility}
                role="button"
                tabIndex={0}
              >
                {menuVisible ? <MenuFoldOutlined /> : <MenuOutlined />}
              </div>
            </Col>
            {menuVisible ? <JustButtons currentPath={currentPath} /> : null}
          </Row>
        </Col>
      </Row>
    );
  return (
    <Row className="nav-div">
      <Col xs={24} sm={24} lg={8}>
        <Link to="/">
          <div className="to-home">
            <img src={logo} alt="Shelly" width="100%" />
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} lg={16}>
        <Row>
          <JustButtons currentPath={currentPath} />
        </Row>
      </Col>
    </Row>
  );
}

export default ClientMenu;

