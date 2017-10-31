import { connect } from 'glimmer-redux';

const stateToComputed = state => ({
  number: state.saga.number,
  loading: state.saga.loading
});

const dispatchToActions = dispatch => ({
  demo: () => dispatch({type: 'SAGA_ACTION_ASYNC', data: 'look ma generators!'})
});

export default connect(stateToComputed, dispatchToActions)();
