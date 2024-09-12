


///////////////////////// NAV
const faBars = document.getElementById('fa-folder-check');
const faArrowUp = document.getElementById('fa-folder-minus')

faBars.addEventListener('click', ()=>{
        const MoreMenu =  document.getElementById('MoreMenu');
        const faArrowUp = document.getElementById('fa-folder-minus');
        const backgrn = document.getElementById('backgrn');
        faBars.style.display = 'none';
        MoreMenu.style.display = 'block';
        faArrowUp.style.display = 'block';
        backgrn.style.display = 'block';
        setTimeout(() => {
            MoreMenu.style.display = 'none';
            faArrowUp.style.display = 'none';
            faBars.style.display = 'block';
            backgrn.style.display = 'none';

        }, 50000);

})


// ////////////////////////////// NEAR
function findGasStations() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var url = `https://www.google.com/maps/search/gas+stations/@${latitude},${longitude},14z`;
            window.open(url, '_blank');
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function findMechanicShops() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var url = `https://www.google.com/maps/search/mechanic+shops/@${latitude},${longitude},14z`;
            window.open(url, '_blank');
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}


/////////////////////// MIDDLE BODY

document.getElementById('VehicleInfo').addEventListener('click', () => {
    const field = document.getElementById('VehicleInformation');
    field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
    
    const NoDisplay = document.getElementById('fa-trash-can-xmark');
    NoDisplay.style.display = 'none';
    
}); 
    ///////////////// ADD 
const addVinfo = document.getElementById('fa-circle-plus');
addVinfo.style.color = 'darkgreen';
addVinfo.addEventListener('click', ()=>{
    const divCon = document.createElement('div');
    const VehicleInfo = document.getElementById('VehicleInformation');

    const NoDisplayaddVinfo = document.getElementById('fa-circle-plus');
    NoDisplayaddVinfo.style.display = 'none';

    const ShowDisplay = document.getElementById('fa-trash-can-xmark');
    ShowDisplay.style.display = 'none';
    ShowDisplay.style.position = 'relative';
    ShowDisplay.style.top = '-1em';
    ShowDisplay.style.left = '3em';


    divCon.appendChild(VehicleInfo);
    document.getElementById('OutputSelections').appendChild(divCon);

    VehicleInfo.style.backgroundColor = 'orange'; 
    VehicleInfo.style.borderRadius = '5%';
    VehicleInfo.style.border = '1px solid white';
    VehicleInfo.style.marginBottom = '1em';
    VehicleInfo.style.width = '75%';
    VehicleInfo.style.position = 'relative';
    VehicleInfo.style.left = '50px';



});
        ///////////////// DELETE
const delVinfo = document.getElementById('fa-trash-can-xmark');
delVinfo.style.color = 'lightcoral';
delVinfo.addEventListener('click', () =>{
    const VehicleInfoDel = document.getElementById('VehicleInformation');
    VehicleInfoDel.remove();
});

/////////////////////////////////////////////////////////////////
document.getElementById('VehicleManRep').addEventListener('click', () => {
    const field = document.getElementById('MaintenanceAndRepairRecords');
    field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
    
    const NoDisplay1 = document.getElementById('fa-trash-can-xmark1');
    NoDisplay1.style.display = 'none';

    field.style.position ='relative';
}); 

 // ADD 
 const addVinfo1 = document.getElementById('fa-circle-plus1');
 addVinfo1.style.color = 'darkgreen';
 addVinfo1.addEventListener('click', ()=>{
     const divCon1 = document.createElement('div');
     const VehicleInfo1 = document.getElementById('MaintenanceAndRepairRecords');
 
     divCon1.appendChild(VehicleInfo1);
     document.getElementById('OutputSelections').appendChild(divCon1);
 
 


     const NoDisplayaddVinfo1 = document.getElementById('fa-circle-plus1');
     NoDisplayaddVinfo1.style.display = 'none';

     const ShowDisplay1 = document.getElementById('fa-trash-can-xmark1');
     ShowDisplay1.style.display = 'block';
     ShowDisplay1.style.position = 'relative';
     ShowDisplay1.style.top = '-1em';
     ShowDisplay1.style.left = '3em';

     VehicleInfo1.style.position = 'relative';
     VehicleInfo1.style.top = '0.5em';  
     VehicleInfo1.style.backgroundColor = 'red'; 
     VehicleInfo1.style.zIndex = '5'; 

     VehicleInfo1.style.borderRadius = '5%';
     VehicleInfo1.style.border = '1px solid black';
     VehicleInfo1.style.marginBottom = '1em';

     VehicleInfo1.style.width = '75%';
 



 });

         // DELETE
