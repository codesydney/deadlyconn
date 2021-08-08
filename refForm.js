
//Grabbing the HTML button elements
    // -- Section 1 related - radio buttons
const referProgRB = document.querySelectorAll('input[name="referredProg"]');
let progReferred; //Variable for holding the value of selection
for(const rb of referProgRB) {
    if(rb.checked)
    {
        progReferred = rb.value;
        break;
    }
}
const referProgCB = document.querySelectorAll('input[name="progRefMiscInfo"]:checked');
let selectReferProgCB = []; //Array for holding the checked values
referProgCB.forEach((checkbox)=>{selectReferProgCB.push(checkbox.value);});

    // -- Section 2 and 3 related --
let newRefFormButton = document.getElementById('newRefFormBtn');
let referralDate = document.getElementById('refDate');
let referralName = document.getElementById('refName');
let referralAgency = document.getElementById('refAgency');
let referralPosition = document.getElementById('refPosition');
let referralPhone = document.getElementById('refPhone');
let referralEmail = document.getElementById('refEmail');
let clientConsent = document.getElementById('clientConsent');
let clientName = document.getElementById('clientName');
let clientDOB = document.getElementById('clientDOB');
let clientCultIdent = document.getElementById('clientCultIdent');
let clientAdd = document.getElementById('clientAdd');
let clientPhone =document.getElementById('clientPhone');
let submitBtn = document.getElementById('submitBtn');
let targettableArea = document.getElementById('tableRefList');
let tempRefForm = document.getElementById('referralForm');
let tempRefList = document.getElementById('refTable');
let tempTitleButt = document.getElementById('titleAndBut');
let tempString; //Variable to hold the html string for rendering

    // -- Section 4 related --
let childInfoDetails = document.getElementById('childrenDetails');
let childInfoDCJCaseWorker = document.getElementById('DCJCaseworker/Office/Contact');
let childInfoRefReason = document.getElementById('referralReasons');

    // -- Section 5 related --
const section5 = document.querySelectorAll('input[name="supportNeeds"]:checked');
let childAddInfo = []; //Array for storing selected values
section5.forEach((checkbox)=>{childAddInfo.push(checkbox.value);});

let otherChildInfo = document.getElementById('notesSection1');

    // -- Section 6 related --
const justiceInfoRB = document.querySelectorAll('input[name="JusticeInfo"]');
let selectedJusticeInfo;
for(const jIRB of justiceInfoRB){
    if(jIRB.checked){
        selectedJusticeInfo = jIRB.value;
        break;
    }
}
let periodIncarcer = document.getElementById('periodIncarceration');
let expectedRelease = document.getElementById('expectedRelease');
let nextCourtDate = document.getElementById('nextCourtDate');
const seekingBailRB = document.querySelectorAll('input[name="SeekingBail"]');
let selectedSeekingBail; //Variable for holding the 
for(const sBRB of seekingBailRB){
    if(sBRB.checked){
        selectedSeekingBail = sBRB.value;
        break;
    }
}
let bailMinimumSet = document.getElementById('bailMinimum');
let locationJustice = document.getElementById('locationJustice');

const bailTypeRB = document.querySelectorAll('input[name="BailType"]');
let selectedBailType; //Variable for holding the bail type
for(const sBT of bailTypeRB){
    if(sBT.checked){
        selectedBailType = sBT.value;
        break;
    }
}

const orderUponReleaseRB = document.querySelectorAll('input[name="OrderUponRelease"]');
let selectedOrderUponRelease; //Variable for holding the info on 'Order upon release'
for(const oUR of orderUponReleaseRB){
    if(oUR.checked){
        selectedOrderUponRelease = oUR.value;
        break;
    }
}

let typeOfOrder6 = document.getElementById('typeOfOrder');
let commCorrJJOffice = document.getElementById('commCorrJjOffice');
let nameOfficerIncharge = document.getElementById('officerInchargeName');
let bailConditions6 = document.getElementById('bailConditions');
let lawyerDetails = document.getElementById('lawyerDetails');

    // -- Section 7 related --
