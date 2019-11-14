// Asqwilanga Caverns
// By: Jeremy Rico
// CPSC 335 Charles Siska

// Hash function that returns an integer cooresponding to the input room
// Ex: room = [15, 0, 0]; return 1500;
function hash(room) {
  return room[0]*100 + room[1]*10 + room[2];
}

function print(room) {
  return hash(room).toString();
}

var currRoom = [15, 0, 0];
var visited = new Set();
visited.add(hash(currRoom));
console.log(hash(currRoom));

function nextRoom(currentRoom) {
  var lastRoom = currentRoom;
  for (var i = 0; i <= 2; ++i) {
    if (i == 0) { // hold first value
      if (currentRoom[i] == 15 || currentRoom[i] == 0) {
        continue;
      } else if (currentRoom[1] == 0 || currentRoom[2] == 7) { //case1
        while (currentRoom[1] < 8 && currentRoom[2] > 0) {
          ++currentRoom[1]; --currentRoom[2];
        }
        if(!visited.has(hash(currentRoom))) {
          visited.add(hash(currentRoom));
          return currentRoom;
        }
        else { continue; }
      } else if (currentRoom[1] == 8 || currentRoom[2] == 0) { //case2
        while (currentRoom[1] > 0 && currentRoom[2] < 7) {
          --currentRoom[1]; ++currentRoom[2];
        }
        if(!visited.has(hash(currentRoom))) {
          visited.add(hash(currentRoom));
          return currentRoom; }
        else { continue; };
      } else { // case3
        // search for new room by incrementing 2nd value
        while (currentRoom[1] > 0 && currentRoom[2] < 7) {
          --currentRoom[1]; ++currentRoom[2];
        }
        if (!visited.has(hash(currentRoom))) {
          return currentRoom;
        } else {
          // if no new room found, increment third value
          while (currentRoom[1] < 8 && currentRoom[2] > 0) {
            ++currentRoom[1]; --currentRoom[2];
          }
          if (!visited.has(hash(currentRoom))) {
            visited.add(hash(currentRoom));
            return currentRoom;
          } else { continue; }
        }
      }
    } else if (i == 1){ // hold second value
      if (currentRoom[0] == 0 || currentRoom[2] == 7) { // case1
        while (currentRoom[0] < 15 && currentRoom[2] > 0) {
          ++currentRoom[0]; --currentRoom[2];
        }
        if(!visited.has(hash(currentRoom))) {
          visited.add(hash(currentRoom));
          return currentRoom; }
        else { continue; }
      } else if (currentRoom[0] == 15 || currentRoom[2] == 0) { //case2
        while (currentRoom[0] > 0 && currentRoom[2] < 7) {
          --currentRoom[0]; ++currentRoom[2];
        }
        if(!visited.has(hash(currentRoom))) {
          visited.add(hash(currentRoom));
          return currentRoom; }
        else { continue; }
      } else { // case3
        while (currentRoom[0] > 0 && currentRoom[2] < 7) {
          --currentRoom[0]; ++currentRoom[2];
        }
        if (!visited.has(hash(currentRoom))) {
          visited.add(hash(currentRoom));
          return currentRoom;
        } else {
          while (currentRoom[0] < 15 && currentRoom[2] > 0) {
            ++currentRoom[0]; --currentRoom[2];
          }
          if (!visited.has(hash(currentRoom))) {
            visited.add(hash(currentRoom));
            return currentRoom;
          } else { continue; }
        }
      }
    } else if (i == 2) { // hold third value
      if (currentRoom[0] == 0 || currentRoom[1] == 8) { // case1
        while (currentRoom[0] < 15 && currentRoom[1] > 0) {
          ++currentRoom[0]; --currentRoom[1];
        }
        if(!visited.has(hash(currentRoom))) {
          visited.add(hash(currentRoom));
          return currentRoom; }
        else { continue; }
      } else if (currentRoom[0] == 15 || currentRoom[1] == 0) { // case2
        while (currentRoom[0] > 0 && currentRoom[1] < 8) {
          --currentRoom[0]; ++currentRoom[1];
        }
        if(!visited.has(hash(currentRoom))) {
          visited.add(hash(currentRoom));
          return currentRoom; }
        else { continue; }
      } else { // case3
        while (currentRoom[0] > 0 && currentRoom[1] < 8) {
          --currentRoom[0]; ++currentRoom[1];
        }
        if (!visited.has(hash(currentRoom))) {
          visited.add(hash(currentRoom));
          return currentRoom;
        } else {
          while (currentRoom[0] < 15 && currentRoom[1] > 0) {
            ++currentRoom[0]; --currentRoom[1];
          }
          if (!visited.has(hash(currentRoom))) {
            visited.add(hash(currentRoom));
            return currentRoom;
          } else { continue; }
        }
      }
    }
  }
  visited.clear();
  return nextRoom(currentRoom);
}

function log( rctx, room, rcolor, xpos, ypos )
{
    rctx.save( );
    let fill = rcolor;
    let font = "12px Arial";
    let rtext = room[0].toString() + ", " + room[1].toString() + ", " + room[2].toString();
    rctx.fillStyle = fill;
    rctx.font = font;
    rctx.fillText( rtext, xpos, ypos);
    rctx.restore( );
}

// Draw state disk.
function draw_disk( rctx, xpos, ypos, color)
{
    rctx.save( );
    rctx.beginPath( );
    rctx.arc( xpos, ypos, 30, 0, 2 * Math.PI );
    rctx.closePath();
    rctx.strokeStyle = color;
    rctx.lineWidth = 0.5;
    rctx.fillStyle = color;
    rctx.fill( );
    rctx.stroke( );
    rctx.restore( );
}

// Draw state disk.
function draw_ring( rctx, xpos, ypos, color )
{
    rctx.save( );
    rctx.beginPath( );
    rctx.arc( xpos, ypos, 35, 0, 2 * Math.PI );
    rctx.closePath();
    rctx.strokeStyle = color;
    rctx.lineWidth = 2.0;
    //rctx.fillStyle = "#000000";
    //rctx.fill( );
    rctx.stroke( );
    rctx.restore( );
}
