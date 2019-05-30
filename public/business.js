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
    $('#signUpBtn').click(function (){
        showSignUp();
    })
}

// sign up session
function showSignUp() {
    hideAll();
    $('#signUpSection').show();

    $('#cancelButton').click(function (){
        showLogin();
    })
    $('#signUpButton1').click(function (){
        showLogin();
    })
}

// registration
function showInfoOwner() {
    hideAll()
    $('#registration').show();
    $('#saveinfoOwner').hide();
    $('#saveinfoOwnerActive').show();
    $('#saveinfoMotoBikeActive').hide();
    $('#saveinfoMotoBike').show();
    $('#inforMotobikeForm').hide();
    $('#inforOwnerForm').show();

    $('#saveinfoMotoBike').click(function(){
        hideAll();
        showInforMotobike();
    });
    $('#cancelbtnSaveOwner').click(function(){
    })
}

function showInforMotobike() {
    hideAll();
    $('#registration').show();
    $('#saveinfoOwnerActive').hide();
    $('#saveinfoOwner').show();
    $('#saveinfoMotoBikeActive').show();
    $('#saveinfoMotoBike').hide();
    $('#inforOwnerForm').hide();
    $('#inforMotobikeForm').show();

    $('#saveinfoOwner').click(function(){ 
        hideAll();
        showInfoOwner()
    });
}

//seller section
var seller1 = ["#saveinfoCustomer", "#saveinfoTransactionActive", "#inforTransactionForm"];
var seller2 = ["#saveinfoCustomerActive", "#saveinfoTransaction", "#inforCustomerForm"];

function showInforCustomer() {
    hideAll();
    $('#seller').show();
    hideElements(seller1);
    showElements(seller2);

    $('#saveinfoTransaction').click(function(){
        hideAll();
        showInforTransaction();
    });
}

function showInforTransaction() {
    hideAll();
    $('#seller').show();
    hideElements(seller2);
    showElements(seller1);

    $('#saveinfoCustomer').click(function(){
        hideAll();
        showInforCustomer();
    });
}

//technical section
var technical1 = ["#saveinfoStatus", "#saveinfoToFixActive"];
var technical2 = ["#saveinfoStatusActive", "#saveinfoToFix", "#inforCarStatus"] ;

function showInforStatus() {
    hideAll();
    $('#technical').show();
    hideElements(technical1);
    showElements(technical2);
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
function showDeteminePrice(){
    hideAll();
    $('#manager').show();
    hideElements(manager4);
    showElements(manager3);

    handleNavbtnForManager();
}

var manager5 = ["#fixPlan", "#deteminePrice", "#exportBillForBuyCarActive", "#exportBillForSellCar", "#report",
 "#exportPrice", "#exportBillBuyCar"];
var manager6 = ["#fixPlanActive", "#deteminePriceActive", "#exportBillForBuyCar", "#exportBillForSellCarActive", "#reportActive", 
"#exportPriceActive", "#detemine", "#exportBillSellCar", "#expPrice", "#reportSession"];
function showExportBillForBuyCar(){
    hideAll();
    $('#manager').show();
    hideElements(manager6);
    showElements(manager5);

    handleNavbtnForManager();
}

var manager7 = ["#fixPlan", "#deteminePrice", "#exportBillForBuyCar", "#exportBillForSellCarActive", "#report", "#exportPrice", 
"#exportBillSellCar"];
var manager8 = ["#fixPlanActive", "#deteminePriceActive", "#exportBillForBuyCarActive", "#exportBillForSellCar", "#reportActive", 
"#exportPriceActive", "#detemine", "#exportBillBuyCar", "#expPrice", "#reportSession"];
function showExportBillForSellCar(){
    hideAll();
    $('#manager').show();
    hideElements(manager8);
    showElements(manager7);

    handleNavbtnForManager();
}

var manager9 = ["#fixPlan", "#deteminePrice", "#exportBillForBuyCar", "#exportBillForSellCar", "#reportActive", "#exportPrice", 
"#reportSession"];
var manager10 = ["#fixPlanActive", "#deteminePriceActive", "#exportBillForBuyCarActive", "#exportBillForSellCarActive", "#report", 
"#exportPriceActive", "#exportPriceActive", "#detemine", "#exportBillBuyCar", "#expPrice", "#exportBillSellCar"];
function showReport(){
    hideAll();
    $('#manager').show();
    hideElements(manager10);
    showElements(manager9);

    handleNavbtnForManager();
}

var manager11 = ["#fixPlan", "#deteminePrice", "#exportBillForBuyCar", "#exportBillForSellCar", "#report", "#exportPriceActive", "#expPrice"];
var manager12 = ["#fixPlanActive", "#deteminePriceActive", "#exportBillForBuyCarActive", "#exportBillForSellCarActive",
 "#reportActive", "#exportPrice", "#detemine", "#exportBillBuyCar", "#reportSession", "#exportBillSellCar"];
function showExportPrice(){
    hideAll();
    $('#manager').show();
    hideElements(manager12);
    showElements(manager11);

    handleNavbtnForManager() ;
}

function handleNavbtnForManager() {
    $('#deteminePrice').click(function() {
        showDeteminePrice();
    });

    $('#exportBillForBuyCar').click(function() {
        showExportBillForBuyCar();
    });

    $('#exportBillForSellCar').click(function() {
        showExportBillForSellCar();
    });

    $('#report').click(function() {
        showReport();
    });

    $('#exportPrice').click(function() {
        showExportPrice();
    });

}

function hideElements(arr){
    arr.forEach(x => {
        $(x).hide();
    })
}

function showElements(arr){
    arr.forEach(x => {
        $(x).show();
    })
}

// var inforOwnerAtt = ["#userNameSaveInfor", "#CMND", "#address", "#phone", "#email", "#carID"];
// function blankValue(arr) {
//    arr.forEach(x => {
//     $(x).removeAttr('value');
//    })
// }

$(document).ready(() => {

    showLogin();
    
    $(".logoutbtn").click(function(){
        showLogin();
    })
    
})