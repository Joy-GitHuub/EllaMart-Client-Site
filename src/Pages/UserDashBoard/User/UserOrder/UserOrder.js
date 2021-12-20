import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
// import Footer from '../../../Shared/Footer/Footer'
import useAuth from '../../../../Hooks/useAuth'
import './UserOrder.css'

const UserOrder = () => {

  const { user } = useAuth();

  const [userOrder, setUserOrder] = useState([]);

  useEffect(() => {
    const url = `https://morning-ravine-60109.herokuapp.com/userOrder/${user.email}`
    fetch(url)
      .then(res => res.json())
      .then(data => setUserOrder(data))
  }, [user.email, userOrder])


  const handleOrderDelete = (id) => {
    const deleteSure = window.confirm('Are You Sure You Delete Your Order');
    if (deleteSure) {
      const url = `https://morning-ravine-60109.herokuapp.com/userOrder/${id}`
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount) {
            alert('SuccessFully Delete You Order');
            const remaining = userOrder.filter(order => order._id !== id)
            setUserOrder(remaining);
          }
        })
    }
  }

  return (
    <div>
      <div className='container mt-5 text-center my-booking'>
        <div>
          <h2 className="text-center  mb-5">{user.displayName} <span style={{ color: "red" }}>Orders</span></h2>
          <Table striped bordered hover size="sm" responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>User Location</th>
                <th>Product Name</th>
                <th>Booking Cost</th>
                <th>Status</th>
                <th>Cancel Booking</th>
              </tr>
            </thead>

            <tbody>
              {
                !userOrder.length ? <div className="text-center mx-auto">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden mx-auto">Loading...</span>
                  </Spinner>
                </div> :


                  userOrder.map((userDetails, index) => <>
                    <tr className='text-center align-items-center' key={userDetails._id}>
                      <td> {index + 1}</td>
                      <td style={{ fontSize: '15px', }}>{userDetails.UserName}</td>
                      <td>{userDetails.email}</td>
                      <td>{userDetails.address}</td>
                      <td>{userDetails.productName}</td>
                      <td>{userDetails.price}</td>
                      <td>{userDetails.status}</td>
                      <td
                      >
                        <button
                          onClick={() => handleOrderDelete(userDetails._id)}
                          type="button" className="btn btn-dark "><i className="fas fa-trash text-danger"></i></button>
                      </td>
                    </tr>

                  </>
                  )
              }
            </tbody>
          </Table>
        </div>


      </div>
    </div>
  );
};

export default UserOrder;