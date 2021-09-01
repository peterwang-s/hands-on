const reg_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
const reg_password = /^(?=.*?[0-9])(?=.*?[a-zA-Z])[0-9a-zA-Z]{8,}$/;

export default {
    reg_email,
    reg_password,
};
