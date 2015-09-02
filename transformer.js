var i=0;

var allData =[];

px.metadata.VALUES['Garda Station'].forEach(function(station){
  console.log(station);
  
  
  //Include other info here?
  var stationObject = {
    name : station,
    offense : []
  };
  
  
  px.metadata.VALUES['Type of Offence'].forEach(function(offense){
    
    var offenseObject = {
      name : offense,
      years : []
    };

    
    var year;
    
    px.metadata.VALUES['Year'].forEach(function(year){
    
      var yearObject = {
        name : year,
        value : px.data[i]
      }
       
      offenseObject.years.push(yearObject);
      
      i = i+1;
  
    });
    
    stationObject.offense.push(offenseObject);
  
  });
  
  allData.push(stationObject);
  
});



/*

Flat JSON Array
var i=0;

var allData =[];

px.metadata.VALUES['Garda Station'].forEach(function(station){

  
  px.metadata.VALUES['Type of Offence'].forEach(function(offence){


    px.metadata.VALUES['Year'].forEach(function(year){
    
      
      allData.push({
        station: station,
        offence: offence,
        year: year,
        value: px.data[i]
        
      });

      
      i = i+1;
  
    });
    
  
  });
  
  
});

console.log(JSON.stringify(allData));
*/