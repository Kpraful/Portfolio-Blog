import './App.css';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Middle from './components/Middle';
import Navbar from './components/Navbar';
import Lottie from 'react-lottie';
import Home from './components/Home';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import { dataContext } from './context/context';
import animationData from "../src/Animations/lotte.json";

// function getImageArray() {
//   fetch('')
// }

async function resultArray(params) {
  let arr = {};
  // const title = Array.from({ length: params }, () => faker.lorem.sentence());
  // const content = Array.from({ length: params }, () => faker.lorem.paragraph());
 

  const listPromise = await fetch('http://127.0.0.1:8000/blog/get/');
  const data = await listPromise.json();
  return data;
  // const img = await fetch('https://source.unsplash.com/random/800x600');
}

function App() {

 
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState([]);

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    async function fetchData() {
      const data = await resultArray(10);
      // console.log("Data is ", data);
      let title=[];
      let content=[];
      let images=[];
      let index=[];
      data.forEach((d)=>{
        title.push(d.title);
        content.push(d.content);
        images.push("http://127.0.0.1:8000"+d.image);
        index.push(d.id);
      })
           
      // setIndex(Array.from({ length: 10 }, (_, i) => i));
      setTitle(title);
      setContent(content);
      setImg(images);
      setIndex(index);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen bg-black h-[100vh] w-[100vw]">
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    )
  }

  return (
    <>
    <dataContext.Provider value={{img, title, content, index}}>
      <Navbar />
      <Logo />
      {
        title.map((data, index) => {
          return <Middle key={index} id={index} img={img[index]} title={title[index]} content={content[index]} />
        })
      }
      <Footer />
    </dataContext.Provider>
    </>
  );
}

export default App;
