function hideAll() {
    $('#signInSection').hide();
    $('#signUpSection').hide();
    $('#registration').hide();
    $('#seller').hide();
    $('#technical').hide();
    $('#manager').hide();
}

// login session
function showLogin() {
    hideAll();
    $('#signInSection').show();

    //login session
    $('#signUpBtn').click(function () {
        showSignUp();
    })

    $('#loginButton1').click(function () {
        signIn();
    })
}

// sign up session
function showSignUp() {
    hideAll();
    $('#signUpSection').show();

    $('#cancelButton').click(function () {
        showLogin();
    })
    $('#signUpButton1').click(function () {
        registerAccount();

    })

}

// registration
var inforOwnerAtt = ["#userNameSaveInfor", "#CMND", "#address", "#phone", "#email", "#carID"];
function showInfoOwner() {
    hideAll()
    $('#registration').show();
    $('#saveinfoOwner').hide();
    $('#saveinfoOwnerActive').show();
    $('#saveinfoMotoBikeActive').hide();
    $('#saveinfoMotoBike').show();
    $('#inforMotobikeForm').hide();
    $('#inforOwnerForm').show();
    //getLastCarID();

    $('#saveinfoMotoBike').click(function () {
        hideAll();
        showInforMotobike();
    });
    $('#cancelbtnSaveOwner').click(function () {
        $("#userNameSaveInfor").val('');
        blankValue(inforOwnerAtt);
    })


}

var inforMotoAtt = ["#bikeID", "#carType", "mtbID", "#price", "#OwnerID"];
function showInforMotobike() {
    hideAll();
    $('#registration').show();
    $('#saveinfoOwnerActive').hide();
    $('#saveinfoOwner').show();
    $('#saveinfoMotoBikeActive').show();
    $('#saveinfoMotoBike').hide();
    $('#inforOwnerForm').hide();
    $('#inforMotobikeForm').show();
    //getLastOwnerID();

    $('#saveinfoOwner').click(function () {
        hideAll();
        showInfoOwner()
    });
    $('#cancelbtnSaveBike').click(function () {
        $("#carType").val('');
        blankValue(inforMotoAtt);
    })
}

//seller section
var seller1 = ["#saveinfoCustomer", "#saveinfoTransactionActive", "#inforTransactionForm"];
var seller2 = ["#saveinfoCustomerActive", "#saveinfoTransaction", "#inforCustomerForm"];

var inforCustomerAtt = ["#customerID", "#customerName", "#customerCMND", "#customerAddress", "#customerPhone", "#customerEmail", "#customerRequest"]

function showInforCustomer() {
    hideAll();
    $('#seller').show();
    hideElements(seller1);
    showElements(seller2);

    $('#saveinfoTransaction').click(function () {
        hideAll();
        showInforTransaction();
    });

    $('#cancelbtnSaveCustomer').click(function () {
        $("#customerID").val('');
        blankValue(inforCustomerAtt);
    })
}

var inforTransactionAtt = ["#customerIDtst", "#tstCMNDsearch", "#tstIDcar", "#tstPrice", "#tstDate"]

function showInforTransaction() {
    hideAll();
    $('#seller').show();
    hideElements(seller2);
    showElements(seller1);

    $('#saveinfoCustomer').click(function () {
        hideAll();
        showInforCustomer();
    });

    $('#cancelbtnSaveTst').click(function () {
        $("#customerIDtst").val('');
        blankValue(inforTransactionAtt);
    })
}

//technical section
var technical1 = ["#saveinfoStatus", "#saveinfoToFixActive"];
var technical2 = ["#saveinfoStatusActive", "#saveinfoToFix", "#inforCarStatus"];

var inforStatusAtt = ["#status", "#minPrice", "#maxPrice", "#sttCarID"];

function showInforStatus() {
    hideAll();
    $('#technical').show();
    hideElements(technical1);
    showElements(technical2);

    $('#cancelbtnCarStatus').click(function () {
        $("#status").val('');
        blankValue(inforStatusAtt);
    })
}

//manager section
var manager1 = ["#fixPlanActive", "#deteminePrice", "#exportBillForBuyCar", "#exportBillForSellCar", "#report", "#exportPrice"];
var manager2 = ["#fixPlan", "#deteminePriceActive", "#exportBillForBuyCarActive", "#exportBillForSellCarActive",
    "#reportActive", "#exportPriceActive"];
function showPlanActive() {

}

