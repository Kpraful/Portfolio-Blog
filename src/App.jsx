import './App.css';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Middle from './components/Middle';
import Navbar from './components/Navbar';
const imgArr = ['https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2.jpg','https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/loft-office-with-vintage-decor-PFD2JSL-1.jpg','https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/yellow-and-gray-industrial-office-PFDQ5CR-1.jpg'];

const titleArr = ['The Best Coffee in Town','The Best Office in Town','The Best Office in Town'];

const contentArr = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risuseget risus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risusLorem ipsum dolor sit amet'];

function App() {
  return (
    <>
      <Navbar/>
      <Logo/>
      {
        imgArr.map((img, index) => {
          return <Middle img={img} title={titleArr[index]} content={contentArr[index]}/>
        })
      }
      <Footer/>
      </>
  );
}

export default App;
