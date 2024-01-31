import { useEffect, useState } from 'react';
import TopSlider from './components/TopSlider';
import { Container, Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import OverViewSlider from './components/OverViewSlider';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  const url = 'https://bestinbd.com/projects/web/task/api/get-req-data/sections?type=slug&value=home&get_section=yes&image=yes&post=yes&file=yes&gallery=yes';
  
  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await axios.get(url);
          const data = response.data.featured_project;
          const flattenedData = data.map((item, index) => {
            let refinedData = item.data.product_data;
            refinedData.imgUrl = item.data.images.list[0];
            return refinedData;
          });
        setData(flattenedData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <>
      <Container>
        <TopSlider sliderData={data}/>
        <OverViewSlider sliderData={data}/>
      </Container>
    </>
  )
}

export default App