const delVinfo1 = document.getElementById('fa-trash-can-xmark1');
delVinfo1.style.color = 'lightcoral';
delVinfo1.addEventListener('click', () =>{
    const VehicleInfoDel1 = document.getElementById('MaintenanceAndRepairRecords');
    VehicleInfoDel1.remove();
});

//////////////////////////////////////////////////////////////

document.getElementById('VehicleFuelLog').addEventListener('click', () => {
    const field = document.getElementById('FuelRecord');
    field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
    const NoDisplay2 = document.getElementById('fa-trash-can-xmark2');
    NoDisplay2.style.display = 'none';
    field.style.position ='relative';
}); 

 ///////////////////// ADD 
 const addVinfo2 = document.getElementById('fa-circle-plus2');
 addVinfo2.style.color = 'darkgreen';
 addVinfo2.addEventListener('click', ()=>{
     const divCon2 = document.createElement('div');
     const VehicleInfo2 = document.getElementById('FuelRecord');
 
     divCon2.appendChild(VehicleInfo2);
     document.getElementById('OutputSelections').appendChild(divCon2);
 

     const NoDisplayaddVinfo2 = document.getElementById('fa-circle-plus2');
     NoDisplayaddVinfo2.style.display = 'none';

     const ShowDisplay2 = document.getElementById('fa-trash-can-xmark2');
     ShowDisplay2.style.display = 'block';
     ShowDisplay2.style.position = 'relative';
     ShowDisplay2.style.top = '-1em';
     ShowDisplay2.style.left = '3em';


     VehicleInfo2.style.position = 'relative';
     VehicleInfo2.style.top = '1em';  
     VehicleInfo2.style.backgroundColor = 'pink'; 
     VehicleInfo2.style.borderRadius = '5%';
     VehicleInfo2.style.border = '1px solid black';
     VehicleInfo2.style.marginBottom = '1em';
     VehicleInfo2.style.width = '75%';
 
 });

////////////////////// DELETE
const delVinfo2 = document.getElementById('fa-trash-can-xmark2');
delVinfo2.style.color = 'lightcoral';
delVinfo2.addEventListener('click', () =>{
    const VehicleInfoDel2 = document.getElementById('FuelRecord');
    VehicleInfoDel2.remove();
});

////////////////////////////////////////////////////////
document.getElementById('VehicleResg').addEventListener('click', () => {
    const field = document.getElementById('VehicleRegistration');
    field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
    const NoDisplay3 = document.getElementById('fa-trash-can-xmark3');
    NoDisplay3.style.display = 'none';
    field.style.position ='relative';
}); 
 ///////////////////// ADD 
 const addVinfo3 = document.getElementById('fa-circle-plus3');
 addVinfo3.style.color = 'darkgreen';
 addVinfo3.addEventListener('click', ()=>{
     const divCon3 = document.createElement('div');
     const VehicleInfo3 = document.getElementById('VehicleRegistration');
 
     divCon3.appendChild(VehicleInfo3);
     document.getElementById('OutputSelections').appendChild(divCon3);
 

     const NoDisplayaddVinfo3 = document.getElementById('fa-circle-plus3');
     NoDisplayaddVinfo3.style.display = 'none';

     const ShowDisplay3 = document.getElementById('fa-trash-can-xmark3');
     ShowDisplay3.style.display = 'block';
     ShowDisplay3.style.position = 'relative';
     ShowDisplay3.style.top = '-1em';
     ShowDisplay3.style.left = '3em';


     VehicleInfo3.style.position = 'relative';
     VehicleInfo3.style.top = '1.5em';  
     VehicleInfo3.style.backgroundColor = 'pink'; 
     VehicleInfo3.style.borderRadius = '5%';
     VehicleInfo3.style.border = '1px solid black';
     VehicleInfo3.style.marginBottom = '1em';

     VehicleInfo3.style.width = '75%';
 
 });

