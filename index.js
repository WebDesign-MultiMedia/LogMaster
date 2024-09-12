






///////////////////////// NAV
const faBars = document.getElementById('fa-folder-check');
const faArrowUp = document.getElementById('fa-folder-minus');
const MoreMenu = document.getElementById('MoreMenu');
const backgrn = document.getElementById('backgrn');

// Initial state (assuming faBars starts visible and the rest hidden)
faArrowUp.style.display = 'none';
MoreMenu.style.display = 'none';
backgrn.style.display = 'none';

faBars.addEventListener('click', () => {
    if (MoreMenu.style.display === 'none') {
        // Show the menu and arrow
        faBars.style.display = 'none';
        MoreMenu.style.display = 'block';
        faArrowUp.style.display = 'block';
        backgrn.style.display = 'block';
    }
});

faArrowUp.addEventListener('click', () => {
    // Hide the menu and arrow, and show faBars
    faBars.style.display = 'block';
    MoreMenu.style.display = 'none';
    faArrowUp.style.display = 'none';
    backgrn.style.display = 'none';
});


/////////////////////// MIDDLE BODY

document.getElementById('VehicleInfo').addEventListener('click', () => {
    const field = document.getElementById('VehicleInformation');
    field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
    
    const NoDisplay = document.getElementById('fa-trash-can-xmark');
    NoDisplay.style.display = 'none';
    
}); 
 


/////////////////////////////////////////////////////////////////
document.getElementById('VehicleManRep').addEventListener('click', () => {
    const field = document.getElementById('MaintenanceAndRepairRecords');
    field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
    
    const NoDisplay1 = document.getElementById('fa-trash-can-xmark1');
    NoDisplay1.style.display = 'none';

    field.style.position ='relative';
}); 


//////////////////////////////////////////////////////////////

document.getElementById('VehicleFuelLog').addEventListener('click', () => {
    const field = document.getElementById('FuelRecord');
    field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
    const NoDisplay2 = document.getElementById('fa-trash-can-xmark2');
    NoDisplay2.style.display = 'none';
    field.style.position ='relative';
}); 

////////////////////////////////////////////////////////
document.getElementById('VehicleResg').addEventListener('click', () => {
    const field = document.getElementById('VehicleRegistration');
    field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
    const NoDisplay3 = document.getElementById('fa-trash-can-xmark3');
    NoDisplay3.style.display = 'none';
    field.style.position ='relative';
}); 

////////////////////////////////////////////////////////
document.getElementById('VehicleInsure').addEventListener('click', () => {
    const field = document.getElementById('InsuranceRecords');
    field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
    const NoDisplay4 = document.getElementById('fa-trash-can-xmark4');
    NoDisplay4.style.display = 'none';
    field.style.position ='relative';
}); 



////////////////////////////////////////////////////////
document.getElementById('VehicleAcci').addEventListener('click', () => {
    const field = document.getElementById('AccidentRecords');
    field.style.display = field.style.display === 'none' || !field.style.display ? 'block' : 'none';
    const NoDisplay5 = document.getElementById('fa-trash-can-xmark5');
    NoDisplay5.style.display = 'none';
    field.style.position ='relative';
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