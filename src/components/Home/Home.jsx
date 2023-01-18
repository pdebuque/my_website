import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../../redux/counter'


export default function Home() {
  const count = useSelector(state => state.counter.count);
  // const increment = useSelector(state=>)
  const dispatch = useDispatch();


  return (
    <div>
      <button onClick={() => dispatch(increment())}>the count is {count}</button>

    </div>
  )
}