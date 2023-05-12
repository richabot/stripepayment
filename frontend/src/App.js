import logo from './logo.svg';
import './App.css';
import axios from "axios"
function App() {
  const handleSubmit=async (price,plan)=>{

    try {
      const response = await axios.post('http://localhost:8000/create-checkout-session', {
        // Add any additional data you want to send in the request body
        price,
        plan
      });
console.log(response,"response")
      // Redirect the user to the session URL
      window.location.href = response.data.url;
     console.log(price,plan)
    } catch (error) {
      console.error(error,"error");
      // Handle the error as needed
    }
  }
  return (
    <>
     <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
           
    
          <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit('10',"basic");
                  }}
                >
                  <h5 className="card-title">Product 2</h5>
                  <p className="card-text">Price: 10</p>
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </form>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
          <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit('20',"medium");
                  }}
                >
                  <h5 className="card-title">Product 2</h5>
                  <p className="card-text">Price: 20</p>
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </form>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
          <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit('30',"premium");
                  }}
                >
                  <h5 className="card-title">Product 3</h5>
                  <p className="card-text">Price: 30</p>
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  );
}

export default App;
