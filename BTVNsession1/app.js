alert("Hello!");
let vatly = prompt("Nhập điểm vật lý");
let hoahoc = prompt("Nhập điểm hóa học");
let sinhhoc = prompt("Nhập điểm sinh học");
let tongdiem = Number(vatly)+Number(hoahoc)+Number(sinhhoc);
let diemtb = (tongdiem/3);
alert(`Điểm trung bình ba môn là ${diemtb}
Tổng điểm ba môn là ${tongdiem}`);
//Đổi độ C sang độ F
alert("Đổi độ C sang độ F");
let doC = prompt("Nhập độ C");
let doF = Number(doC)*1.8 +32;
alert("Độ F là "+doF);
//Tính chu vi và diện tich hình tròn
alert("Tính chu vi và diện tích hình tròn");
let R = prompt("Nhập bán kính hình tròn");
let C = 2*3.14*R;
let S = 3.14*R*R;
alert(`Chu vi hình tròn là ${C}
Diện tích hình tròn là ${S}`);

