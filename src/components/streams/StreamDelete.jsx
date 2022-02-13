import React from 'react';
import Modal from '../modal';
import history from '../../history';

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className='ui button negative'>Delete</button>
      <button className='ui button'>Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      <h3>Stream Delete</h3>
      <Modal
        title='Delete Stream'
        content='Are you sure you want to delete this stream?'
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  );
};
export default StreamDelete;
