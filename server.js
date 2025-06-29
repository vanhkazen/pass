const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const correctUsername = "administrator";
const correctPassword = "vanh2711";

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === correctUsername && password === correctPassword) {

        res.redirect('/welcome.html');
    } else {
        res.send('<h1>Tài khoản hoặc mật khẩu không đúng!</h1><a href="/">Thử lại</a>');
    }
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
