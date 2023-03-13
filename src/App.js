import React,{useState, useEffect} from 'react'
import SearchBar from './components/SearchBar';
import View from './components/View';
import { Container, InputGroup, Form } from 'react-bootstrap';



const getDatafromLS=()=>{
  const data = localStorage.getItem('address');
  if(data) {
    return JSON.parse(data);
  } else {
    return []
  }
}
const App = () => {
  const[address, setAddress]=useState(getDatafromLS());
    const[Id, setId]=useState('');
    const[FirstName, setFirstName]=useState('');
    const[LastName, setLastName]=useState('');
    const[Email, setEmail]=useState('');
    const [message, setMessage] = useState("");
   

    const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(Email)) {
      setMessage("");
    } else if (!regEx.test(Email) && Email !== "") {
      setMessage("Email is Not Valid. Please Add Valid Email to get Updates");
    } else {
      setMessage("");
    }
  };

    

    const handleAddAddress=(e)=> {
        e.preventDefault();
        let addressBook={
            Id,
            FirstName,
            LastName,
            Email
        }
        setAddress([...address, addressBook]);
        setId('');
        setFirstName('');
        setLastName('');
        setEmail('');
    }

    const deleteBook=(Id)=>{
      const filteredBooks=address.filter((element,index)=>{
        return element.Id !== Id
      })
      setAddress(filteredBooks);
    };
 
    
    useEffect(() => {
        localStorage.setItem('address', JSON.stringify(address));
    },[address])
  return (
    <div className='wrapper'>
      <h1> Employee Address Book</h1>
      <p> Add or Delete employee address</p>
      
      <div className='main'>
      
      <div className='form-container'>
          <form autoComplete='off' className='form-group' onSubmit={handleAddAddress}>
              <label>Id</label>
               <input type ="number" className='form-control' required onChange={(e) =>setId(e.target.value)} value={Id}></input>
              <br></br>

               <label>FirstName</label>
               <input type ="text" className='form-control' required onChange={(e) =>setFirstName(e.target.value)} value={FirstName}></input>
              <br></br>

               <label> LastName </label>
               <input type ="text" className='form-control' required onChange={(e) =>setLastName(e.target.value)} value={LastName}></input>
               <br></br>
               

               <label> Email </label>
               <input type ="text" className='form-control' required onChange={(e) =>setEmail(e.target.value)} value={Email}></input>
               <br></br>
               
               <button className='btn btn-success btn-md' type='submit' onClick={emailValidation} > Add Contact</button>
               <br></br>
               <p className="message">{message}</p>

          </form>
     </div>

     <section>
     <Container>
    <h4> Search Here</h4>
    <Form>
        <InputGroup> 
          <Form.Control  placeholder='Search Here' />
        
        </InputGroup>
    </Form>
    
</Container>
    
        <div className='view-container'>
          {address.length>0&&<>
            
           <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View address={address} deleteBook={deleteBook}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setAddress([])}>Remove All</button>
          
  
          </>}
        {address.length < 1 && <div> No Address were added </div>}
        </div>
        </section>
      </div>
    </div>
  )
}

export default App
