import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            vaccinated: '',
            vaccineName: '',
            img:''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeVaccinatedHandler = this.changeVaccinatedHandler.bind(this);
        this.changeVaccinatedHandler = this.changeVaccinatedHandler.bind(this);
        this.changeImgHandler = this.changeImgHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({
                name: employee.name,
                    vaccinated: employee.vaccinated,
                    vaccineName : employee.vaccineName,
                    img : employee.img
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {name: this.state.name, vaccinated: this.state.vaccinated, vaccineName: this.state.vaccineName, img: this.state.img};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeVaccinatedHandler= (event) => {
        this.setState({vaccinated: event.target.value});
    }

    changeVaccineNameHandler= (event) => {
        this.setState({vaccineName: event.target.value});
    }
    changeImgHandler= (event) => {
        this.setState({img: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 cardshadow3">
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label>  Name: </label>
                                            <input placeholder="Name" name="Name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label>Vaccinated </label>
                                            <input placeholder="Vaccinated" name="vaccinated" className="form-control" 
                                                value={this.state.vaccinated} onChange={this.changeVaccinatedHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Vaccine Name </label>
                                            <input placeholder="Vaccine Name" name="vaccineName" className="form-control" 
                                                value={this.state.vaccineName} onChange={this.changeVaccineNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Img Url: </label>
                                            <input placeholder="Img Url" name="img" className="form-control" 
                                                value={this.state.img} onChange={this.changeImgHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
