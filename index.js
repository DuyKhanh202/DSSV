// Khởi tạo mảng DSSV
var DSSV = [];

// Lấy dữ liệu từ localStorage khi load lại trang
var data = localStorage.getItem("DSSV_JSON");
if (data) {
  DSSV = JSON.parse(data);
  renderDSSV();
}

// Hàm render danh sách sinh viên
function renderDSSV() {
  var contentHTML = "";
  for (var index = 0; index < DSSV.length; index++) {
    var sv = DSSV[index];
    var trString = `<tr>
                      <td>${sv.ma}</td>
                      <td>${sv.ten}</td>
                      <td>${sv.email}</td>
                      <td>${((sv.diemToan + sv.diemLy + sv.diemHoa) / 3)}</td>
                      <td>
                        <button onclick="xoaSv('${sv.ma}')" class="btn btn-danger">Xoá</button>
                        <button onclick="suaSv('${sv.ma}')" class="btn btn-warning">Sửa</button>
                      </td>
                    </tr>`;
    contentHTML += trString;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

// Hàm thêm sinh viên
function themSv() {
  var sv = layThongTinTuForm();
  DSSV.push(sv);
  var jsonDSSV = JSON.stringify(DSSV);
  localStorage.setItem("DSSV_JSON", jsonDSSV);
  renderDSSV();
}

// Hàm xoá sinh viên
function xoaSv(maSv) {
  var viTri = DSSV.findIndex(function (item) {
    return item.ma == maSv;
  });
  if (viTri != -1) {
    DSSV.splice(viTri, 1);
    var jsonDSSV = JSON.stringify(DSSV);
    localStorage.setItem("DSSV_JSON", jsonDSSV);
    renderDSSV();
  }
}

// Hàm sửa sinh viên
function suaSv(maSv) {
  var viTri = DSSV.findIndex(function (item) {
    return item.ma == maSv;
  });
  if (viTri != -1) {
    var sv = DSSV[viTri];
    document.getElementById("txtMaSV").value = sv.ma;
    document.getElementById("txtTenSV").value = sv.ten;
    document.getElementById("txtEmail").value = sv.email;
    document.getElementById("txtPass").value = sv.matKhau;
    document.getElementById("txtDiemToan").value = sv.diemToan;
    document.getElementById("txtDiemLy").value = sv.diemLy;
    document.getElementById("txtDiemHoa").value = sv.diemHoa;
    document.getElementById("txtMaSV").setAttribute("readonly", true);
  }
}

// Hàm cập nhật sinh viên
function capNhatSv() {
  var sv = layThongTinTuForm();
  var viTri = DSSV.findIndex(function (item) {
    return item.ma == sv.ma;
  });
  if (viTri != -1) {
    DSSV[viTri] = sv;
    var jsonDSSV = JSON.stringify(DSSV);
    localStorage.setItem("DSSV_JSON", jsonDSSV);
    renderDSSV();
  }
}

// Gọi hàm renderDSSV để hiển thị danh sách sinh viên khi load trang
renderDSSV();
