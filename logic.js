class Landing
{
    //property
    dataBase = {
        'Milan':{username:'Milan',password:'Milan123'},
        'Manu':{username:'Manu',password:'Manu123'},
        'Anu':{username:'Anu',password:'Anu123'},
        'Manuel':{username:'Manuel',password:'Manuel123'}
    }
    //method
    save()
    {
        if(this.dataBase)
        {
            localStorage.setItem("dataBase",JSON.stringify(this.dataBase))
        }
    }
    //get date
    getData()
    {
        this.dataBase = JSON.parse(localStorage.getItem("dataBase"))
    }
    //register
    register()
    {
        this.getData()
        let user = registerUser.value
        let pswd = registerPassword.value
        // console.log(user,pswd);
        if(user == "" || pswd == "")
        {
            alert('Please fill the form completely')
        }
        else
        {
            if(user in this.dataBase)
            {
                alert('User Already Exist !!!')
            }
            else
            {
                this.dataBase[user]={username:user,password:pswd}
                this.save()
                alert('User Added Successfully')
                window.location = 'index.html'  // used for navigation
            }
        }

    }
    //login
    login()
    {
        let luser = loginUser.value
        let lpswd = loginPassword.value
        console.log(luser,lpswd);
        this.getData()
        if(luser == '' || lpswd == '')
        {
            alert('Please fill the form Completely !!!')
        }
        else
        {
            if(luser in this.dataBase)
            {
               if(this.dataBase[luser].password==lpswd)
               {
                alert('Login Successfull')
                localStorage.setItem("user",luser)
                window.location = 'home.html'
               }
               else
               {
                alert('Wrong Username or Password !!!')
               }
            }
            else
            {
              alert('Wrong Username or Password !!!')
            }
        }
    }
}

//object

const obj = new Landing()
obj.getData()