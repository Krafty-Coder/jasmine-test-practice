var Users = {};
var userList = [
  {
    id: '1',
    name: 'Jane',
    role: 'Designer',
    location: 'Manhattan',
    twitter: 'gijane'

  },
  {
    id: '2',
    name: 'Bobito',
    role: 'Developer',
    location: 'Nyalenda',
    twitter: 'billybob'

  },
  {
    id: '3',
    name: 'Jaimbo',
    role: 'Developer',
    location: 'Chicago',
    twitter: 'jimbo'

  },
  {
    id: '4',
    name: 'Okoth',
    role: 'Designer',
    location: 'Riat',
    twitter: 'dabill'

  }

];

Users.all = function() {
  //Returning the array of users. Eventually this will be an API call.
    return userList;
};

return Users;


