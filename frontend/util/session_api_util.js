export const signup = (formData) => (
    $.ajax({
        method: 'POST',
        url: 'api/users',
        data: formData,
        contentType: false,
        processData: false
    })
)

export const login = (formData) => (
    $.ajax({
        method: 'POST',
        url: 'api/session',
        data: formData,
        contentType: false,
        processData: false
    })
)

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
)