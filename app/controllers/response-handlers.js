export const setResponse = (data, response) => {
    response.status(200).json(data);
}

export const setError = (err, response) => {
    response.status(500).json({
        error: {
            code: 'Internal Server Error',
            message: 'Error occured while processing the request'
        }
    })
}