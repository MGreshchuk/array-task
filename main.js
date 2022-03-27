const data = [
{
    name: 'Tom',
    phoneNumber: '098-76-54-352',
},

{
    name: 'Peter',
    phoneNumber: '098-54-54-652',
},

{
    name: 'Ann',
    phoneNumber: '050-711-21-21',
},
];

function sortContacts(contacts, sortOrderBool) {
    return contacts.sort(function (a, b) {
        if (a.name < b.name) {
            return (sortOrderBool) ? -1 : 1
        }
        if (a.name > b.name) {
            return (sortOrderBool) ? 1 : -1
        }
        return 0;
      });
}

let sortArr = sortContacts(data, true);
console.log(sortArr);
