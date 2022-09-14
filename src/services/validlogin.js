const validLogin = {
    userValid: (user, email, pass) => {
    if (!user || user.email !== email || user.password !== pass) {
        return { message: 'Invalid fields', code: 400 };
    }
    return 'xablau';
},
    emailPassValid: (email, pass) => {
        if (!email || !pass) return { message: 'Some required fields are missing', code: 400 };
        return 'xablau';
    },
};
module.exports = validLogin;