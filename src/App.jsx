
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import img1 from './assets/images.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function App() {


  return (
    <>
     <h1>Hello From App</h1>
    <Navbar/>
    {/* <img src="images/images.png"/> */}
    <img src={img1}/> 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default App
