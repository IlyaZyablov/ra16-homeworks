import { useSelector, useDispatch } from 'react-redux';
import { removeService, editService } from '../actions/actionCreators';

// bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();
  const handleEdit = (id, name, price) => { dispatch(editService(id, name, price)) };
  const handleRemove = id => { dispatch(removeService(id)) };

  return (
    <ListGroup className='mt-3'>
      {items.map(o => (
        <ListGroup.Item key={o.id}>
          {o.name} {o.price}
          <Button variant='secondary' className='mx-2' onClick={() => handleEdit(o.id, o.name, o.price)}>Изменить</Button>
          <Button variant='danger' onClick={() => handleRemove(o.id)}>Удалить</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}