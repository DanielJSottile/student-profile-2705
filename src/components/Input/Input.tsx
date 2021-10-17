import { FunctionComponent, ChangeEvent, KeyboardEvent} from 'react';
import styles from './Input.module.css';

type InputProps = {
  /** optional classname for styles */
  className?: string;
  /** input value */
  value: string;
  /** placeholder string */
  placeholder: string;
  /** callback function for onChange event */
  onChangeCallback?: (e: ChangeEvent<HTMLInputElement>) => void;
  /** callback function for onKeyDown event (enter) */
  onKeyDownCallback?: (event: KeyboardEvent<HTMLInputElement>) => void;
};

const Input: FunctionComponent<InputProps> = ({
  className,
  value,
  placeholder,
  onChangeCallback = () => null,
  onKeyDownCallback = () => null,
}) => {

  return (
    <>
      <input
        className={className || styles['input']}
        value={value}
        placeholder={placeholder}
        onChange={onChangeCallback}
        onKeyDown={onKeyDownCallback}
      />
    </>
  );
};

export default Input;
