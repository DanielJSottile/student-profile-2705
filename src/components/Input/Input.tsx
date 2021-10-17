import { FunctionComponent, ChangeEvent, KeyboardEvent} from 'react';
import styles from './Input.module.css';

type InputProps = {
  className?: string;
  value: string;
  placeholder: string;
  onChangeCallback?: (e: ChangeEvent<HTMLInputElement>) => void;
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
