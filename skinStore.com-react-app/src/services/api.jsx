const mockApiBase = 'https://jsonplaceholder.typicode.com'
const Base_URL = 'https://localhost:3001'


//fetch all users
export const getUsers = async () => {
    const response = await fetch(`${Base_URL}/users`);
    return response.json()
};

//add new user
export const addUser = async (user) => {
    const response = await fetch(`${Base_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return response.json()
};

//find user by credentials
export const findUser = async (email, password) => {
    const users = await getUsers();
    return users.find(user => user.email === email && user.password === password);
};

export const getProduct = async () => {
    const response = await fetch(`${mockApiBase}/products`)
    // const data = await response.json()
    return response.data

}

export const getProductById = async (id) => {
    const response = await fetch(`${mockApiBase}/products/${id}`)
    // const data = await response.json()
    return response.data
}
