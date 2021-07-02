import "./InputBar.css"

export default function InputBar({
  name,
  type = "text",
  placeholder,
  label,
  value,
  handleOnChange,
  error,
  ...props
}) {
  return (
    <div className="InputBar">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
        {...props}
      />
      {error && <span className="error">{error}</span>}
    </div>
  )
}