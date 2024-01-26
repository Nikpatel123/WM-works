const patientData = {
    "medications": [{
        "aceInhibitors": [{
            "name": "lisinopril",
            "strength": "10 mg Tab",
            "dose": "1 tab",
            "route": "PO",
            "sig": "daily",
            "pillCount": "#60",
            "refills": "Refill 3"
        }],
        "antianginal": [{
            "name": "nitroglycerin",
            "strength": "0.4 mg Sublingual Tab",
            "dose": "1 tab",
            "route": "SL",
            "sig": "q15min PRN",
            "pillCount": "#30",
            "refills": "Refill 1"
        }],
        "anticoagulants": [{
            "name": "warfarin sodium",
            "strength": "3 mg Tab",
            "dose": "1 tab",
            "route": "PO",
            "sig": "daily",
            "pillCount": "#90",
            "refills": "Refill 3"
        }],
        "betaBlocker": [{
            "name": "metoprolol tartrate",
            "strength": "25 mg Tab",
            "dose": "1 tab",
            "route": "PO",
            "sig": "daily",
            "pillCount": "#90",
            "refills": "Refill 3"
        }],
        "diuretic": [{
            "name": "furosemide",
            "strength": "40 mg Tab",
            "dose": "1 tab",
            "route": "PO",
            "sig": "daily",
            "pillCount": "#50",
            "refills": "Refill 3"
        }],
        "mineral": [{
            "name": "potassium chloride ER",
            "strength": "10 mEq Tab",
            "dose": "1 tab",
            "route": "PO",
            "sig": "daily",
            "pillCount": "#50",
            "refills": "Refill 3"
        }]
    }]
};


function findMedicare(data) {
    const MediCare = [];
    data.medications.map((medicationCategory) => {
        Object.entries(medicationCategory).map(([category, medications]) => {
            medications.map((medications) => {
                if (parseInt(medications.pillCount.match(/\d+/)[0]) <= 50 &&
                    parseInt(medications.refills.match(/\d+/)[0]) <= 3) {
                    MediCare.push({
                        medicationCategory: category,
                        name: medications.name,
                        pillCount: medications.pillCount,
                        refills: medications.refills
                    })
                }
            });
        });
    }); return MediCare;
}
const MediCare = findMedicare(patientData);
console.log("Medications needing refill:", MediCare);

