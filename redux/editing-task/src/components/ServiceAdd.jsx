import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, cancelEdit, saveService } from '../actions/actionCreators';

// bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function ServiceAdd() {
  const item = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  }

  const handleReset = () => {
    dispatch(cancelEdit());
    
    dispatch(changeServiceField('name', ''));
    dispatch(changeServiceField('price', ''));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    if (item.edit.status === false) {
      dispatch(addService(item.name, item.price));
    } else {
      dispatch(saveService(item.edit.id, item.name, item.price));
      dispatch(cancelEdit());
    }
    

    dispatch(changeServiceField('name', ''));
    dispatch(changeServiceField('price', ''));
  }

  return (
    <Form onSubmit={handleSubmit} onReset={handleReset} className='mt-3'>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Control
            placeholder='Введите наименование'
            name='name'
            value={item.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Control
            type='number'
            placeholder='Введите цену'
            name='price'
            value={item.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {item.edit.status === false ? (
          <Form.Group as={Col}>
            <Button type='submit'>Добавить</Button>
          </Form.Group>
        ) : (
          <Form.Group as={Col}>
            <Button variant='success' className='me-2' type='submit'>Сохранить</Button>
            <Button type='reset'>Отмена</Button>
          </Form.Group>
        )}
      </Row>
    </Form>
  );
}