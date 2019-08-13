import styled from 'styled-components';

export const Title = styled.h1`
  color: #fff;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const ButtonSubmit = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #0bbc7b;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      /*  estiliza todos os li's do componente, menos o primeiro da lista   */
      border-top: 1px solid #eee;
    }

    a {
      color: #0bbc7b;
      text-decoration: none;
    }
  }
`;
