// http://localhost:3000/api/users

export async function GET(request){
    // Handle GET request for /api/users
    // Retrive users from the database or any data source

    const users = [
        {
            id:1,name:'Anish'
        },
        {
            id:2,name:'Smarty'
        },
        {
            id:3,name:'Someone'
        },
    ];
    // send users as a response
    return new Response(JSON.stringify(users))
}