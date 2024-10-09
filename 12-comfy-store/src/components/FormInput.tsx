import { InputField } from "../api/types";

export const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  size,
}: InputField) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};
