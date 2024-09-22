import { KeyboardTypeOptions, StyleProp, TextInput, View, ViewStyle } from 'react-native';
import { FC, useRef } from 'react';
import { blackColor } from '../../constants/colors';
import SearchIcon from '../../assets/images/icons/search.svg'
import styles from './styles';

export interface InputProps {
  value: string | undefined;
  label?: string | undefined;
  placeholder?: string | undefined;
  isError?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onChange: (val: string) => void;
  onBlur?: () => void;
  onPressFocus?: () => void;
  errorText?: string | undefined;
  placeholderTextColor?: string | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
}

const Input: FC<InputProps> = ({
  onChange,
  placeholder,
  placeholderTextColor = blackColor,
  value,
  keyboardType = 'default',
}) => {
  const inputRef = useRef<TextInput>(null);

  const handleOnChange = (text: string): void => {
    onChange(text);
  };

  return (
    <View style={{position: 'relative'}}>
      <View style={{position: 'absolute', bottom: 28 - 15, right:  16}}>
        <SearchIcon width={30} height={30} fill={blackColor}/>
      </View>
      <TextInput 
        ref={inputRef}
        value={value}
        onChangeText={handleOnChange}
        style={[styles.input]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;
