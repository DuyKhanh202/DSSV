// Hàm lấy thông tin từ form
function layThongTinTuForm() {
    var ma = document.getElementById("txtMaSV").value;
    var ten = document.getElementById("txtTenSV").value;
    var email = document.getElementById("txtEmail").value;
    var matKhau = document.getElementById("txtPass").value;
    var diemToan = document.getElementById("txtDiemToan").value * 1;
    var diemLy = document.getElementById("txtDiemLy").value * 1;
    var diemHoa = document.getElementById("txtDiemHoa").value * 1;
    var sv = {
      ma: ma,
      ten: ten,
      email: email,
      matKhau: matKhau,
      diemToan: diemToan,
      diemLy: diemLy,
      diemHoa: diemHoa,
      tinhDTB: function () {
        return (this.diemHoa + this.diemLy + this.diemToan) / 3;
      },
    };
    return sv;
  }