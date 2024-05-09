import Course from "./Course";

function Courses({ courses, deleteCourse }) {
  return (
    <div>
      <div className="title">
        <h2>Kurslarım</h2>
      </div>
      <div className="courses">
        {
            courses.map((course)=>{
                return <Course key={course.id} {...course} deleteButton={deleteCourse}/>;
            })
        }
      </div>
    </div>
  );
}

export default Courses;
