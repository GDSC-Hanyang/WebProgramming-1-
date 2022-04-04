import React, { ChangeEvent, useState } from 'react';
import './index.css';

type TProps = {
  title: string;
  name: string;
  age: number;
  university: string;
  hobby: string[];
  handleClickSaveButton: (text: string) => void;
};

const Page_Home: React.FC<TProps> = ({
  title,
  name,
  age,
  university,
  hobby,
  handleClickSaveButton,
}) => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');

  const handleClickMinusButton = () => {
    setNumber(number - 1);
  };

  const handleClickPlusButton = () => {
    setNumber(number + 1);
  };

  const handleClickResetButton = () => {
    setNumber(0);
  };

  return (
    <div className="page-home">
      <div className="home-title">{title}</div>
      <div className="home-content">
        <div className="name">이름 : {name}</div>
        <div className="age">나이 : {age}</div>
        <div className="university">학교 : {university}</div>
        <div className="hobby">취미: {hobby.join(', ')}</div>
        <div className="potential">
          나의 잠재력 : {number}
          <div>
            <button onClick={handleClickMinusButton}>-</button>
            <button onClick={handleClickPlusButton}>+</button>
            <button onClick={handleClickResetButton}>리셋!!!</button>
          </div>
        </div>
        <input
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setText(event.target.value);
          }}
          value={text}
        />
        <div className="save-button">
          <button onClick={() => handleClickSaveButton(text)}>저장!!!</button>
        </div>
      </div>
    </div>
  );
};

export default Page_Home;
