export default async function todoitFetch(endpoint, options) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        ...options?.headers,
    };

    const finalOptions = {
        ...options,
        headers,
    };

    return fetch(`${endpoint}`, finalOptions).then(async (response) => {
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }
        return response
    }).catch((error) => {
        throw error;
    });
}
