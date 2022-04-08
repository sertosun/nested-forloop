const arrayINarray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  console.log(arrayINarray);

  var indexZero = arrayINarray[0];
  console.log(indexZero + " indexZero");

  for (i = 0; i < arrayINarray.length; i++) {
    console.log(arrayINarray[i]);
  }

  for (i = 0; i < arrayINarray.length; i++) {
    for (j = 0; j < arrayINarray[i].length; j++) {
      console.log(arrayINarray[i][j]);
    }
  }

  const groupArray = [
    ["Kök", "Sakalli", "Konuskan"],
    ["Ertosun", "Ulga"],
    ["Alenasy", "Burguleh"],
    ["Adanur"],
  ];
  console.log(groupArray);

  for (i = 0; i < groupArray.length; i++) {
    var groups = groupArray[i];
    console.log(groups);
  }

  for (i = 0; i < groupArray.length; i++) {
    for (j = 0; j < groupArray[i].length; j++) {
      var groupMember = groupArray[i][j];
      console.log(groupMember);
    }
  }

  var steps = 10;
  var stars = "";

  for (i = 1; i <= steps; i++) {
    for (j = 0; j < i; j++) {
      stars = stars + "*";
      //stars += "*";
    }
    //console.log(stars)
    stars = stars + "\n";
  }

  console.log(stars);

  //Aufgabe

  var steps = 5;
  var stars = "";

  for (i = 1; i <= steps; i++) {
    for (j = 0; j < steps; j++) {
      stars += "*";
    }
    stars += "\n";
  }

  console.log(stars);


  // pyramidenPattern
  var pyramid = 20; 
  var pyramidString = ""; 

  for( i = 1; i <= pyramid ; i++) {
    // leerzeilen erstellen
    for(j = 1; j <= pyramid - i; j++) {
        pyramidString += " "
      
    }
    // pyramide erstellen
    for(k = 0; k < 2*i-1 ;  k++) {
        pyramidString += "*"
    }

    pyramidString += "\n"
    
  }

  console.log(pyramidString); 