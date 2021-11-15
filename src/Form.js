import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        email: '',
        fullName: '',
        address: '',
        address_2: '',
        city: '',
        province: '',
        postalCode: '',
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }


    render() {
        console.log(this.state.formData);
        return (
            <div>
                <div>
                    <label for="email">Email</label>
                    <input
                        name='email'
                        placeholder='Enter email'
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                </div>

                <div>
                    <label>Full Name</label>
                    <input
                        name='fullName'
                        placeholder='Full Name'
                        value={this.state.fullName}
                        onChange={e => this.setState({ fullName: e.target.value })}
                    />
                </div>

                <div>
                    <label>Address</label>
                    <input
                        name='address'
                        placeholder='1234 Main St'
                        value={this.state.address}
                        onChange={e => this.setState({ address: e.target.value })}
                    />
                </div>

                <div>
                    <label>Address 2</label>
                    <input
                        name='address_2'
                        placeholder='Apartment, studio, or floor'
                        value={this.state.address_2}
                        onChange={e => this.setState({ address_2: e.target.value })}
                    />
                </div>

                <div>
                    <label>City</label>
                    <input
                        name='city'
                        placeholder='City'
                        value={this.state.city}
                        onChange={e => this.setState({ city: e.target.value })}
                    />
                </div>

                <div>
                    <label>Province</label>
                    <select value={this.state.pro} onChange={e => this.setState({ province: e.target.value })}>
                        <option value="" disabled selected>Choose...</option>
                        <option value="Alberta">Alberta</option>
                        <option value="British Columbia">British Columbia</option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="New Brunswick">New Brunswick</option>
                        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="Ontario">Ontario</option>
                        <option value="Prince Edward Island">Prince Edward Island</option>
                        <option value="Quebec">Quebec</option>
                        <option value="Saskatchewan">Saskatchewan</option>
                    </select>
                </div>

                <div>
                    <label>Postal Code</label>
                    <input
                        name='postalCode'
                        value={this.state.postalCode}
                        onChange={e => this.setState({ postalCode: e.target.value })}
                    />
                </div>
                <div>
                    <input
                        type="checkbox"
                        value={this.state.agree}/>
                    Agree Terms & Conditions?
                </div>

                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </div>


        )
    }
}
