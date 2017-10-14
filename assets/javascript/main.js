$(document).ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCIrDfTGspIC5888qUdMI4M1DyiKp9ZiyI",
        authDomain: "shesinstem01.firebaseapp.com",
        databaseURL: "https://shesinstem01.firebaseio.com",
        projectId: "shesinstem01",
        storageBucket: "shesinstem01.appspot.com",
        messagingSenderId: "1073750951149"
    };
    firebase.initializeApp(config);

    // Assign the reference to the database to a variable named 'database'
    var database = firebase.database();

    // Initialize Global Variables
    var name;
    var title;
    var imgUrl;
    var videoUrl;
    var bio;
    var education;
    var description;
    var id;
    var sv;



    // function to load all professionals
        //Name
        //Title
    console.log('***LIST OF PROFESSIONALS***');
    database.ref('/Professionals').on("child_added", function (snapshot) {
        // Store data in variable sv
        sv = snapshot.val();
        name = sv.name;
        title = sv.title;

        // Check that data was loaded correctly

        console.log('NAME: ' + name);
        console.log('TITLE: ' + title);


        //Append New rows to employee tables body

    });

    // function to load specific professional
        //Name
        //Title
        //Image URL
        //Video URL
        //Short Bio
        //Education

    database.ref('/Professionals').orderByChild("identifier").equalTo('P001').on("child_added", function (snapshot) {
        // Store data in variables
        sv = snapshot.val();
        name = sv.name;
        title = sv.title;
        imgUrl = sv.image_url;
        videoUrl = sv.video_url;
        bio = sv.bio;
        education = sv.education;

        // Check that data was loaded correctly
        console.log('***---------------------***');

        console.log('***SPECIFIC PROFESSIONAL***');

        console.log('NAME: ' + name);
        console.log('TITLE: ' + title);
        console.log('EDUCATION: ' + education);
        console.log('BIO: ' + bio);
        console.log('IMAGE: ' + imgUrl);
        console.log('VIDEO ' + videoUrl);

        console.log('***---------------------***');
        console.log('***LIST OF CAREERS***');

        //Append data to html

    });


    // function to load all careers
        //Title

    database.ref('/Careers').on("child_added", function (snapshot) {
        // Store data in variable sv
        sv = snapshot.val();
        title = sv.title;

        // Check that data was loaded correctly
        console.log('TITLE: ' + title);

        //Append New rows to employee tables body

    });

    // function to load specific career
        //Title
        //Description
        //Education Requirements
    database.ref('/Careers').orderByChild("identifier").equalTo('C001').on("child_added", function (snapshot) {
        // Store data in variables
        sv = snapshot.val();
        title = sv.title;
        description = sv.description;
        education = sv.education;

        // Check that data was loaded correctly
        console.log('***---------------------***');

        console.log('***SPECIFIC CAREER***');

        console.log('TITLE: ' + title);
        console.log('EDUCATION: ' + education);
        console.log('DESCRIPTION: ' + description);

        console.log('***---------------------***');


        //Append data to html

    });



    // ADD DATA TO FIREBASE (FOR DATA INITIALIZATION ONLY)

    function addProfessionalsData(){

        name = 'Test Name 2';
        title = 'Test Position';
        imgUrl = 'https://lh3.googleusercontent.com/X_hN_qLRZ-0cHaHtuiiKIBmQ4TN5uvj1vIJlvNFQjkTm0x7ZdIVQoZlTL5yx8_alBlTpCj0POQgTxo7udb2e9a_KTHXg8f3OWEjZxM2WHTPDhQc4qZriC9G_FQzmoSEg-e0n9J2Wsg=s250-p-k';
        videoUrl = 'https://www.youtube.com/embed/ScMzIvxBSi4';
        bio = 'Lorem ipsum dolor sit amet, no eos stet utinam munere. Accumsan offendit usu id, at usu adhuc nominavi. Eu atomorum persecuti quaerendum est, vero scripta definitiones at has. Erant delicatissimi vis cu, te duo modo nibh intellegat, quo tollit sententiae ex. Sed an detraxit definitionem, pro detracto intellegat elaboraret id, ad vix vivendo deserunt invenire. Est perpetua intellegam in.';
        education = 'Test Education';
        id = 'P002';

        // Send data to firebase
        database.ref('/Professionals').push({
            identifier: id,
            name: name,
            title: title,
            image_url: imgUrl,
            video_url: videoUrl,
            bio: bio,
            education: education
        });

    }


    function addCareerData(){

        title = 'Test Position 2';
        description = 'Lorem ipsum dolor sit amet, no eos stet utinam munere. Accumsan offendit usu id, at usu adhuc nominavi. Eu atomorum persecuti quaerendum est, vero scripta definitiones at has. Erant delicatissimi vis cu, te duo modo nibh intellegat, quo tollit sententiae ex. Sed an detraxit definitionem, pro detracto intellegat elaboraret id, ad vix vivendo deserunt invenire. Est perpetua intellegam in.';
        education = 'Test Education';
        id = 'C002';

        // Send data to firebase
        database.ref('/Careers').push({
            identifier: id,
            title: title,
            description: description,
            education: education
        });

    }


   // addCareerData();
   // addProfessionalsData();

});