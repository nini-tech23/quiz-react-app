const useLogout = () => {
    const tokenHandler = () =>localStorage.getItem('token')
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
    return {tokenHandler, handleLogout}
}

export default useLogout