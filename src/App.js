import "./App.css";
import Courses from "./components/Courses";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import { Button } from 'antd';

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3004/courses"); //kursları db.json dan çekiyoruz axios aracılığıyla
      setCourses(response.data); //response a atadığımız kursların datasını courses a set ediyoruz
      setLoading(false); //kullanıcıya verilerin tamamen yüklendiğini göstermek için
    } catch (error) {
      //hata alırsa
      setLoading(false); //loading state ini false olarak ayarlar
    }
  };

  const afterDelete = (id) => {
    const afterDeleteCourse = courses.filter((course) => course.id !== id);
    setCourses(afterDeleteCourse);
  };

  useEffect(() => {
    fetchCourses(); //kurslara ulaşıyoruz
  }, []); //ilk kez render edildiğinde çalışır bi daha çalışmaz

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {courses.length === 0 ? (
            <div className="title">
              <h2>Kursların hepsi silindi!</h2>
              <Button
                className="button"
                onClick={() => {
                  fetchCourses();
                }}
              >
                Yenile
              </Button>
            </div>
          ) : (
            <Courses courses={courses} deleteCourse={afterDelete} />
          )}
        </>
      )}
      
    </div>
  );
}

export default App;
