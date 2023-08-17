import NextAuth , {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions:NextAuthOptions={
    session:{
        strategy:'jwt'
    },
    providers:[
        CredentialsProvider({
            type:'credentials',
            credentials:{},
            authorize(credentials,req){
                const {email,password}=credentials as {
                    email:string;
                     password:string;
            };

            if(email!=='mustafa@gmail.com' || password!=='1234'){
                throw new Error ("Sorry Invalid credental")
            }

            return{id : "1234",name:"Mustafa" ,email:"mustafa@gmail.com"}
            },
        }),
    ],
    pages:{
        signIn: "auth/Signin",
    }
};
export default  NextAuth(authOptions);