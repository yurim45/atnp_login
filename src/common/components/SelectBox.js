import React, { useState } from "react";
import styled from "styled-components";
import { flexSet } from "../../styles/variable";
import Input from "./Input";

const SelectBox = ({ type, desc, name, list }) => {
  const [drop, setDrop] = useState(true);
  return (
    <InputWrap onClick={() => setDrop(!drop)}>
      <Input type={type} desc={desc} name={name} />
      <span className='arrow'>
        <i className='fas fa-chevron-down' />
      </span>
      {drop && (
        <ul className='dropList'>
          {list?.map((el) => {
            return <li key={el.id}>{el.name}</li>;
          })}
        </ul>
      )}
    </InputWrap>
  );
};

export default SelectBox;

const InputWrap = styled.div`
  ${flexSet("center", "center")};
  position: relative;
  margin: 16px 0px;
  width: 100%;

  .arrow {
    position: relative;
    right: 38px;
    margin: 8px 0;
    width: 1px;
    height: 38px;
    box-sizing: border-box;
    border-left: 1px solid ${({ theme }) => theme.colors.borderColor};

    i {
      padding: 10px 12px;
      font-size: 0.8rem;
      line-height: 22px;
    }
  }

  .dropList {
    position: absolute;
    top: 75px;
    width: 100%;
    height: 250px;
    padding: 5px 0;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    font-size: 0.9rem;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 2;

    li {
      padding: 10px;

      :hover {
        background-color: rgba(52, 93, 238, 0.2);
      }
    }
  }
`;
