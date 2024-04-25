const api = 'http://195.35.20.207:7084'

export default {
    REGISTERAPI:`${api}/auth/save`,
    LOGINAPI:`${api}/auth/login`,
    USERLIST:`${api}/api/user/list`,
    USERUPLOADPIC:`${api}/api/user/uploadpic`,
    USERCHANGEPASSWORD:`${api}/api/user/changepassword`,
    LOGININFOAPIS:`${api}/api/user/me`,
    USERUPADTE:`${api}/api/user/update`,
    POSTAPI:`${api}/api/post/list`,
    COMMENTSAVE:`${api}/api/comment/save`,
    MESSAGESAVE:`${api}/api/user/msg/send`,
    SPECIFICUSERMESSAGE:`${api}/api/user/msg/get/`,
    USERPOSTSAVE:`${api}/api/post/save`,
    SPECIFICUSERPOSTLIST:`${api}/api/post/userpost/`,
    // LOGINUSERPOSTLIST:`${api}/api/post/mypost`
    LOGINUSERPOSTLIST:"http://195.35.20.207:7084/api/post/mypost"
}