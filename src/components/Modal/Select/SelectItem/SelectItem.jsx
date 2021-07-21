import { MenuItem } from '@material-ui/core';
import { styles } from '@material-ui/pickers/views/Calendar/Calendar';

function SelectItem(array) {
  return array.map(option => {
    return (
      <MenuItem
        key={option.value}
        value={option.value}
        width="100%"
        color="red"
        className={styles.select}
      >
        {option.label}
      </MenuItem>
    );
  });
}

export default SelectItem;
