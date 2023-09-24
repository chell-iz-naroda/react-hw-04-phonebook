import styled from 'styled-components';


export const List = styled.ul`
    width: 300px;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const ListItem = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 300px;

    margin-bottom: 10px;
`;
export const Text = styled.p`
`;
export const Button = styled.button`
    display: block;
    margin: auto;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background-color: blue;
    transition: all 250ms ease-in-out;

  &:hover {
    background-color: orange;
  }
`;

