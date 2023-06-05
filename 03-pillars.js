
/* There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

    number of pillars (≥ 1);
    distance between pillars (10 - 30 meters);
    width of the pillar (10 - 50 centimeters).

Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
*/





function pillars(numPill, dist, width) {  // pillier supperieur à 1
    dist *= 100;
    
    if ( numPill < 2 ){
      return 0
  } else if (numPill === 2){
        return dist  ;
      } else {
        
        
   return dist * ( numPill - 1 )  +  (width * (numPill - 2)) ;
    }};
         
  // La largeur des pilliers doivent être entre 10 - 50 cm
  // supprimer la largeur du premier et dernier pillier
  // La distance des pilliers doivent être en 10 - 30 m
  