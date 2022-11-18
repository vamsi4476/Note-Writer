const users =[
    {
        userId:1,
        userName:"vamsi",
        password:"admin@"
    },
    {
        userId:2,
        userName:"krishna",
        password:"ss"
    },
    {
        userId:3,
        userName:"gunda",
        password:"fds"
    },
];

function getUsers(){
    return users;
}

module.exports={getUsers};