const riskFactorADVORB = document.querySelectorAll('input[name="riskFactorADVO"]');
let selectedRiskFactorADVO;
for(const aDVO of riskFactorADVORB){
    if(aDVO.checked){
        selectedRiskFactorADVO = aDVO.value;
        break;
    }
}
let riskFactors = document.getElementById('riskDetails');

    // -- Section 8 related --
const agencySupportRB = document.querySelectorAll('input[name="OtherAgencies"]');
let selectedAgencySupport; //Variable for storing the selected radiobutton value
for(const otherAgency of agencySupportRB){
    if(otherAgency.checked){
        selectedAgencySupport = otherAgency.value;
        break;
    }
}
let agencySupportNumber = document.getElementById('numberOfAgencies');
let agencySupportDetails = document.getElementById('agenciesInvolved');

    // -- Section 9 related --
let otherInform9 = document.getElementById('otherInfo9');

    // -- Section 10 related --



    // -- Section 11 related --
let formDateTimeProcess = document.getElementById('datetimeIntakeOutcome');

const clientRatingRB = document.querySelectorAll('input[name="clientRating"]');
let selectedClientRating; //Variable for storing the selected radiobutton value
for(const cRating of clientRatingRB){
    if(cRating.checked){
        selectedClientRating = cRating.value;
        break;
    }
}

const previousClientRB = document.querySelectorAll('input[name="previousClient"]');
let selectedPreviousClient; //Variable for storing the selected radiobutton value
for(const prevClient of previousClientRB){
    if(prevClient.checked){
        selectedPreviousClient = prevClient.value;
        break;
    }
}

const eligibleCriteriaRB = document.querySelectorAll('input[name="meetsEligibility"]');
let selectedEligibleCriteria;
for(const eligibleCrit of eligibleCriteriaRB){
    if(eligibleCrit.checked){
        selectedEligibleCriteria = eligibleCrit.value;
        break;
    }
}

const inCatchmentAreaRB = document.querySelectorAll('input[name="inCatchment"]');
let selectedInCatchment;
for(const inCatch of inCatchmentAreaRB){
    if(inCatch.checked){
        selectedInCatchment = inCatch.value;
        break;
    }
}

const clientAcceptedRB = document.querySelectorAll('input[name="clientAccepted"]');
let selectedClientAccepted;
for(const clientAccept of clientAcceptedRB){
    if(clientAccept.checked){
        selectedClientAccepted = clientAccept.value;
        break;
    }
}

let allocatedTo = document.getElementById('allocatedTo');
let allocatedDateTime = document.getElementById('allocationDateTime');

const nominatedPersonNotified = document.querySelectorAll('input[name="notifyNominatedPerson"]');
let nominPersNotify;
for(const nomPersNotify of nominatedPersonNotified){
    if(nomPersNotify.checked){
        nominPersNotify = nomPersNotify.value;
        break;
    }
    else{nominPersNotify = 'Nominated person not notified';}    
}

const notAcceptedClientRB = document.querySelectorAll('input[name="notAcceptedClient"]');
let selectedNotAccepted;
for(notAccepted of notAcceptedClientRB){
    if(notAccepted.checked){
        selectedNotAccepted = notAccepted.value;
        break;
    }
}

let reasonsForNonAcceptance = document.getElementById('notAcceptedClientReasons');
let furtherReasonNonAcceptance = document.getElementById('furtherReasonNonAccept');

const followupReferrer = document.querySelectorAll('input[name="followupWithReferrer"]');
let followUpRef;
for(const followup of followupReferrer){
    if(followup.checked){
        followUpRef = followup.value;
    }
    else{followUpRef = 'Not followed up with Referrer';}
}

function createTableHtml(tempNum, tempDate, tempAgency, tempName, clientName, clientPhone){
    let temphtml = `<tr>           
                        <th scope="row">${tempNum}</th>
                        <td>${tempDate}</td>
                        <td>${tempAgency}</td>
                        <td>${tempName}</td>
                        <td>${clientName}</td>
                        <td>${clientPhone}</td>
                    </tr>`;
    return temphtml;
}

class referralFormClass {
    constructor(currFormNum=0){
        this._currFormNum = currFormNum;
        this._refArray = []; //The data object array
        this._refHtml = []; //The template literal array
    }

