function elevator(left, right, call){
    const distanceleft = Math.abs(call - left);
    const distanceright = Math.abs(call - right);
  
    if (distanceleft < distanceright) {
      return "left";
    } else if (distanceright < distanceleft) {
      return "right";
    } else {
      return "right";
    }
  }