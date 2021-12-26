import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { flexSet } from "../styles/variable";
import Input from "./Input";

const SelectBox = ({
  type,
  desc,
  name,
  list,
  onChange,
  inputValue,
  selectdValue,
  setSelectdValue,
}) => {
  const [drop, setDrop] = useState(false);
  const [filteredList, setFilteredList] = useState(list);

  const filterLists = () => {
    if (inputValue) {
      setFilteredList(list);
      return;
    }
    const filterData = list.filter((el) => {
      if (el.name.includes(inputValue)) {
        return el;
      }
    });
    setFilteredList(
      filterData.length ? filterData : [{ id: 0, name: "no result" }]
    );
  };

  useEffect(() => {
    filterLists();
  }, [inputValue]);

  return (
    <InputWrap onClick={() => setDrop(!drop)}>
      <Input
        type={type}
        desc={desc}
        name={name}
        onChange={onChange}
        inputValue={inputValue}
        value={selectdValue}
      />
      <span className='arrow'>
        <i className='fas fa-chevron-down' />
      </span>
      {drop && (
        <ul className='dropList'>
          {filteredList?.map((el) => {
            return (
              <li
                key={el.id}
                className={
                  el.id == 0
                    ? "noList"
                    : el.name === selectdValue
                    ? "selected"
                    : null
                }
                onClick={(e) => {
                  setSelectdValue(e.target.innerText);
                }}
              >
                {el.name}
              </li>
            );
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
    max-height: 250px;
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

    .selected {
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
    }

    .noList {
      text-align: center;
    }
  }
`;