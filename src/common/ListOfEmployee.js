import { Link } from "react-router-dom";
import Button from "./common";


export default function ListOfEmployee() {
    
    return(
        <>
            <section>
                <div className="dashboard-heading">
                    <div className="dashboard-leftChild">
                        <h2 className="dashboard-leftChild">Employee List</h2>
                    </div>
                    <div className="dashboard-rightChild">
                        <span className="dashboard-Total">Total Count: 4</span>
                        <Link to="/employee-form" className="createEmployee">Create Employee</Link>
                    </div>
                    
                </div>
                <div className="searchEmployee">
                    <form className="searchInfo">
                        <label className="searchData-label" htmlFor="searchData">Search: </label>
                        <input type="text" name="searchData" id="searchData" placeholder="Seach employee by name"></input>
                    </form>
                    </div>
             </section>
             
             <section>
               <div className="employee-details">
             
                <div className="employee">Id</div>
                <div className="employee">Image</div>
                <div className="employee">Name</div>
                <div className="employee">Email</div>
                <div className="employee">Mobile No.</div>
                <div className="employee">Designation</div>
                <div className="employee">Gender</div>
                <div className="employee">Course</div>
                <div className="employee">Create Date</div>
                <div className="employee">Action</div>

                <div className="employee">001</div>
                <div className="employee">Image</div>
                <div className="employee">Ankit Kuamar</div>
                <div className="employee">kumar990ankit@gmail</div>
                <div className="employee">8059650329</div>
                <div className="employee">Employee</div>
                <div className="employee">Male</div>
                <div className="employee">CSE</div>
                <div className="employee">2018-20-3</div>
                <div className="employee">
                     <Button width="40%" textpadding="5px" marginTop="0px" marginRight="2px" backgroundColor="lightGreen">Edit</Button>
                     <Button width="56%" textpadding="5px"  marginTop="0px" backgroundColor="red">Delete</Button>
                </div>
              
              
                <div className="employee">001</div>
                <div className="employee">Image</div>
                <div className="employee">Ankit Kuamar</div>
                <div className="employee">kumar990ankit@gmail</div>
                <div className="employee">8059650329</div>
                <div className="employee">Employee</div>
                <div className="employee">Male</div>
                <div className="employee">CSE</div>
                <div className="employee">2018-20-3</div>
                <div className="employee">
                     <Button width="40%" textpadding="5px" marginTop="0px" marginRight="2px" backgroundColor="lightGreen">Edit</Button>
                     <Button width="56%" textpadding="5px"  marginTop="0px" backgroundColor="red">Delete</Button>
                </div>
                
               </div>
             </section>
        </>
    )

}