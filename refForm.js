
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

    // -- Targets and target areas related --

let targettableArea = document.getElementById('tableRefList');
let tempRefForm = document.getElementById('referralForm');
let tempRefList = document.getElementById('refTable');
let tempTitleButt = document.getElementById('titleAndBut');


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
 

 // -- Standalone function to create template literal --
function createTableHtml(tempNum, tempDate, tempAgency, tempName, clientName, clientPhone){
    let temphtml = `<tr>           
                        <th scope="row">${tempNum}</th>
                        <td>${tempDate}</td>
                        <td>${tempAgency}</td>
                        <td>${tempName}</td>
                        <td>${clientName}</td>
                        <td>${clientPhone}</td>
                        <td><button type="submit" data-id="${tempNum}" data-loaded="true" class="btn btn-primary btn-sm edit_btn"> Click here</button></td>
                    </tr>`;
    return temphtml;
}

let tempString; //Variable to hold the html string for rendering

// ------------ Start of Class -------------
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
        //console.log(`Hi you have reached addform method of the class`);
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
        //console.log(tempObject);
        this._refArray.push(tempObject);
        //console.log(this._refArray[0].refname);        
    }

    loadFormForEdit(){
        for(let i = 0; i < this._refArray.length; i++){
            if(this.refArray[i]['refformNum'] === referId){
                let tempObject3 = this.refArray[i];
                referralDate.value = tempObject3.refdate;
                referralName.value = tempObject3.refname;
                referralAgency.value = tempObject3.refagency;
                referralPosition.value = tempObject3.refposition;
                referralPhone.value = tempObject3.refphone;
                referralEmail.value = tempObject3.refemail;
                clientConsent.value = tempObject3.clientconsent;
                clientName.value = tempObject3.clientname;
                clientDOB.value = tempObject3.clientdob;
                clientCultIdent.value = tempObject3.clientcultident;
                clientAdd.value = tempObject3.clientadd;
                clientPhone.value = tempObject3.clientphone;
            }
        }
    }
    editForm(id){
        const tempObject2 = {};
        let tempLength = this._refArray.length;
        let tempEditFormNum = id; //The id is dataset-id of the 'Edit/Save' button clicked.
        tempObject2.refformNum = tempEditFormNum;
        tempObject2.refdate = referralDate.value;
        tempObject2.refname = referralName.value;
        tempObject2.refagency = referralAgency.value;
        tempObject2.refposition = referralPosition.value;
        tempObject2.refphone = referralPhone.value;
        tempObject2.refemail = referralEmail.value;
        tempObject2.clientconsent = clientConsent.value;
        tempObject2.clientname = clientName.value;
        tempObject2.clientdob = clientDOB.value;
        tempObject2.clientcultident = clientCultIdent.value;
        tempObject2.clientadd = clientAdd.value;
        tempObject2.clientphone = clientPhone.value;
        for(let i = 0; i < tempLength; i++){
            if(this._refArray[i]['refformNum'] === id){
                console.log(this._refArray[i]['refformNum']);
                console.log(id);
                this._refArray.splice(i, 1, tempObject2);
            }
        }
        //console.log(`The refArray is ${tempObject2}`);
        console.log(this._refArray);
    }

    deleteIndivData(id){
        let tempDelFormNum = id; //The id is the dataset-id of the 'Edit/Save' button clicked to reach the data.
        for(let i=0; i < this._refArray.length; i++){
            if(this._refArray[i]['refformNum'] === id){
                //console.log(`The individual data deleted was ${this._refArray[i]}`);
                this._refArray.splice(i, 1);
            }
        }        
    }

    //The code for creating the array of data required for the rendering the dashboard list
    createRefList(){
        console.log(this._refArray);
        this._refHtml= []; //To clear the refHtml array
        if(this._refArray !== []){
            //console.log(`The first element is ${this._refArray[0]['refname']}`);
            for(const arrTem of this._refArray){
                let tempNum = arrTem['refformNum'];
                //console.log(tempNum);
                let tempDate = arrTem['refdate'];
                //console.log(tempDate);
                let tempAgency = arrTem['refagency'];
                let tempName = arrTem['refname'];
                let tempClientName = arrTem['clientname'];
                let tempClientPhone = arrTem['clientphone'];
                let temphtml = createTableHtml(tempNum, tempDate, tempAgency, tempName, tempClientName, tempClientPhone);
               
                //console.log(temphtml);
                this._refHtml.push(temphtml);
                //console.log(this._refHtml);  
                          
            }       
        }        
    }

    //Rendering of the dashboard list
    renderRefList(){
        //console.log(`you have reached renderRefList`);
        tempString = this._refHtml.join('\n');
        //console.log(`this is the ${tempString}`);
        //console.log(tempString);
        // let targettableArea = document.getElementById('tableRefList');
        targettableArea.display = "block";
        targettableArea.innerHTML = tempString;
        //console.log(`I am here in the renderRefList`);
    }

    //Saving all the available referral data to the Local Storage
    saveForm(){
        let formJson = JSON.stringify(this._refArray);
        localStorage.setItem("Referrals", formJson);
        let formNumJson = JSON.stringify(this._currFormNum);
        localStorage.setItem("CurrentFormNum", formNumJson);
        //console.log(`Saved the form to the local storage`);
    }

    //Loading of the available referral data from the Local Storage
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
//  --------- End of Class ------------

