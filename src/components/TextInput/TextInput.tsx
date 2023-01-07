import {
  Collapse,
  FormControl,
  FormControlProps,
  Input,
  Text,
} from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type TextInputProps = {
  label: string;
  type?: string;
  register: UseFormRegisterReturn<string>;
  errors?: FieldError;
} & FormControlProps;

export const TextInput: React.FC<TextInputProps> = ({
  label,
  type = 'text',
  register,
  errors,
  ...rest
}) => {
  return (
    <FormControl {...rest}>
      <Text as="label" htmlFor={label} mb="0.5rem">
        {label}
      </Text>

      <Input {...register} id={label} type={type} />

      <Collapse in={errors as unknown as boolean} animateOpacity>
        <Text fontSize="0.8rem !important" color="red !important">
          *{errors?.message}
        </Text>
      </Collapse>
    </FormControl>
  );
};
