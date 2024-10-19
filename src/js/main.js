/**
 * BÀI TẬP QUẢN LÝ SINH VIÊN
 */

const ketQua = () =>{
    console.log("test");

    let diemHD = +document.querySelector("#diemHoiDong").value;
    let diemMon1 = +document.querySelector("#diemMon1").value;
    let diemMon2 = +document.querySelector("#diemMon2").value;
    let diemMon3 = +document.querySelector("#diemMon3").value;
    let khuVuc = document.querySelector("#khuVuc").value;
    let doiTuong = document.querySelector("#doiTuong").value;

    let tongDiem=0;
    let diemUuTienKhuVuc = 0;
    let diemUuTienDoiTuong = 0;

    // Điểm ưu tiên khu vực
    if (khuVuc === "A") {
        diemUuTienKhuVuc = 2;
    } else if (khuVuc === "B") {
        diemUuTienKhuVuc = 1;
    } else if (khuVuc === "C") {
        diemUuTienKhuVuc = 0.5;
    }

    // Điểm ưu tiên đối tượng
    if (doiTuong === "1") {
        diemUuTienDoiTuong = 2.5;
    } else if (doiTuong === "2") {
        diemUuTienDoiTuong = 1.5;
    } else if (doiTuong === "3") {
        diemUuTienDoiTuong = 1;
    }

    tongDiem = (diemMon1+ diemMon2+ diemMon3 + diemUuTienDoiTuong + diemUuTienKhuVuc);
    let ketQua = "";
    if(diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0){
        ketQua = "Rớt vì có 1 môn bằng 0";
    }
    else if (tongDiem >= diemHD){
        ketQua = "Đậu";
    }
    else{
        ketQua = "Rớt - không đủ điểm chuẩn";
    }
    document.querySelector("#ketQua").innerHTML = "Tổng điểm: " + tongDiem + "<br> Kết quả: " + ketQua;
};

/**
 * TÍNH TIỀN ĐIỆN
 */
const tienDien = () => {
    console.log("test");
    let ten = document.querySelector("#nhapTen").value;
    let soKW = +document.querySelector("#nhapSoKW").value;

    let tongTien = 0;
    if (soKW == 50){
        tongTien = 50 * 500;
    }
    else if (soKW <= 100){
        tongTien = 50 * 500 + (soKW -50) * 650;
    }
    else if (soKW <=200){
        tongTien = 50 * 500 + 50 * 650 + (soKW-100)*850;
    }
    else if (soKW <= 250){
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200)*1100;
    }
    else{
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW-350)*1300;
    }
    document.querySelector("#ketQuaTienDien").innerHTML = `Tên: ${ten} <br> Tổng tiền điện: ${tongTien}`;
};

/**
 * TÍNH THUẾ THU NHẬP CÁ NHÂN
 */
const thueCaNhan = () => {
    console.log("test");
    let hoTen = document.querySelector("#hoTen").value;
    let thuNhapCaNam = +document.querySelector("#thuNhapNam").value;
    let soNguoiPhuThuoc = +document.querySelector("#phuThuoc").value;

    let thuNhapChiuThue = 0;
    let thuNhapCaNhan = 0;
}