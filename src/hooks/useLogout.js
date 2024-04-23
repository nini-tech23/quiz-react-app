const useLogout = () => {
    const tokenHandler = () =>localStorage.getItem('token')
    const handleLogout = (token) => {
        localStorage.removeItem('token');
        window.location.reload();
    }
    return {tokenHandler, handleLogout}
}

export default useLogout