function AddFormExt(){
    referralList.addForm();
    //referralList.renderRefList();
    referralList.createRefList();
    tempRefForm.style.display = "none";
    tempRefList.style.display = "block";
    tempTitleButt.style.display = "block";
    referralList.saveForm();
    referralList.renderRefList();
    tempTitleButt.scrollIntoView();
}

//The function to display the new Referral Form
function newReferralForm(){
    
    tempRefForm.style.display = "block";
    tempRefForm.reset();
    tempRefList.style.display = "none";
    tempTitleButt.style.display = "none";    
    submitBtn.style.display = "block";
    editSavBtn.style.display = "none";
    backButton.style.display = "block";
    deleteBtn.style.display = "none";

}

//The function to save the edit to the referral data
function editFormFunc(){
    referralList.editForm(referId);
    referralList.createRefList();
    tempRefForm.style.display = "none";
    tempRefList.style.display = "block";
    tempTitleButt.style.display = "block";
    referralList.saveForm();
    referralList.renderRefList();
    tempTitleButt.scrollIntoView();
}

//The function for resetting the form
function resetFormFunc(){
    tempRefForm.reset();
}

//The function to navigate back
function navigateBack(){
    tempRefForm.style.display = "none";
    tempRefList.style.display = "block";
    tempTitleButt.style.display = "block";
    referralList.renderRefList();
    tempTitleButt.scrollIntoView();
}

//The function for deleting individual referral data
function delData(){
    if(confirm("Do you want to delete it?")){
        referralList.deleteIndivData(referId);
        referralList.createRefList();
        tempRefForm.style.display = "none";
        tempRefList.style.display = "block";
        tempTitleButt.style.display = "block";
        referralList.saveForm();
        referralList.renderRefList();
        tempTitleButt.scrollIntoView();
    }else{ }
}

//Instantiation of referralFormClass
const referralList = new referralFormClass(0);
referralList.loadList();
referralList.createRefList();
referralList.renderRefList();

//Setting up Event Listeners for the 'Submit' and 'New Referral Form' buttons
let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', AddFormExt);
submitBtn.addEventListener('click', (e)=>{e.preventDefault();});
newRefFormButton.addEventListener('click', newReferralForm);
newRefFormButton.addEventListener('click', (e)=>{e.preventDefault();});

//Setting up Event Listener for the click of the 'Edit' button

let editBtn = document.getElementById('tableRefList');
let referId; //Variable for storing the Referral Num of the Referral being edited
editBtn.addEventListener('click', (event)=>{
    //console.log(event.target.classList);
    if(event.target.classList.contains('edit_btn')){
        const targetElem = event.target;
        //console.log(targetElem);
        referId = parseInt(targetElem.dataset.id);//Obtaining the dataset id of the button clicked
        //console.log(referId);
        newReferralForm();
        referralList.loadFormForEdit(referId);
        editSavBtn.style.display = "block";
        submitBtn.style.display = "none";
        clearBtn.style.display = "none";
        deleteBtn.style.display = "block";
    }    
});

//Setting up Event Listener for the 'Save' button
let editSavBtn = document.getElementById('editSaveBtn');

editSavBtn.addEventListener('click', editFormFunc);
editSavBtn.addEventListener('click', (e)=>{e.preventDefault();});

// Setting up Event Listener for the 'Clear' button

let clearBtn = document.getElementById('clearBtn'); // This is the element for the event one after the present one
clearBtn.addEventListener('click', resetFormFunc);
clearBtn.addEventListener('click',(e)=>{e.preventDefault();});

//Setting up Event Listener for the navigation buttons
let backButton = document.getElementById('backBtn');
backButton.addEventListener('click', navigateBack);
backButton.addEventListener('click', (e)=>{e.preventDefault();});
 
//Setting up Event Listener for the delete button
let deleteBtn = document.getElementById('deleteBtn');
deleteBtn.addEventListener('click', delData);
deleteBtn.addEventListener('click', (e)=>{e.preventDefault();});