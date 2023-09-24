
const Header = (props)=>{
    const heading = props.name
  
    return(
      <h2>{heading}</h2>
    )
  }
  
  const Totalexercises = (props) =>{
    const parts = props.parts
    const init = 0
    const total = parts.reduce((accumulator,part)=>accumulator+part.exercises,init)
  
    return(
      <h3>total of {total} exercises</h3>
    )
  
  }

  const Chapters = (props) =>{
    const course = props.course
        return(
            <p key = {course.id}>{course.name} {course.exercises}</p>
        )
  }
  
  const Course = (props)=>{
    const data =props.course
    const parts = data.parts
    return(
      <>
      <Header name={data.name}/>
      <ul>
        {parts.map(course=> <Chapters key ={course.id} course={course}/>)}
      </ul>
      <Totalexercises parts = {parts}/>
      </>
    )
  }

  
export default Course