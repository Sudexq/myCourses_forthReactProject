import { useState } from "react";
// import Course from "./Course";
//import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Space, Typography } from "antd";
const { Title, Text , Paragraph } = Typography;

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

  const randomCourse = () => {
    let randomNum = Math.floor(Math.random() * courses.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    setIndex(checkIndex(randomNum));
  };

  return (
    <div>
      <Flex vertical align="center">
        <Title level={1}>Kurslarım</Title>
        <Button type="primary" onClick={randomCourse}>
          Ratgele Kurs Atama
        </Button>
      </Flex>
      <Flex justify="center" align="center">
        <Button type="link" size="large" onClick={prevItem}>
          <LeftOutlined />
        </Button>
        <Card title={title} size="small"  className="card">
          <Title italic level={5} type="danger">{price}TL</Title>
          <Paragraph style={{fontSize:'12px'}}>{content}</Paragraph>
        </Card>
        <Button type="link" size="large" onClick={nextItem}>
          <RightOutlined />
        </Button>
      </Flex>
    </div>
  );
}

export default Courses;
