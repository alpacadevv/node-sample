import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useInput } from '../pages/signup';
import { LOG_IN_REQUEST } from '../reducers/user';

const LoginError = styled.p`
  color: red;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [userId, onChangeUserId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { isLoggingIn, logInErrorReason } = useSelector(state => state.user);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        userId,
        password,
      },
    });
  }, [userId, password]);

  return (
    <Form onSubmit={onSubmitForm} style={{ padding: '10px' }}>
      <div>
        <label htmlFor="user-id">ID</label>
        <br />
        <Input name="user-id" value={userId} onChange={onChangeUserId} required />
      </div>
      <div>
        <label htmlFor="user-password">Password</label>
        <br />
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
      </div>
      <LoginError>{logInErrorReason}</LoginError>
      <div style={{ marginTop: '10px' }}>
        <Button type="primary" htmlType="submit" loading={isLoggingIn}>Login</Button>
        <Link href="/signup"><a><Button>Sign Up</Button></a></Link>
      </div>
    </Form>
  );
};

export default LoginForm;
