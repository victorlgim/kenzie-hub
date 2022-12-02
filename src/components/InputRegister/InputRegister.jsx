import { Inputs } from "./style";

const InputRegister = ({ placeholder, type, register, value }) => {
  return <Inputs placeholder={placeholder} type={type} {...register(value)} />;
};

export default InputRegister;
