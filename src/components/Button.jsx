/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <button
      style={props.style}
      onClick={props.onClick}
      className=' text-center outline-none font-interBoldSemiBold sm:text-base block py-[16px] px-[32px] rounded-full sm:py-[10px] sm:px-[20px] hover:bg-primary'
    >
      {props.children}
    </button>
  )
}

export default Button
