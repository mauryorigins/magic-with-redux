/* eslint-disable require-jsdoc */
// ---Dependencies
import { ReactElement } from 'react';
// ---UI Dependencies
import { Row, Button, notification, Col } from 'antd';
import { DollarCircleOutlined, SmileOutlined } from '@ant-design/icons';
// ---Custom Hooks
// ---Redux
import { cardInfoActions } from '@Redux/cardInfo/actions';
// ---Components
// ---AppConfig
// ---Assets
// ---Utils
// ---Requests
// ---Images
// ---Types
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { FullReduxState } from '@Redux/globalReducers';

/**
 * XXXXXX Component: Do something
 * @returns {ReactElement}
 */
export function CardList(): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { total, ShoppingList } = useSelector((s: FullReduxState) => s.cardInfoReducer);

  // -----------------------MAIN METHODS
  const openNotification = () => {
    notification.open({
      message: 'Gracias por tu comprar',
      description: `Tu pedido se estara generando, por lo que te llegara un correo de confirmacion. total ${total}`,
      onClick: () => {
        console.log('Notification Clicked!');
      },
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
    dispatch(cardInfoActions.cleanStates());
    navigate('../cards', { replace: true });
  };

  // -----------------------AUX METHODS
  // function totalPlus(list: Card[]) {
  //   let newTotal = 0;
  //   for (let i = 0; i < list.length; i++) {
  //     const element = list[i];
  //     newTotal += Number(element.price);
  //     dispatch(cardInfoActions.updateTotal(newTotal));
  //   }
  // }

  // useEffect(() => totalPlus(currentArray));
  // -----------------------RENDER
  return (
    <Row>
      <Col>
        <ul className="list">
          {ShoppingList.map((element) => (
            <>
              <li key={element.cardName}>Name Card: {element.cardName}</li>
              <li key={element.cardName}>Price:${element.price}</li>
              <img src={element.imgUrl} alt={element.cardName} />
            </>
          ))}
          <Button
            type="primary"
            shape="round"
            icon={<DollarCircleOutlined />}
            onClick={openNotification}
          >
            Buy
          </Button>
        </ul>
      </Col>
      <Col>
        <h1>total:{total}</h1>
      </Col>
    </Row>
  );
}
