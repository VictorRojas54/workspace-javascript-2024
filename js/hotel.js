// test object
var test = {
    fname: "victor",
    lname: "rojas",
    age: 100,
    display: function(){
        console.log("in function");
        return this.fname + " " + this.lname;
    }
};
console.log(test.display());

// hotel reservation
var guestgroup = new Array();
$('#submit').click(reservation);
function reservation(){
    var guest={
        name: $('#guestname').val(),
        checkin: $('#guestcheckin').val(),
        checkout: $('#guestcheckout').val(),
        numofguest: $('#guestnum').val(),
        room: $('#guestroom').val()

    };
    alert(guest.name + "Reserve a Room");
    guestgroup.push(guest);
    console.log(guestgroup);
}