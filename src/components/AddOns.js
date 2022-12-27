const AddOns = ({ input, head, text, price }) => {
  return (
    <div className="flex justify-between items-center border rounded-lg h-16 md-h-20 w-72 md:w-3/4 my-3 hover:bg-blue-100 hover:border-blue-700 cursor-pointer">
      <div className="flex justify-start items-center mx-3 w-48 md:w-full">
        <input type={input} className="w-4 h-4 cursor-pointer" />
        <div className="flex flex-col justify-start items-left mx-4 w-44">
          <h3 className="text-sm md:text-lg text-blue-900 font-bold w-full">{head}</h3>
          <p className="text-xs text-gray-500">{text}</p>
        </div>
      </div>
      <p className="text-xs md:text-sm text-blue-600 mx-5 md:mx-3">{price}</p>
    </div>
  )
}

export default AddOns
