import React, { useRef, useState } from 'react'

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm() {
    const [TaiKhoan, setTaiKhoan] = useState('');
    const [MatKhau, setMatKhau] = useState('');

    const uname = useRef();
    const upass = useRef();

    const navigate = useNavigate();

    const onPress = (e) => {
        e.preventDefault();

        if (TaiKhoan === '') {
            alert("Vui long dien ten dang nhap");
            uname.current.focus();
        }
        else if (MatKhau === '') {
            alert("Vui long dien mat khau");
            upass.current.focus();
        }
        else {
            const user = {
                TaiKhoan,
                MatKhau
            };

            axios
                .post(`http://localhost:4000/user/login/`, user)
                .then(res => {
                    localStorage.setItem('user', res.data.user._id)
                    // if (res.data.user.usertype) {
                    //     localStorage.setItem('userrole', res.data.user.usertype)
                    // }
                    alert(res.data.message)
                    navigate('/trang1')
                    window.location.reload();
                })
                .catch(err => {
                    console.log(err);
                    alert("Sai ten dang nhap hoac mat khau")
                    uname.current.focus();
                });
        }
    }

    return (
        <Form style={{ border: "1px solid black", borderRadius: "10px", padding: "15px 25px", margin: "5% 20%" }} onSubmit={onPress} encType="multipart/form-data">
            <h1 style={{ margin: "15px 0px", textAlign: "center" }}>Login Form</h1>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={e => setTaiKhoan(e.target.value)} ref={uname} type="text" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={e => setMatKhau(e.target.value)} ref={upass} type="password" placeholder="Password" />
            </Form.Group>
            <div style={{ textAlign: "center" }}>
                <Button style={{ margin: "15px 0px" }} variant="primary" type="submit">
                    Dang Nhap
                </Button>
            </div>
        </Form>
    )
}

export default LoginForm