var manager3 = ["#fixPlan", "#deteminePriceActive", "#exportBillForBuyCar", "#exportBillForSellCar", "#report",
    "#exportPrice", "#detemine"];
var manager4 = ["#fixPlanActive", "#deteminePrice", "#exportBillForBuyCarActive", "#exportBillForSellCarActive",
    "#reportActive", "#exportPriceActive", "#exportBillBuyCar", "#exportBillSellCar", "#expPrice", "#reportSession"];

var deteminePriceAtt = ["#dtmCarID", "#dtmPrice"]
function showDeteminePrice() {
    hideAll();
    $('#manager').show();
    hideElements(manager4);
    showElements(manager3);

    handleNavbtnForManager();

    $('#cancelbtnDtm').click(function () {
        $("#dtmCarID").val('');
        blankValue(inforStatusAtt);
    })
}

var manager5 = ["#fixPlan", "#deteminePrice", "#exportBillForBuyCarActive", "#exportBillForSellCar", "#report",
    "#exportPrice", "#exportBillBuyCar"];
var manager6 = ["#fixPlanActive", "#deteminePriceActive", "#exportBillForBuyCar", "#exportBillForSellCarActive", "#reportActive",
    "#exportPriceActive", "#detemine", "#exportBillSellCar", "#expPrice", "#reportSession"];
function showExportBillForBuyCar() {
    hideAll();
    $('#manager').show();
    hideElements(manager6);
    showElements(manager5);

    handleNavbtnForManager();

    $('#cancelbtnEbbc').click(function () {
        $("#ebbcDate").val('');
        // $("#ebbcDateRadio").checked = false;
        // $("#ebbcMonthRadio").checked = false;
    })
}

var manager7 = ["#fixPlan", "#deteminePrice", "#exportBillForBuyCar", "#exportBillForSellCarActive", "#report", "#exportPrice",
    "#exportBillSellCar"];
var manager8 = ["#fixPlanActive", "#deteminePriceActive", "#exportBillForBuyCarActive", "#exportBillForSellCar", "#reportActive",
    "#exportPriceActive", "#detemine", "#exportBillBuyCar", "#expPrice", "#reportSession"];
function showExportBillForSellCar() {
    hideAll();
    $('#manager').show();
    hideElements(manager8);
    showElements(manager7);

    handleNavbtnForManager();

    $('#cancelbtnEbsc').click(function () {
        $("#ebscDate").val('');
        $("#ebscDateRadio").prop('checked', false)
        $("#ebscMonthRadio").prop('checked', false)
        // $("#ebscDateRadio").checked = false;
        // $("#ebscMonthRadio").checked = false;
    })
}

var manager9 = ["#fixPlan", "#deteminePrice", "#exportBillForBuyCar", "#exportBillForSellCar", "#reportActive", "#exportPrice",
    "#reportSession"];
var manager10 = ["#fixPlanActive", "#deteminePriceActive", "#exportBillForBuyCarActive", "#exportBillForSellCarActive", "#report",
    "#exportPriceActive", "#exportPriceActive", "#detemine", "#exportBillBuyCar", "#expPrice", "#exportBillSellCar"];
function showReport() {
    hideAll();
    $('#manager').show();
    hideElements(manager10);
    showElements(manager9);

    handleNavbtnForManager();

    $('#cancelbtnRp').click(function () {
        $("#rpcDate").val('');
        // $("#ebbcDateRadio").checked = false;
        // $("#ebbcMonthRadio").checked = false;
    })
}

var manager11 = ["#fixPlan", "#deteminePrice", "#exportBillForBuyCar", "#exportBillForSellCar", "#report", "#exportPriceActive", "#expPrice"];
var manager12 = ["#fixPlanActive", "#deteminePriceActive", "#exportBillForBuyCarActive", "#exportBillForSellCarActive",
    "#reportActive", "#exportPrice", "#detemine", "#exportBillBuyCar", "#reportSession", "#exportBillSellCar"];
function showExportPrice() {
    hideAll();
    $('#manager').show();
    hideElements(manager12);
    showElements(manager11);

    handleNavbtnForManager();

    $('#cancelbtnEp').click(function () {
        $("#epDate").val('');
        $("#epCarID").val('');
        // $("#ebbcDateRadio").checked = false;
        // $("#ebbcMonthRadio").checked = false;
    })
}

