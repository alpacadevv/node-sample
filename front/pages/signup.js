// folder 이름이 pages인 이유 : next는 라우터 기능의 Link를 쓸때 페이지의 주소체게를 잡는데 pages폴더가 root로 잡힌다
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import { SIGN_UP_REQUEST } from '../reducers/user';

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const SignupError = styled.div`
  color: red;
`;

const Signup = () => {
  const dispatch = useDispatch();

  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [userId, onChangeUserId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

  const { me, isSigningUp } = useSelector(state => state.user);

  useEffect(() => {
    // 우리가 SSR을 하기때문에 me가 확실히 있거나 없거나 하는걸 알 수가 있음
    // 기존에는 처음에는 me가 항상 없다가 LOAD_USER_REQUEST해서 나중에 받아왔는데
    // 그래서 me가 잠깐 없던 그 시절이 있었는데 그래서 아래처럼 체크하는데 무리가 있었음.
    // 서버사이드 렌더링으로 하면 처음에 데이터 받아오니까 상태가 확실해짐 그래서 개발할때 편함
    // 새로고침으로 페이지 처음 들어갈때는 SSR 그 후는 불러온 데이터를 이용한 클라이언트 사이드 렌더링
    if (me) {
      Router.push('/');
    }
  }, [me && me.id]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }

    return dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        userId,
        password,
        nickname,
      },
    });
  }, [userId, nickname, password, passwordCheck, term]);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  if (me) {
    return null;
  }

  return (
    <>
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-id">ID</label>
          <br />
          <Input name="user-id" required value={userId} onChange={onChangeUserId} />
        </div>
        <div>
          <label htmlFor="user-nickname">Nickname</label>
          <br />
          <Input name="user-nickname" required value={nickname} onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor="user-password">Password</label>
          <br />
          <Input name="user-password" type="password" required value={password} onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-password-check">Password check</label>
          <br />
          <Input name="user-password-check" type="password" required value={passwordCheck} onChange={onChangePasswordCheck} />
          {passwordError && <SignupError>Wrong password!</SignupError>}
        </div>
        <div>
          <Checkbox name="user-term" value={term} onChange={onChangeTerm}>Fallow us!!</Checkbox>
          {termError && <SignupError>Please fallow us!</SignupError>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={isSigningUp}>Sign Up</Button>
        </div>
      </Form>
    </>
  );
};

export default Signup;
