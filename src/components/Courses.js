import { useState } from "react";
// import Course from "./Course";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Courses({ courses, deleteCourse }) {
  const [index, setIndex] = useState(0);
  const { content, title, price } = courses[index];

  const checkIndex = (index) => {
    if (index < 0) {
      return courses.length - 1;
    }
    if (index > courses.length - 1) {
      return 0;
    }
    return index;
  };

  const prevItem = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextItem = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const randomCourse=()=>{
    let randomNum = Math.floor(Math.random()*courses.length);
    if(randomNum===index){
      randomNum=index+1;
    }
    setIndex(checkIndex(randomNum));
  }

  return (
    <div>
      <div className="title">
        <h2>Kurslarım</h2>
        <button className="button" onClick={randomCourse}>Ratgele Kurs Atama</button>
      </div>
      <div className="courses">
        <button className="chevron" onClick={prevItem}>
          <FaChevronLeft />
        </button>
        <div className="card">
          <h3>{title}</h3>
          <h5 className="price">{price}TL</h5>
          <p className="content">{content}</p>
        </div>
        <button className="chevron" onClick={nextItem}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Courses;
