let userlist;
const d = new Date();
let time = d.getHours();
let c;


fetch('https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5').then(res => {
    res.json().then(data => {
        // console.log(data);
        this.userlist = data;
        let data1 = '';

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].employment.title);

            data1 += "<tr onClick=getUserData(" + i + ")>";
            data1 += "<td>" + data[i].first_name + "</td>";
            data1 += "<td>" + data[i].last_name + "</td>";
            data1 += "<td>" + data[i].username + "</td>";
            data1 += "<td>" + data[i].employment.title + "</td>";
            data1 += "<td>" + data[i].address.country + "</td>";
            data1 += "<td><button onClick=deleteuser(" + i + ")>Delete</button></td>"
            data1 += "</tr>";
            document.getElementById('data').innerHTML = data1;
        }
        getUserData(0);
    })
})


/*Create user details card at left */

function getUserData(i) {
    c = this.userlist[i].first_name;

    let id = document.getElementById("id").innerHTML = this.userlist[i].id;
    let uid = document.getElementById("uid").innerHTML = this.userlist[i].uid;
    let pass = document.getElementById("pass").innerHTML = this.userlist[i].password;
    let uname = document.getElementById("uname").innerHTML = this.userlist[i].phone_number;
    let username = document.getElementById("username").innerHTML = this.userlist[i].username;
    let mail = document.getElementById("mail").innerHTML = this.userlist[i].email;
    let mf = document.getElementById("mf").innerHTML = this.userlist[i].gender;
    let dob = document.getElementById("dob").innerHTML = this.userlist[i].date_of_birth;
    let title = document.getElementById("title").innerHTML = this.userlist[i].employment.title;
    let skill = document.getElementById("skill").innerHTML = this.userlist[i].employment.key_skill;
    let addr = document.getElementById("addr_country").innerHTML = this.userlist[i].address.country;
    let addr2 = document.getElementById("addr_city").innerHTML = this.userlist[i].address.city;
    let addr3 = document.getElementById("addr_state").innerHTML = this.userlist[i].address.state;
    let ccn = document.getElementById("ccn").innerHTML = this.userlist[i].credit_card.cc_number;
    let ss = document.getElementById("ss").innerHTML = this.userlist[i].subscription.status;
    document.getElementById('avatar').src = this.userlist[i].avatar;
    document.getElementById('greet').innerHTML = greet(c);

}

function deleteuser(i) {
    alert("Do you Want To Delete " + this.userlist[i].first_name);
    document.getElementById("data").deleteRow(0);
    alert(this.userlist[i].first_name + " Is Deleted")
}


function greet(c) {


    if (time >= 06 && time < 12) {
        return "Good Morning, " + c;
    } else if (time >= 12 && time < 17) {
        return "Good Afternoon, " + c;
    } else if (time >= 17 && time < 21) {
        return "Good Evening, " + c;
    } else {
        return "Hope you had a good Day, " + c;
    }

}