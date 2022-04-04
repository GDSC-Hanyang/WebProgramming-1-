import React from 'react';
import Page_Home from './app.pages/home';
import PageTest from './app.pages/test';

function App() {
  const handleClickSaveButton = (text: string) => {
    alert(text);
  };

  return (
    <div className="App">
      <PageTest title="진아" />
      <Page_Home
        title="진아의 홈페이지"
        name="김진아"
        age={24}
        university="한양대학교"
        hobby={['낚시', '책읽기']}
        handleClickSaveButton={handleClickSaveButton}
      />
    </div>
  );
}

export default App;
