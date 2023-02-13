import CategoryButton from './CategoryButton'

const ProjectsCategories = ({categories}) => {
  return (
    <div className='portfolio_categories'>
        {
            categories.map(category => (
                <CategoryButton key={category} category={category} className= {`btn cat_btn white`} />
            ))
        }
    </div>
  )
}

export default ProjectsCategories