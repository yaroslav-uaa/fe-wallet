import styles from './Select.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function Select({ listCategory, category, handleInput }) {
  return (
    <div className={styles.select_box}>
      <select
        name="category"
        value={category}
        onChange={handleInput}
        className={styles.form_select}
      >
        <option value="hide">Выберите категорию</option>
        {listCategory.map(item => {
          return (
            <option key={uuidv4()} value={item} name="category">
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

// import React from 'react';
// import chroma from 'chroma-js';
// import { colourOptions } from '../data';

// import Select from 'react-select';

// const dot = (color = '#ccc') => ({
//   alignItems: 'center',
//   display: 'flex',

//   ':before': {
//     backgroundColor: color,
//     borderRadius: 10,
//     content: '" "',
//     display: 'block',
//     marginRight: 8,
//     height: 10,
//     width: 10,
//   },
// });

// const colourStyles = {
//   control: styles => ({ ...styles, backgroundColor: 'white' }),
//   option: (styles, { data, isDisabled, isFocused, isSelected }) => {
//     const color = chroma(data.color);
//     return {
//       ...styles,
//       backgroundColor: isDisabled
//         ? null
//         : isSelected
//         ? data.color
//         : isFocused
//         ? color.alpha(0.1).css()
//         : null,
//       color: isDisabled
//         ? '#ccc'
//         : isSelected
//         ? chroma.contrast(color, 'white') > 2
//           ? 'white'
//           : 'black'
//         : data.color,
//       cursor: isDisabled ? 'not-allowed' : 'default',

//       ':active': {
//         ...styles[':active'],
//         backgroundColor:
//           !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
//       },
//     };
//   },
//   input: styles => ({ ...styles, ...dot() }),
//   placeholder: styles => ({ ...styles, ...dot() }),
//   singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
// };

// export default function SelectList({ listCategory, handleInput }) {
//   return (
//     <Select
//       defaultValue={listCategory[2]}
//       label="Выберите категорию"
//       options={listCategory}
//       styles={colourStyles}
//       onChange={handleInput}
//     />
//   );
// }
