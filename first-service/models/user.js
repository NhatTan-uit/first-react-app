const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    MSSV: { type: Number, required: true },
    TaiKhoan: { type: String, required: true },
    MatKhau: { type: String, required: true },
    NgaySinh: { type: String },
    GioiTinh: { type: String },
    UserImage: { type: String },
    Email: { type: String, required: true },
    SoDienThoai: { type: String },
    Role: { type: String, required: true },
    ThuePhong: [],
    BinhLuan: [],
})

const Users = mongoose.model("Users", userSchema);

module.exports = Users;