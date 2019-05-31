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

//create account request
var accountInfo = ["#userNameSignUp", "#exampleFormControlSelect1", "#passwordSignUp"];
function registerAccount(){
    $.ajax({
        type: 'POST',
        url: 'localhost:3000/register',
        data: accountInfo,
        dataType: "text",
        success: function(resultData) { alert("Save Complete") }
  });  
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

    $('#cancelbtnSaveCustomer').click(function() {
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

    $('#cancelbtnSaveTst').click(function() {
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

    $('#cancelbtnCarStatus').click(function() {
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

    $('#cancelbtnDtm').click(function() {
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

    $('#cancelbtnEbbc').click(function() {
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

    $('#cancelbtnEbsc').click(function() {
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

    $('#cancelbtnRp').click(function() {
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

    $('#cancelbtnEp').click(function() {
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

    showExportBillForSellCar();

    $(".logoutbtn").click(function () {
        showLogin();
    })

})