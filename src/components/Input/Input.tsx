import { FunctionComponent, ChangeEvent, KeyboardEvent } from 'react';
import styles from './Input.module.css';

type InputProps = {
  /** optional classname for styles */
  className?: string;
  /** input value */
  value?: string;
  /** placeholder string */
  placeholder: string;
  /** callback function for onChange event */
  onChangeCallback?: (e: ChangeEvent<HTMLInputElement>) => void;
  /** callback function for onKeyPress event (enter) */
  onKeyPressCallback?: (event: KeyboardEvent<HTMLInputElement>) => void;
  /** test id */
  testId?: string;
};

const Input: FunctionComponent<InputProps> = ({
  className,
  value,
  placeholder,
  onChangeCallback = () => null,
  onKeyPressCallback = () => null,
  testId = 'input',
}) => {
  return (
    <div data-testid={testId}>
      <input
        data-testid={`${testId}-input`}
        className={className || styles['input']}
        value={value}
        placeholder={placeholder}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
      />
    </div>
  );
};

export default Input;
