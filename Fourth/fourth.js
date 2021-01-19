let emailDiv=document.getElementById('email-div')
protect_email = function (user_email) {
    var avg, splitting, part1, part2;
    splitting = user_email.split("@");
    part1 = splitting[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitting[1];
    let p =document.createElement('p');
    p.innerText=part1 + "...@" + part2;
    emailDiv.append(p);
    return part1 + "...@" + part2;
};

console.log(protect_email("eddygrant@example.com"));