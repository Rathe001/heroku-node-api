import store from '../constants/store';
import sendUpdate from './sendUpdate';

const moveDown = ({ id }) => {
  const state = store.get();

  state.users[id].position.y -= 1;
  store.set(state);

  sendUpdate({ data: state });
};

export default moveDown;