    //getter function for formNum
    get currFormNum(){
        return this._currFormNum;
    }

    //getter function for Referral object array
    get refArray(){
        return this._refArray;
    }

    get refHtml(){
        return this._refHtml;
    }

    //form number generator
    formNumGenerate(){
        this._currFormNum += 1;
        let tempFormNum = this._currFormNum;
        return tempFormNum;
    }

    //Adding new referral object to the referral objects array
    addForm(){
        console.log(`Hi you have reached addform`);
        const tempObject = {};
        let tempFormNum = this.formNumGenerate();               
        tempObject.refformNum = tempFormNum;
        //console.log(tempObject.refformNum);
        tempObject.refdate = referralDate.value;
        tempObject.refname = referralName.value;
        //console.log(tempObject.refname);
        tempObject.refagency = referralAgency.value;
        tempObject.refposition = referralPosition.value;
        tempObject.refphone = referralPhone.value;
        tempObject.refemail = referralEmail.value;
        tempObject.clientconsent = clientConsent.value;
        tempObject.clientname = clientName.value;
        tempObject.clientdob = clientDOB.value;
        tempObject.clientcultident = clientCultIdent.value;
        tempObject.clientadd = clientAdd.value;
        tempObject.clientphone = clientPhone.value;
        console.log(tempObject);
        this._refArray.push(tempObject);
        console.log(this._refArray[0].refname);        
    }

    createRefList(){
        console.log(this._refArray);
        this._refHtml= []; //To clear the refHtml array
        if(this._refArray !== []){
            //console.log(`The first element is ${this._refArray[0]['refname']}`);
            for(const arrTem of this._refArray){
                let tempNum = arrTem['refformNum'];
                console.log(tempNum);
                let tempDate = arrTem['refdate'];
                console.log(tempDate);
                let tempAgency = arrTem['refagency'];
                let tempName = arrTem['refname'];
                let tempClientName = arrTem['clientname'];
                let tempClientPhone = arrTem['clientphone'];
                let temphtml = createTableHtml(tempNum, tempDate, tempAgency, tempName, tempClientName, tempClientPhone);
               
                console.log(temphtml);
                this._refHtml.push(temphtml);
                console.log(this._refHtml);  
                //this.renderRefList();          
            }       
        }        
    }

    renderRefList(){
        console.log(`you have reached renderRefList`);
        tempString = this._refHtml.join('\n');
        console.log(`this is the ${tempString}`);
        console.log(tempString);
        // let targettableArea = document.getElementById('tableRefList');
        targettableArea.display = "block";
        targettableArea.innerHTML = tempString;
        console.log(`I am here in the renderRefList`);
    }

    saveForm(){
        let formJson = JSON.stringify(this._refArray);
        localStorage.setItem("Referrals", formJson);
        let formNumJson = JSON.stringify(this._currFormNum);
        localStorage.setItem("CurrentFormNum", formNumJson);
        console.log(`Saved the form to the local storage`);
    }

    loadList(){
        let formJson = localStorage.getItem("Referrals");
        if(formJson){
            this._refArray = JSON.parse(formJson);
            let tempFormNum = localStorage.getItem("CurrentFormNum");
            this._currFormNum = Number(tempFormNum);
            //createRefList();
        }
        //console.log("I am here");
    }
}
function AddFormExt(){
    referralList.addForm();
    //referralList.renderRefList();
    referralList.createRefList();
    tempRefForm.style.display = "none";
    tempRefList.style.display = "block";
    tempTitleButt.style.display = "block";
    referralList.saveForm();
    referralList.renderRefList();
}

//The function to display the new Referral Form
function newReferralForm(){
    
    tempRefForm.style.display = "block";
    tempRefList.style.display = "none";
    tempTitleButt.style.display = "none";    
}

//Instantiation of referralFormClass
const referralList = new referralFormClass(0);
referralList.loadList();
referralList.createRefList();
referralList.renderRefList();

//Setting up Event Listeners
submitBtn.addEventListener('click', AddFormExt);
submitBtn.addEventListener('click', (e)=>{e.preventDefault();});
newRefFormButton.addEventListener('click', newReferralForm);
newRefFormButton.addEventListener('click', (e)=>{e.preventDefault();});
