import { Alert, Container } from '@mui/material';

import React, { useState } from 'react';
import './MakeAdmin.css'

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleBlur = (e) => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {

        const user = { email };
        const url = `https://morning-ravine-60109.herokuapp.com/users/admin`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);

                }
                console.log(data);
            })

        e.preventDefault();
        console.log(e);
    }

    return (
        <div>
            <Container>
                <div className="admin-form">
                    <h2
                        className="text-center mb-4 fw-bold mt-3"
                        style={{ color: 'blue' }}
                    >
                        Make an Admin
                    </h2>

                    <form onSubmit={handleAdminSubmit}>
                        <input
                            type="email"
                            name="email"
                            defaultValue={''}
                            onBlur={handleBlur}
                            placeholder="Admin Email"
                            required
                        />
                        <button type="submit" className="adminBtn mt-2">
                            Make Admin
                        </button>
                    </form>
                    <br />
                    {success && <Alert severity='success'>Make Admin  SuccessFully !!!</Alert>}
                </div>
            </Container>
        </div>
    );
};

export default MakeAdmin;