////////////////////// DELETE
const delVinfo3 = document.getElementById('fa-trash-can-xmark3');
delVinfo3.style.color = 'lightcoral';
delVinfo3.addEventListener('click', () =>{
    const VehicleInfoDel3 = document.getElementById('VehicleRegistration');
    VehicleInfoDel3.remove();
});


////////////////////////////////////////////////////////
document.getElementById('VehicleInsure').addEventListener('click', () => {
    const field = document.getElementById('InsuranceRecords');
    field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
    const NoDisplay4 = document.getElementById('fa-trash-can-xmark4');
    NoDisplay4.style.display = 'none';
    field.style.position ='relative';
}); 

///////////////////// ADD 
const addVinfo4 = document.getElementById('fa-circle-plus4');
addVinfo4.style.color = 'darkgreen';
addVinfo4.addEventListener('click', ()=>{
    const divCon4 = document.createElement('div');
    const VehicleInfo4 = document.getElementById('InsuranceRecords');

    divCon4.appendChild(VehicleInfo4);
    document.getElementById('OutputSelections').appendChild(divCon4);


    const NoDisplayaddVinfo4 = document.getElementById('fa-circle-plus4');
    NoDisplayaddVinfo4.style.display = 'none';

    const ShowDisplay4 = document.getElementById('fa-trash-can-xmark4');
    ShowDisplay4.style.display = 'block';
    ShowDisplay4.style.position = 'relative';
    ShowDisplay4.style.top = '-1em';
    ShowDisplay4.style.left = '3em';


    VehicleInfo4.style.position = 'relative';
    VehicleInfo4.style.top = '2em';  
    VehicleInfo4.style.backgroundColor = 'pink'; 
    VehicleInfo4.style.borderRadius = '5%';
    VehicleInfo4.style.border = '1px solid black';
    VehicleInfo4.style.marginBottom = '1em';

    VehicleInfo4.style.width = '75%';

    

});





////////////////////////////////////////////////////////
document.getElementById('VehicleAcci').addEventListener('click', () => {
    const field = document.getElementById('AccidentRecords');
    field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
    const NoDisplay5 = document.getElementById('fa-trash-can-xmark5');
    NoDisplay5.style.display = 'none';
    field.style.position ='relative';
}); 


///////////////////// ADD 
const addVinfo5 = document.getElementById('fa-circle-plus5');
addVinfo5.style.color = 'darkgreen';
addVinfo5.addEventListener('click', ()=>{
    const divCon5 = document.createElement('div');
    const VehicleInfo5 = document.getElementById('AccidentRecords');

    divCon5.appendChild(VehicleInfo5);
    document.getElementById('OutputSelections').appendChild(divCon5);


    const NoDisplayaddVinfo5 = document.getElementById('fa-circle-plus5');
    NoDisplayaddVinfo5.style.display = 'none';

    const ShowDisplay5 = document.getElementById('fa-trash-can-xmark5');
    ShowDisplay5.style.display = 'block';
    ShowDisplay5.style.position = 'relative';
    ShowDisplay5.style.top = '-1em';
    ShowDisplay5.style.left = '3em';


    VehicleInfo5.style.position = 'relative';
    VehicleInfo5.style.top = '2.5em';  
    VehicleInfo5.style.backgroundColor = 'pink'; 
    VehicleInfo5.style.borderRadius = '5%';
    VehicleInfo5.style.border = '1px solid black';
    VehicleInfo5.style.marginBottom = '1em';

    VehicleInfo5.style.width = '75%';


});

// fa-trash-can-xmark
// fa-circle-plus

// IF FOR DROPDOWN

//VehicleFuelLog
// VehicleFuelLog
// VehicleInsure
// VehicleAcci





// IDs for forms fieldset


// FuelRecord

// VehicleRegistration

// InsuranceRecords

// AccidentRecords