import { useState } from 'react';
import './App.css';

function convertHEX(colorHex) {
  const colorRGB = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorHex);
  let result;
  if (colorRGB) {
    result = `rgb(${parseInt(colorRGB[1], 16)}, ${parseInt(colorRGB[2], 16)}, ${parseInt(colorRGB[3], 16)})`
  } else {
    result = 'rgb(255, 0, 0)';
  }

  return result;
}

function App() {
  const [form, setForm] = useState({
    colorHex: '',
    colorRGB: 'rgb(0, 0, 0)',
    text: 'Введите цвет в формате #000000',
  });

  const handleColorChange = ({ target }) => {
    const { name, value } = target;
    setForm(prevForm => ({...prevForm, [name]: value}));
  };

  if (form.colorHex.length === 7) {
    form.colorRGB = convertHEX(form.colorHex);
    if (form.colorRGB === 'rgb(255, 0, 0)') {
      form.text = 'Ошибка';
    } else {
      form.text = form.colorRGB;
    }
  } else if (form.colorHex.length > 7) {
    form.text = 'Ошибка';
  } else {
    form.colorRGB = 'rgb(0, 0, 0)';
    form.text = 'Введите цвет в формате #000000';
  }

  return (
    <div className='container' style={{ backgroundColor: form.colorRGB }}>
      <form>
        <input 
          type='text'
          id='colorHex'
          name='colorHex'
          value={form.colorHex}
          placeholder='Введите цвет в формате #000000'
          onChange={handleColorChange}
        />
      </form>
      <div className='converter-content'>
        <span>{form.text}</span>
      </div>
    </div>
  )
}

export default App
