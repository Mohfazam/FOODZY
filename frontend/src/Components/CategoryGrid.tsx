import CategoryCard from "./CategoryCard"

const Cards = [
  {
    text : "Everyday Fresh & Clean with Our Products",
    image: "/Category-1.svg"
  },
  {
    text : "Make your Breakfast Healthy and Easy",
    image: "/Category-2.svg"
  },
  {
    text : "The best Organic Products Online",
    image: "/Category-3.svg"
  }
]

const CategoryGrid = () => {
  return (
    <div className="flex flex-col sm:flex-row max-w-[1585.97px] gap-4 mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {Cards.map((e, i) => (
        <CategoryCard text={e.text} image={e.image} key={i}/>
      ))}
    </div>
  )
}

export default CategoryGrid