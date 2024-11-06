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

    thuNhapChiuThue =  thuNhapCaNam - 4 - (soNguoiPhuThuoc*1.6);

    if(thuNhapChiuThue <= 60){
        thuNhapCaNhan = thuNhapChiuThue * 0.05;
    }
    else if(60<thuNhapChiuThue <=120 ){
        thuNhapCaNhan = thuNhapChiuThue * 0.05 + (thuNhapChiuThue - 60)*0.1;
    }
    else if(120<thuNhapChiuThue <=240 ){
        thuNhapCaNhan = thuNhapChiuThue * 0.05 + thuNhapChiuThue * 0.1 + (thuNhapChiuThue - 120) * 0.15;
    }
    else if(210<thuNhapChiuThue <=384 ){
        thuNhapCaNhan = thuNhapChiuThue * 0.05 + thuNhapChiuThue * 0.1 + thuNhapChiuThue * 0.15 + (thuNhapChiuThue - 240) * 0.2;
    }
    else if(384<thuNhapChiuThue <=624 ){
        thuNhapCaNhan = thuNhapChiuThue * 0.05 + thuNhapChiuThue * 0.1 + thuNhapChiuThue * 0.15 + thuNhapChiuThue * 0.2 + (thuNhapChiuThue - 384) * 0.25;
    }
    else if(624<thuNhapChiuThue <=960){
        thuNhapCaNhan = thuNhapChiuThue * 0.05 + thuNhapChiuThue * 0.1 + thuNhapChiuThue * 0.15 + thuNhapChiuThue * 0.2 + thuNhapChiuThue * 0.25 + (thuNhapChiuThue - 624) * 0.3;
    }
    else{
        thuNhapCaNhan = thuNhapChiuThue * 0.05 + thuNhapChiuThue * 0.1 + thuNhapChiuThue * 0.15 + thuNhapChiuThue * 0.2 + thuNhapChiuThue * 0.25 + thuNhapChiuThue * 0.3 + (thuNhapChiuThue - 960)*0.35;
    }
    document.querySelector("#ketQuaThueThuNhap").innerHTML = `Họ và tên: ${hoTen} <br> Thu nhập cá nhân: ${thuNhapCaNhan}`;
};

/**
 * BÀI TẬP TÍNH TIỀN CÁP
 */

function toggleConnectionField() {
    let customerType = document.getElementById("customerType").value;
    let connectionField = document.getElementById("soKetNoi");
    if (customerType === "business") {
        connectionField.disabled = false;
    } else {
        connectionField.disabled = true;
    }
}

function tinhTienCap() {
    let maKhachHang = document.getElementById("maKhachHang").value;
    let customerType = document.getElementById("customerType").value;
    let soKetNoi = parseInt(document.getElementById("soKetNoi").value);
    let soKenhCaoCap = parseInt(document.getElementById("soKenhCaoCap").value);

    let total = 0;
    let resultText = "Mã khách hàng: " + maKhachHang + "<br>";

    if (customerType === "residential") {
        total = 4.5 + 20.5 + (7.5 * soKenhCaoCap);
        resultText += "Loại khách hàng: Nhà dân<br>";
        resultText += "Phí xử lý hóa đơn: 4.5$<br>";
        resultText += "Phí dịch vụ cơ bản: 20.5$<br>";
        resultText += "Phí kênh cao cấp: " + (7.5 * soKenhCaoCap) + "$<br>";
    } else if (customerType === "business") {
        total = 15 + 75 + (5 * (soKetNoi - 10)) + (50 * soKenhCaoCap);
        resultText += "Loại khách hàng: Doanh nghiệp<br>";
        resultText += "Phí xử lý hóa đơn: 15$<br>";
        resultText += "Phí dịch vụ cơ bản: 75$<br>";
        resultText += "Phí kết nối thêm: " + (5 * (soKetNoi - 10)) + "$<br>";
        resultText += "Phí kênh cao cấp: " + (50 * soKenhCaoCap) + "$<br>";
    }

    resultText += "Tổng tiền cáp: " + total + "$";
    document.getElementById("result").innerHTML = resultText;
}