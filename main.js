import './style.css';

const COLOR_PALETTE = {
  '#ABE188': 'Light green',
  '#F7EF99': 'Flax',
  '#F1BB87': 'Buff',
  '#F78E69': 'Coral',
  '#5D675B': 'Ebony',
  '#AD7A99': 'Mountbatten pink',
  '#AD7A99': 'Tiffany blue',
  '#6DC0D5': 'Sky blue',
  '#FFFD82': 'Icterine',
  '#2B3A67': 'Delft blue',
  '#A379C9': 'Lavender (floral)',
  '#95BF74': 'Pistachio',
  '#474448': 'Onyx',
  '#F1F0EA': 'Isabelline',
  '#EE6C4D': 'Burnt sienna',
  '#C6C5B9': 'Silver',
  '#08415C': 'Indigo dye',
  '#F1BF98': 'Peach',
  '#13C4A3': 'Mint',
  '#FAFFD8': 'Cream',
  '#EEB902': 'Saffron',
};

const colorPicker = document.querySelector('#color-picker');
const selectColor = document.querySelector('#select-color');
const colorName = document.querySelector('.color-name');

const addColorToColorPicker = () => {
  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement('option');
    option.value = color;
    option.textContent = COLOR_PALETTE[color];

    colorPicker.append(option);
  });
};

const addEventListenerToColorPicker = () => {
  colorPicker.addEventListener('change', (event) => {
    const bgColor = event.target.value;

    document.body.style.backgroundColor = bgColor;
    colorName.textContent = bgColor;
  });
};

const addEventListenertoSelectColor = () => {
  selectColor.addEventListener('input', (event) => {
    const bgColor = event.target.value;

    document.body.style.backgroundColor = bgColor;
    colorName.textContent = bgColor;
  });
};

addColorToColorPicker();
addEventListenerToColorPicker();
addEventListenertoSelectColor();
