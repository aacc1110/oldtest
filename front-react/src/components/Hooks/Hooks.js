/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import HooksTable from './HooksTable';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';

const Background = {
  paddingTop: '60px',
};

const Hooks = () => {
  const initialFormState = {
    id: null,
    name: '',
    username: '',
  };
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ];
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = user => {
    // eslint-disable-next-line no-param-reassign
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id));
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <div style={Background}>
      <Container>
        <h1>CRUD App with Hooks</h1>
        <Row>
          <Col>
            <h2>Add user</h2>
            {editing ? (
              <Fragment>
                <h2>Edit user</h2>
                <EditUserForm
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </Fragment>
            ) : (
              <Fragment>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </Fragment>
            )}
          </Col>
          <Col>
            <h2>View users</h2>
            <HooksTable
              users={users}
              editRow={editRow}
              deleteUser={deleteUser}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hooks;