function handleNavbtnForManager() {
    $('#deteminePrice').click(function () {
        showDeteminePrice();
    });

    $('#exportBillForBuyCar').click(function () {
        showExportBillForBuyCar();
    });

    $('#exportBillForSellCar').click(function () {
        showExportBillForSellCar();
    });

    $('#report').click(function () {
        showReport();
    });

    $('#exportPrice').click(function () {
        showExportPrice();
    });

}

function hideElements(arr) {
    arr.forEach(x => {
        $(x).hide();
    })
}

function showElements(arr) {
    arr.forEach(x => {
        $(x).show();
    })
}

function blankValue(arr) {
    arr.forEach(x => {
        $(x).val('');
    })
}

$(document).ready(() => {

    showInfoOwner();

    $(".logoutbtn").click(function () {
        showLogin();
    })

})

// ############## API request #############

//create account request
function registerAccount() {
    var tendangnhap = $('#userNameSignUp').val();
    var bophan = $('#exampleFormControlSelect1 option:selected').text();
    var matKhau = $('#passwordSignUp').val();
    $.ajax({
        type: 'POST',
        url: 'localhost:3000/register/registerAccount',
        data: {
            tendangnhap: tendangnhap,
            bophan: bophan,
            matkhau: matkhau
        },
        dataType: "json",
        success: function (resultData) {
            alert("Save Complete");
            showLogin();
        }
    });
}

function signIn() {
    var tendangnhap = $('#userName').val();
    var matkhau = $('#password').val();
    $.ajax({
        type: 'GET',
        url: 'localhost:3000/signIn',
        data: {
            tendangnhap: tendangnhap,
            matkhau: matkhau
        },
        dataType: "json",
        success: function (resultData) {
            if (resultData == null) {
                alert("Đăng nhập không thành công!");
            }
            else {
                if (resultData.bophan == "Tiếp đón") {
                    showInfoOwner();
                }
                else if (resultData.bophan == "Bán xe") {
                    showInforCustomer();
                }
                else if (resultData.bophan == "Kĩ thuật") {
                    showInforStatus();
                }
                showDeteminePrice();
            }
        }
    });
}

function saveInfoOwner() {
    var hoTen = $('#userNameSaveInfor').val();
    var cmnd = $('#CMND').val();
    var diaChi = $('#address').val();
    var dienThoai = $('#phone').val();
    var email = $('#email').val();
    // ma so xe tu generate
    // var maSoXe= $('#carID').val();

    $.ajax({
        type: 'POST',
        url: 'localhost:3000/saveInfoOwner',
        data: {
            hoten: hoTen,
            cmnd: cmnd,
            diachi: diaChi,
            sdt: dienThoai,
            email: email
        },
        dataType: "json",
        success: function (resultData) {
            alert("Save Complete");
        }
    });
}

var lastCarID = 0;
var generateCarID = 0;
function getLastCarID(){
    $.ajax({
        type: 'GET',
        url: 'localhost:3000/getLastCarID',
        dataType: "String",
        success: function (resultData) {
            console.log("getLastCarID success!");
            this.lastCarID = parseInt(resultData);
            this.generateCarID = lastCarID + 1;
            $("#carID").val(this.generateCarID);
        }
    });
}

var lastOwnerID = 0;
var generateOwnerID = 0;
function getLastOwnerID() {
    $.ajax({
        type: 'GET',
        url: 'localhost:3000/getLastOwnerID',
        dataType: "String",
        success: function (resultData) {
            console.log("getLastOwnerID success!");
            this.lastOwnerID = parseInt(resultData);
            //this.generateOwnerID = lastOwnerID + 1;
           
            $("#mtbID").val(this.generateCarID);
            $("#OwnerID").val(this.lastOwnerID);
        }
    });
}

function saveInfoMotoBike() {
    // mtbID tu generate
    //var mtbID = $('#mtbID').val();
    var loai = $('#carType').val();
    var biensoxe = $('#bikeID').val();
    var giamua = $('#price').val();
    var email = $('#OwnerID').val();

    var maSoXe = generateCarID;
    var maNguoiBan = this.lastOwnerID;

    $.ajax({
        type: 'POST',
        url: 'localhost:3000/saveInfoMotoBike',
        data: {
            hoten: hoTen,
            cmnd: cmnd,
            diachi: diaChi,
            sdt: dienThoai,
            email: email,
            maSoXe: maSoXe,
            maNguoiBan: maNguoiBan
        },
        dataType: "json",
        success: function (resultData) {
            alert("Save Complete");
        }
    });
}



