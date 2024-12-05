
const ButtonList = () => {
  let list = ["All","Live","Gaming","React Router","News","Cooking","Albums","Watched","Statistics","New to you"]
  return (
    <div className="flex p-3 flex-wrap justify-center items-center">
      {list.map((allList, index)=>(
      <button key={index} className="bg-gray-100 px-3 py-1 rounded-lg m-2">{allList}</button>
      ))}
    </div>
    
  )
}

export default ButtonList
