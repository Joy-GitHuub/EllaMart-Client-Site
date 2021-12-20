import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    // const { user } = useAuth();

    useEffect(() => {
        fetch(`https://morning-ravine-60109.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            });
    }, [orders]);

    console.log(orders);

    const shippedOrder = (id) => {
        fetch(`https://morning-ravine-60109.herokuapp.com/orders/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert('Shipping SuceesFully');
                }
            });
    };

    const handleDelete = (id) => {
        const deleteSure = window.confirm('Are You Sure You Delete Your Booking');
        if (deleteSure) {
            const url = `https://morning-ravine-60109.herokuapp.com/allProduct/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Delete SuccesFully')
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }


    return (
        <div>
            <div className="py-3">
                <div className="container myOrder">
                    <h2 className="text-center my-4">
                        Manage Customer <span style={{ color: "#2980b9" }}>Orders</span>
                    </h2>
                    <Table striped bordered hover size="sm" responsive="sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Laptop</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders?.map((order, index) => (
                                <>
                                    <tr>
                                        {/* <td>
                    <img style={{ width: "60px" }} src={`data:image/png;base64,${order?.image}`} alt="" />
                  </td> */}
                                        <td> {index + 1}</td>
                                        <td>{order?.email}</td>
                                        <td>{order?.address}</td>
                                        <td>{order?.productName}</td>
                                        <td>$ {order?.price}</td>
                                        {order.status === "Pending" ? (
                                            <td className="text-danger fw-bold">{order.status}</td>
                                        ) : (
                                            <td className="text-success fw-bold">{order.status}</td>
                                        )}
                                        <td>
                                            {order?.status === "pending" ? (
                                                <button
                                                    onClick={() => shippedOrder(order._id)}
                                                    className="cancelBtn"
                                                >
                                                    Shipped
                                                </button>
                                            ) : (
                                                "----"
                                            )}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleDelete(order._id)}
                                                className="cancelBtn"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;