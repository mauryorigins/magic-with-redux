/* eslint-disable require-jsdoc */
// ---Dependencies
import { ReactElement } from 'react';
// ---UI Dependencies
import { Row, Button } from 'antd';
import { DollarCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
// ---Custom Hooks
// ---Redux
// ---Components
// ---AppConfig
// ---Assets
// ---Utils
// ---Requests
// ---Images
// ---Types
import { Card } from 'Others/types';
import { useDispatch } from 'react-redux';
import { cardInfoActions } from '@Redux/cardInfo/actions';
import { useNavigate } from 'react-router';

interface Props {
  currentArray: Card[];
}
/**
 * XXXXXX Component: Do something
 * @returns {ReactElement}
 */
export function CardStorage(props: Props): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const { currentArray } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // -----------------------MAIN METHODS
  function addItem(element: Card) {
    dispatch(cardInfoActions.updateCar([element]));
  }
  function goToCar() {
    navigate('../goToCar', { replace: true });
  }
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <Row>
      <ul className="list">
        {currentArray.map((element) => (
          <>
            <li key={element.cardName}>Name Card: {element.cardName}</li>
            <li key={element.cardName}>Expansion: {element.set}</li>
            <li key={element.cardName}>Mana Cost: {element.manaCost}</li>
            <li key={element.cardName}>Card Type: {element.cardType}</li>
            <li key={element.cardName}>Main Text: {element.oracleText}</li>
            <li key={element.cardName}>Collector Number: {element.collectorNumber}</li>
            <li key={element.cardName}>Rarity: {element.rarity}</li>
            <li key={element.cardName}>Price:${element.price}</li>
            <img src={element.imgUrl} alt={element.cardName} />
            <Button
              type="primary"
              shape="round"
              icon={<ShoppingCartOutlined />}
              onClick={() => addItem(element)}
            >
              Add to car
            </Button>
            <Button type="primary" shape="round" icon={<DollarCircleOutlined />} onClick={goToCar}>
              Go to pay
            </Button>
          </>
        ))}
      </ul>
    </Row>
  );
}
