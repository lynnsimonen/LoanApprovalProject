$(document).ready(function () {

    //button to start loan app
    $("button#loanAppStart").on("click", loanAppStart);

    //button to process the loan app: salary, credit score and job length
    $("button#loanAppDecide").on("click", loanAppDecide);

    // start out with hiding the input and output until required
    //$("div#input").hide();
    $("h4").hide();
    $(".input").hide();


    $("h5").hide();
    $("output#loanApprove").hide();
    $("output#loanDenyCS").hide();
    $("output#loanDenyJob").hide();
    $("button#loanAppDecide").hide();

    //function button for loan application input
    function loanAppStart() {
        //SHOW THE LINES OF HTML NEEDED TO APPLY
        $("h4").show();
        $(".input").show();
        $("button#loanAppDecide").show();
        //HIDE LINES NOT NEEDED (ALSO SET UP FOR REPEATED APPLICATIONS)
        $("h5").hide();
        $("output#loanApprove").hide();
        $("output#loanDenyCS").hide();
        $("output#loanDenyJob").hide();
    }

    function loanAppDecide() {
        //CAPTURE THE INPUT WITH VARIABLES
        let salary = parseFloat($("input#salary").val());
        let creditScore = parseFloat($("input#creditscore").val());
        let jobHistory = parseFloat($("input#job").val());

        //begin determining whether loan is approved or not with if else statements
        //SET OUTPUT AT EACH DECISION SECTION (AND HIDE/SHOW ANY NECESSARY LINES)
        if (salary >= 40000) {
            if (creditScore >= 600) {
                $("button#loanAppDecide").hide();
                $("h4").hide();
                $(".input").hide();
                $("output#loanApprove").show();
            }
            else if (jobHistory > 12) {
                $("button#loanAppDecide").hide();
                $("h4").hide();
                $(".input").hide();
                $("output#loanApprove").show();
            }
            else {
                $("button#loanAppDecide").hide();
                $("h4").hide();
                $(".input").hide();
                $("output#loanDenyJob").show();
            }
        }
        else if (salary < 40000) {
            if (creditScore < 600) {
                $("button#loanAppDecide").hide();
                $("h4").hide();
                $(".input").hide();
                $("output#loanDenyCS").show();
            }
            else if (jobHistory <= 12) {
                $("button#loanAppDecide").hide();
                $("h4").hide();
                $(".input").hide();
                $("output#loanDenyJob").show();
            }
            else {
                $("button#loanAppDecide").hide();
                $("h4").hide();
                $(".input").hide();
                $("output#loanApprove").show();
            }
        }

    }

})